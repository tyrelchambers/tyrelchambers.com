import React, { useState } from "react";
import { json, redirect, useFetcher, useLoaderData } from "remix";
import { postToDevTo, postToHashNode } from "~/api";

import AdminHeader from "~/layouts/AdminHeader";
import CustomSelect from "~/components/CustomSelect";
import TextareaAutosize from "react-textarea-autosize";
import { getSession } from "~/supabase.server";
import invariant from "tiny-invariant";
import { supabase } from "~/supabase.server";
import { tags } from "~/constants/blogTags";

export const loader = async ({ params, request }) => {
  invariant(params.id, "expected params.id");
  let { data: post } = await supabase
    .from("posts")
    .select()
    .eq("id", params.id)
    .single();

  const session = await getSession(request.headers.get("Cookie"));

  if (!session.has("access_token")) {
    return redirect("/login");
  }

  return { post, id: params.id };
};

export const action = async ({ request }) => {
  const {
    _fields: {
      title,
      description,
      cover_img,
      markdown,
      tags,
      hashNode,
      devTo,
      id,
    },
  } = await request.formData();

  const slug = title[0]
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9\-]/g, "")
    .toLowerCase();

  const formattedtags = JSON.parse(tags).map((tag) => ({
    name: tag.name,
    _id: tag._id,
    slug: tag.slug,
  }));

  const canonical_url = "https://tyrelchambers.com/blog/" + slug;

  const { data: newPost, error } = await supabase
    .from("posts")
    .update({
      title: title[0],
      slug,
      markdown: markdown[0],
      tags: formattedtags,
      cover_img: cover_img[0],
      description: description[0],
    })
    .eq("id", id)
    .single();

  if (error) {
    return json({ error });
  }

  newPost.devTo = devTo[0] === "true";
  newPost.hashNode = hashNode[0] === "true";

  if (devTo[0] === "true") {
    await postToDevTo({
      article: {
        body_markdown: markdown[0],
        title: title[0],
        tags: formattedtags,
        main_img: cover_img[0],
        canonical_url,
      },
    });
  }

  if (hashNode[0] === "true") {
    await postToHashNode({
      title: title[0],
      contentMarkdown: markdown[0],
      coverImageURL: cover_img[0],
      originalArticleURL: canonical_url,
      tags: formattedtags,
    });
  }

  return redirect("/admin/posts");
};

const edit = () => {
  const data = useLoaderData();
  const [state, setState] = useState({ ...data.post });
  const fetcher = useFetcher();

  const submitHandler = async (e) => {
    fetcher.submit(
      { ...state, tags: JSON.stringify(state.tags), id: data.id },
      { method: "post" }
    );
  };
  return (
    <div className="ml-auto mr-auto mt-10 max-w-screen-2xl">
      <AdminHeader />

      <main className="mt-10 max-w-3xl p-4">
        <h2 className="h2">
          Editing - <span className="text-blue-200">{data.post.title}</span>
        </h2>
        <fetcher.Form
          className="mt-8 flex flex-col gap-10"
          onSubmit={submitHandler}
        >
          <div className="flex flex-col">
            <label htmlFor="title" className="text-xl  text-yellow-300">
              Title
            </label>
            <p className="mb-2 text-gray-400">
              This title is used for cross-posting to other platforms
            </p>
            <input
              type="text"
              name="title"
              className="w-full rounded-lg bg-zinc-700 p-4 text-white"
              placeholder="Post title"
              onChange={(e) => setState({ ...state, title: e.target.value })}
              value={state.title}
            />
            <p className="mt-2 text-sm font-thin text-gray-300">
              https://tyrelchambers.com/blog/
              {state.title
                .replace(/\s+/g, "-")
                .replace(/[^a-zA-Z0-9\-]/g, "")
                .toLowerCase()}
            </p>
          </div>

          <div className="flex flex-col">
            <label htmlFor="title" className="text-xl  text-yellow-300">
              Description
            </label>
            <p className="mb-2 text-gray-400">
              A brief summary of what this article is about
            </p>
            <input
              type="text"
              name="description"
              className="w-full rounded-lg bg-zinc-700 p-4 text-white"
              placeholder="Post description"
              onChange={(e) =>
                setState({ ...state, description: e.target.value })
              }
              value={state.description}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="cover_img" className="text-xl  text-yellow-300">
              Cover image URL
            </label>
            <p className="mb-2 text-gray-400">
              This is the image that will be used as the cover image for your
              post
            </p>
            <input
              type="text"
              name="cover_img"
              className="w-full rounded-lg bg-zinc-700 p-4 text-white"
              placeholder="Cover image url"
              onChange={(e) =>
                setState({ ...state, cover_img: e.target.value })
              }
              value={state.cover_img}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="markdown" className="text-xl  text-yellow-300">
              Markdown
            </label>
            <p className="mb-2 text-gray-400">Your markdown</p>
            <TextareaAutosize
              minRows={10}
              className="w-full max-w-3xl rounded-lg bg-zinc-700 p-2 text-white"
              name="markdown"
              placeholder="Markdown"
              onChange={(e) => setState({ ...state, markdown: e.target.value })}
              value={state.markdown}
            />
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <label htmlFor="tags" className="text-xl text-yellow-300">
              Tags
            </label>
            <CustomSelect
              options={tags.map((tag) => ({
                ...tag,
                value: tag.slug,
                label: tag.name,
              }))}
              isMulti
              onChange={(e) => setState({ ...state, tags: e })}
              value={state.tags.map((tag) => ({
                ...tag,
                label: tag.name,
                value: tag.slug,
              }))}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xl  text-yellow-300">Platforms</label>
            <p className="mb-2 text-gray-400">
              Select which platforms to cross-post to
            </p>
            <fieldset className="flex gap-4">
              <label className="mr-2 text-gray-400">
                <input
                  type="checkbox"
                  name="devTo"
                  className="mr-4"
                  onChange={(e) =>
                    setState({ ...state, devTo: e.target.checked })
                  }
                  checked={state.devTo}
                />
                Dev.to
              </label>

              <label className="mr-2 text-gray-400">
                <input
                  type="checkbox"
                  name="hashNode"
                  className="mr-4"
                  checked={state.hashNode}
                  onChange={(e) =>
                    setState({ ...state, hashNode: e.target.checked })
                  }
                />
                Hashnode
              </label>
            </fieldset>
          </div>

          <button
            className="link-button primary small mt-6"
            type="submit"
            disabled={fetcher.state === "submitting"}
          >
            {fetcher.state === "submitting"
              ? "Updating post..."
              : " Update post"}
          </button>
        </fetcher.Form>
      </main>
    </div>
  );
};

export default edit;
