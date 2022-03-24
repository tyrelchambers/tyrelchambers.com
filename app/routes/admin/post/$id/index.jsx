import { Form, Link, redirect, useLoaderData } from "remix";

import AdminHeader from "~/layouts/AdminHeader";
import MarkdownRender from "~/components/MarkdownRender";
import React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getPostById } from "~/blogPosts-server";
import { getSession } from "~/supabase.server";
import invariant from "tiny-invariant";
import { supabase } from "~/utils/supabase";

export const loader = async ({ params, request }) => {
  invariant(params.id, "expected params.slug");
  const post = await getPostById(params.id);

  const session = await getSession(request.headers.get("Cookie"));

  if (!session.has("access_token")) {
    return redirect("/login");
  }

  return { post, id: params.id };
};

export const action = async ({ request, params }) => {
  const form = await request.formData();

  if (form.get("_method") !== "delete") {
    throw new Response(`The _method ${form.get("_method")} is not supported`, {
      status: 400,
    });
  }

  const { data } = await supabase.from("posts").select().eq("id", params.id);
  const post = data[0];

  if (!post) {
    throw new Response("Can't delete what does not exist", {
      status: 404,
    });
  }

  await supabase.from("posts").delete().eq("id", params.id);

  return redirect("/admin/posts");
};

const $slug = () => {
  const post = useLoaderData();

  return (
    <div className="ml-auto mr-auto mt-10 max-w-screen-2xl">
      <AdminHeader />

      <main className="mt-14 flex flex-col-reverse gap-10 tablet:flex-row">
        <div className="flex w-full max-w-2xl flex-col p-4 ">
          <h3 className="h3 coloured mb-6">{post.post.title}</h3>
          <MarkdownRender html={post.post.markdown} />

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {post.post.tags.map((tag, i) => (
              <p
                className="flex w-fit items-center justify-center rounded-full bg-slate-700 px-4 py-2 text-sm text-white"
                key={i}
              >
                {tag.value || tag.name}
              </p>
            ))}
          </div>
        </div>
        <div className="sticky top-10  m-4 flex h-fit flex-col gap-6 rounded-lg border-2 border-gray-700 p-4 tablet:w-[200px]">
          <Link
            to={`/admin/post/${post.id}/edit`}
            className="link-button small primary w-full"
          >
            Edit article
          </Link>

          <Form method="post" className="w-full">
            <input type="hidden" name="_method" value="delete" />
            <button type="submit" className="link-button small danger w-full">
              Delete
            </button>
          </Form>
          {post.post.published ? (
            <p className=" text-green-300">published</p>
          ) : (
            <p className=" text-orange-300">draft</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default $slug;
