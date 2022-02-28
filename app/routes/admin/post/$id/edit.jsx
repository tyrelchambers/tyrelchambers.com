import { bundleMDX } from "~/compile-mdx.server";
import React, { useEffect, useState } from "react";
import { json, redirect, useFetcher, useLoaderData } from "remix";
import AdminHeader from "~/layouts/AdminHeader";
import invariant from "tiny-invariant";
import TextareaAutosize from "react-textarea-autosize";
import CustomSelect from "~/components/CustomSelect";
import { tags } from "~/constants/blogTags";
import { supabase } from "~/supabase.server";
import { postToDevTo, postToHashNode } from "~/api";

export const loader = async ({ params }) => {
  invariant(params.id, "expected params.id");
  let { data: post } = await supabase
    .from("post")
    .select()
    .eq("id", params.id)
    .single();

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

  await bundleMDX({
    source: markdown[0],
  });

  const canonical_url = "https://tyrelchambers.com/blog/" + slug;

  const { data: newPost, error } = await supabase
    .from("post")
    .update({
      title: title[0],
      slug: slug[0],
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
    <div className="max-w-screen-2xl ml-auto mr-auto mt-10">
      <AdminHeader />

      <main className="mt-10 max-w-3xl p-4">
        <h2 className="h2">
          Editing - <span className="text-blue-200">{data.post.title}</span>
        </h2>
        <fetcher.Form
          className="flex flex-col gap-10 mt-8"
          onSubmit={submitHandler}
        >
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
              onChange={(e) => setState({ ...state, title: e.target.value })}
              value={state.title}
            />
            <p className="text-gray-300 font-thin text-sm mt-2">
              https://tyrelchambers.com/blog/
              {state.title
                .replace(/\s+/g, "-")
                .replace(/[^a-zA-Z0-9\-]/g, "")
                .toLowerCase()}
            </p>
          </div>

          <div className="flex flex-col">
            <label htmlFor="title" className="text-yellow-300  text-xl">
              Description
            </label>
            <p className="text-gray-400 mb-2">
              A brief summary of what this article is about
            </p>
            <input
              type="text"
              name="description"
              className="rounded-lg p-4 bg-zinc-700 w-full text-white"
              placeholder="Post description"
              onChange={(e) =>
                setState({ ...state, description: e.target.value })
              }
              value={state.description}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="cover_img" className="text-yellow-300  text-xl">
              Cover image URL
            </label>
            <p className="text-gray-400 mb-2">
              This is the image that will be used as the cover image for your
              post
            </p>
            <input
              type="text"
              name="cover_img"
              className="rounded-lg p-4 bg-zinc-700 w-full text-white"
              placeholder="Cover image url"
              onChange={(e) =>
                setState({ ...state, cover_img: e.target.value })
              }
              value={state.cover_img}
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
              onChange={(e) => setState({ ...state, markdown: e.target.value })}
              value={state.markdown}
            />
          </div>

          <div className="flex flex-col mt-4 gap-2">
            <label htmlFor="tags" className="text-yellow-300 text-xl">
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
                  onChange={(e) =>
                    setState({ ...state, devTo: e.target.checked })
                  }
                  checked={state.devTo}
                />
                Dev.to
              </label>

              <label className="text-gray-400 mr-2">
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
