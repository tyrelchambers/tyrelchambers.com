import { Form, Link, redirect, useLoaderData } from "remix";

import AdminHeader from "~/layouts/AdminHeader";
import React from "react";
import invariant from "tiny-invariant";
import { overrides } from "~/constants/markdownOverrides";
import { supabase } from "~/utils/supabase";

export const loader = async ({ params }) => {
  invariant(params.id, "expected params.slug");
  const { data } = await supabase.from("posts").select().eq("id", params.id);

  const post = data[0];

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
        <div className="flex max-w-2xl flex-col p-4 ">
          <h3 className="h3 coloured mb-6">{post.post.title}</h3>
          <div className="prose break-words prose-h1:font-normal prose-h1:text-white prose-h2:font-thin prose-h2:text-white prose-h3:font-thin prose-h3:text-white prose-p:text-gray-400 prose-a:text-yellow-300 prose-a:underline prose-strong:text-white prose-code:text-sky-300">
            {/* {markdown(post.post.markdown)} */}
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
        </div>
      </main>
    </div>
  );
};

export default $slug;
