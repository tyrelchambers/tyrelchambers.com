import TextareaAutosize from "react-textarea-autosize";
import { json, redirect, useFetcher } from "remix";
import { bundleMDX } from "~/compile-mdx.server";
import AdminHeader from "~/layouts/AdminHeader";
import { useEffect, useState } from "react";
import { postToDevTo, postToHashNode } from "~/api/index";
import CustomSelect from "~/components/CustomSelect";
import { tags } from "~/constants/blogTags";
import { supabase } from "~/utils/supabase";

export const action = async ({ request }) => {
  const {
    _fields: { title, description, cover_img, markdown, tags, hashNode, devTo },
  } = await request.formData();

  const slug = title[0]
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9\-]/g, "")
    .toLowerCase();

  const formattedtags = JSON.parse(tags).map((tag) => ({
    name: tag.name,
    _id: tag._id,
  }));

  await bundleMDX({
    source: markdown[0],
  });

  const canonical_url = "https://tyrelchambers.com/blog/" + slug;

  const { error } = await supabase.from("post").insert({
    title: title[0],
    slug: slug[0],
    markdown: markdown[0],
    tags: formattedtags,
    cover_img: cover_img[0],
    description: description[0],
    devTo: devTo[0],
    hashNode: hashNode[0],
  });

  if (error) {
    return { error };
  }

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
      publicationId: "6096b94d1ea29f2c341e0420",
    });
  }

  return json({ ok: true });
};

const newPost = () => {
  const [state, setState] = useState({
    title: "",
    tags: [],
    description: "",
    cover_img: "",
    markdown: "",
    hashNode: false,
    devTo: false,
  });
  const fetcher = useFetcher();

  const submitHandler = async (e) => {
    fetcher.submit(
      { ...state, tags: JSON.stringify(state.tags) },
      { method: "post" }
    );
  };

  return (
    <div className="max-w-screen-2xl ml-auto mr-auto mt-10">
      <AdminHeader />
      <h3 className="h3 mt-20">Create a post</h3>
      <div className="max-w-2xl w-full mt-8">
        <fetcher.Form className="flex flex-col gap-10" onSubmit={submitHandler}>
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
                  onClick={(e) =>
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
                  onClick={(e) =>
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
              ? "Creating post..."
              : "Create post"}
          </button>
        </fetcher.Form>
      </div>
    </div>
  );
};

export default newPost;
