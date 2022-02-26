import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Form } from "remix";

export const action = async ({ request }) => {
  const body = await request.formData();
  console.log(body);
  return null;
};
const Editor = () => {
  return (
    <div className="w-full">
      <h3 className="h3 mt-20">Create a post</h3>
      <Form method="post" action="/admin/post/new">
        <TextareaAutosize
          minRows={10}
          className="w-full max-w-3xl mt-4 rounded-lg bg-zinc-700 p-2 text-white"
        />

        <button className="link-button primary small mt-6" type="submit">
          Create post
        </button>
      </Form>
    </div>
  );
};

export default Editor;
