import TextareaAutosize from "react-textarea-autosize";
import { Form, redirect } from "remix";
import { bundleMDX } from "~/compile-mdx.server";
import AdminHeader from "~/layouts/AdminHeader";
import { db } from "~/db.server";
import { useState } from "react";
import DevTo from "~/components/DevTo";
import HashNode from "~/components/HashNode";

export const action = async ({ request }) => {
  const {
    _fields: { markdown, devTo, title, slug, hashNode },
  } = await request.formData();

  await bundleMDX({
    source: markdown[0],
  });

  await db.post.create({
    data: {
      title: title[0],
      slug: slug[0],
      content: markdown[0],
    },
  });

  return redirect(`/admin`);
};

const newPost = () => {
  const [platform, setPlatform] = useState([]);

  const checkHandler = (e) => {
    if (e.target.checked) {
      setPlatform([...platform, e.target.name]);
    } else {
      setPlatform(platform.filter((item) => item !== e.target.value));
    }
  };

  return (
    <div className="max-w-screen-2xl ml-auto mr-auto mt-10">
      <AdminHeader />
      <h3 className="h3 mt-20">Create a post</h3>
      <div className="max-w-2xl w-full mt-8">
        <Form method="post" className="flex flex-col gap-10">
          <div className="flex flex-col">
            <label htmlFor="title" className="text-yellow-300  text-xl">
              Title
            </label>
            <p className="text-gray-400 mb-2">
              This title is used for cross-posting to other platforms
            </p>
            <input
              type="text"
              name="title"
              className="rounded-lg p-4 bg-zinc-700 w-full text-white"
              placeholder="Post title"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="slug" className="text-yellow-300  text-xl">
              Slug
            </label>
            <p className="text-gray-400 mb-2">Post slug</p>
            <input
              type="text"
              name="slug"
              className="rounded-lg p-4 bg-zinc-700 w-full text-white"
              placeholder="Post slug"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="markdown" className="text-yellow-300  text-xl">
              Markdown
            </label>
            <p className="text-gray-400 mb-2">Your markdown</p>
            <TextareaAutosize
              minRows={10}
              className="w-full max-w-3xl rounded-lg bg-zinc-700 p-2 text-white"
              name="markdown"
              placeholder="Markdown"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-yellow-300  text-xl">Platforms</label>
            <p className="text-gray-400 mb-2">
              Select which platforms to cross-post to
            </p>
            <fieldset className="flex gap-4">
              <label className="text-gray-400 mr-2">
                <input
                  type="checkbox"
                  name="devTo"
                  className="mr-4"
                  onClick={(e) => checkHandler(e)}
                />
                Dev.to
              </label>

              <label className="text-gray-400 mr-2">
                <input
                  type="checkbox"
                  name="hashNode"
                  className="mr-4"
                  onClick={(e) => checkHandler(e)}
                />
                Hashnode
              </label>
            </fieldset>
          </div>

          <div className="flex flex-col">
            <h3 className="text-white  text-3xl">Platform Config</h3>
            <p className="text-gray-400">
              Configure the post for each platform
            </p>
            {platform.includes("devTo") && <DevTo />}
            {platform.includes("hashNode") && <HashNode />}
          </div>

          <button className="link-button primary small mt-6" type="submit">
            Create post
          </button>
        </Form>
      </div>
    </div>
  );
};

export default newPost;
