import { bundleMDX } from "~/compile-mdx.server";
import React from "react";
import { useLoaderData } from "remix";
import AdminHeader from "~/layouts/AdminHeader";
import { db } from "~/db.server";
import invariant from "tiny-invariant";
import TextareaAutosize from "react-textarea-autosize";

export const loader = async ({ params }) => {
  invariant(params.id, "expected params.id");
  const post = await db.post.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  const { frontmatter } = await bundleMDX({
    source: post.content,
  });

  return { content: post.content, frontmatter, id: params.id };
};

const edit = () => {
  const post = useLoaderData();

  return (
    <div className="max-w-screen-2xl ml-auto mr-auto mt-10">
      <AdminHeader />

      <main className="mt-10">
        <h2 className="h2">
          Editing -{" "}
          <span className="text-green-200">{post.frontmatter.title}</span>
        </h2>
        <TextareaAutosize
          minRows={10}
          className="w-full max-w-3xl mt-10 rounded-lg bg-zinc-700 p-2 text-white"
          name="markdown"
          value={post.content}
        />
      </main>
    </div>
  );
};

export default edit;
