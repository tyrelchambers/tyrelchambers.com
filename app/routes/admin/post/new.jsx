import { json, useFetcher } from "remix";
import { postToDevTo, postToHashNode } from "~/api/index";

import AdminHeader from "~/layouts/AdminHeader";
import CustomSelect from "~/components/CustomSelect";
import DevTo from "../../../components/DevTo";
import Gap from "~/components/Gap";
import Hashnode from "../../../components/Hashnode";
import TextareaAutosize from "react-textarea-autosize";
import { getSession } from "~/supabase.server";
import { supabase } from "~/utils/supabase";
import { tags } from "~/constants/blogTags";
import { useState } from "react";

export const loader = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));

  if (!session.has("access_token")) {
    return redirect("/login");
  }

  return null;
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
      devToTags,
      hashNodeTags,
      published,
    },
  } = await request.formData();

  const slug = title[0]
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9\-]/g, "")
    .toLowerCase();

  const formattedHashNodeTags = JSON.parse(hashNodeTags).map((tag) => ({
    name: tag.name,
    _id: tag._id,
  }));

  const formattedDevToTags = JSON.parse(devToTags).map((tag) => tag.value);

  const formattedTags = JSON.parse(tags).map((tag) => ({
    value: tag.value,
    label: tag.label,
  }));

  const canonical_url = "https://tyrelchambers.com/blog/" + slug;

  const { error } = await supabase.from("posts").insert({
    title: title[0],
    slug,
    markdown: markdown[0],
    tags: formattedTags,
    cover_img: cover_img[0],
    description: description[0],
    devTo: devTo[0],
    hashNode: hashNode[0],
    published: published[0],
  });

  if (error) {
    console.log(error);
    return { error };
  }

  if (devTo[0] === "true") {
    await postToDevTo({
      article: {
        body_markdown: markdown[0],
        title: title[0],
        tags: formattedDevToTags,
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
      tags: formattedHashNodeTags,
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
    devToTags: [],
    hashNodeTags: [],
    published: false,
  });
  const fetcher = useFetcher();

  const submitHandler = async (e) => {
    fetcher.submit(
      {
        ...state,
        tags: JSON.stringify(state.tags),
        devToTags: JSON.stringify(state.devToTags),
        hashNodeTags: JSON.stringify(state.hashNodeTags),
      },
      { method: "post" }
    );
  };

  return (
    <div className="ml-auto mr-auto mt-10 max-w-screen-2xl">
      <AdminHeader />
      <Gap height="h-12" />
      <main className="p-4">
        <h3 className="h3 mt-4">Create a post</h3>
        <div className="mt-8 w-full max-w-2xl">
          <fetcher.Form
            className="flex flex-col gap-10"
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
              <label htmlFor="description" className="text-xl  text-yellow-300">
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
                onChange={(e) =>
                  setState({ ...state, markdown: e.target.value })
                }
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
                }))}
                isMulti
                onChange={(e) => setState({ ...state, tags: e })}
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
                    onClick={(e) =>
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
                    onClick={(e) =>
                      setState({ ...state, hashNode: e.target.checked })
                    }
                  />
                  Hashnode
                </label>
              </fieldset>
            </div>
            {state.devTo && <DevTo state={state} setState={setState} />}
            {state.hashNode && <Hashnode state={state} setState={setState} />}

            <div className="mt-6 flex items-center gap-6">
              <button
                className="link-button primary small "
                type="submit"
                disabled={fetcher.state === "submitting"}
              >
                {fetcher.state === "submitting"
                  ? "Creating post..."
                  : "Create post"}
              </button>

              <label className="text-gray-400">
                <input
                  type="checkbox"
                  name="published"
                  className="mr-2"
                  onClick={(e) =>
                    setState({ ...state, published: e.target.checked })
                  }
                  checked={state.published}
                />
                Publish now
              </label>
            </div>
          </fetcher.Form>
        </div>
      </main>
    </div>
  );
};

export default newPost;
