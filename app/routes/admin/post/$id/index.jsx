import React from "react";
import AdminHeader from "~/layouts/AdminHeader";
import { db } from "~/db.server";
import { Form, Link, redirect, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { bundleMDX } from "~/compile-mdx.server";
import { getMDXComponent } from "mdx-bundler/client";

export const loader = async ({ params }) => {
  invariant(params.id, "expected params.slug");
  const post = await db.post.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  const { code, frontmatter } = await bundleMDX({
    source: post.content,
  });

  return { code, frontmatter, id: params.id };
};

export const action = async ({ request, params }) => {
  const form = await request.formData();

  if (form.get("_method") !== "delete") {
    throw new Response(`The _method ${form.get("_method")} is not supported`, {
      status: 400,
    });
  }

  const post = await db.post.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!post) {
    throw new Response("Can't delete what does not exist", {
      status: 404,
    });
  }

  await db.post.delete({
    where: {
      id: Number(params.id),
    },
  });

  return redirect("/admin/posts");
};

const $slug = () => {
  const post = useLoaderData();
  const Component = React.useMemo(
    () => getMDXComponent(post.code),
    [post.code]
  );

  return (
    <div className="max-w-screen-2xl ml-auto mr-auto mt-10">
      <AdminHeader />

      <main className="mt-10">
        <p className="text-gray-300 text-xl">{post.frontmatter.title}</p>
        <div className="flex gap-10">
          <div className="prose prose-p:text-gray-400 prose-h2:text-white prose-h3:text-white prose-a:text-yellow-300 prose-a:underline prose-strong:text-white prose-code:text-red-300 prose-h2:font-thin prose-h3:font-thin">
            <Component />
          </div>
          <div className="flex flex-col gap-6">
            <Link
              to={`/admin/post/${post.id}/edit`}
              className="link-button small outline"
            >
              Edit article
            </Link>

            <Form method="post">
              <input type="hidden" name="_method" value="delete" />
              <button type="submit" className="text-red-300 underline">
                Delete
              </button>
            </Form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default $slug;
