import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Form, json, redirect } from "remix";
import { bundleMDX } from "~/compile-mdx.server";
import AdminHeader from "~/layouts/AdminHeader";
import { uploadToS3 } from "~/utils/aws";
import { slugify } from "~/utils/slugify";

export const action = async ({ request }) => {
  const {
    _fields: { markdown },
  } = await request.formData();

  const { frontmatter } = await bundleMDX({
    source: markdown[0],
  });

  if (!frontmatter.title) return json({ error: "Title is required" });

  await uploadToS3({
    key: `${slugify(frontmatter.title)}.mdx`,
    body: markdown,
  });

  return redirect(`/admin`);
};

const newPost = () => {
  return (
    <div className="max-w-screen-2xl ml-auto mr-auto mt-10">
      <AdminHeader />
      <h3 className="h3 mt-20">Create a post</h3>
      <Form method="post">
        <TextareaAutosize
          minRows={10}
          className="w-full max-w-3xl mt-4 rounded-lg bg-zinc-700 p-2 text-white"
          name="markdown"
        />

        <button className="link-button primary small mt-6" type="submit">
          Create post
        </button>
      </Form>
    </div>
  );
};

export default newPost;
