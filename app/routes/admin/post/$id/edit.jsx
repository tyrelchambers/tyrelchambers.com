import { useFetcher, useLoaderData } from "@remix-run/react";

import AdminHeader from "~/layouts/AdminHeader";
import CustomSelect from "~/components/CustomSelect";
import TextareaAutosize from "react-textarea-autosize";
import invariant from "tiny-invariant";
import { supabase } from "~/supabase.server";
import { tags } from "~/constants/blogTags";
import { useState } from "react";
import { requireUser } from "../../../../session.server";

export const loader = async ({ params, request }) => {
  requireUser(request);

  invariant(params.id, "expected params.id");
  let { data: post } = await supabase
    .from("posts")
    .select()
    .eq("id", params.id)
    .single();

  return { post, id: params.id };
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const description = formData.get("description");
  const cover_img = formData.get("cover_img");
  const markdown = formData.get("markdown");
  const tags = formData.get("tags");
  const id = formData.get("id");
  const published = formData.get("published");

  const slug = title
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9\-]/g, "")
    .toLowerCase();

  const formattedTags = JSON.parse(tags).map((tag) => ({
    value: tag.value,
    label: tag.label,
  }));

  const { error } = await supabase
    .from("posts")
    .update({
      title: title,
      slug,
      markdown: markdown,
      tags: formattedTags,
      cover_img: cover_img,
      description: description,
      published: published,
    })
    .eq("id", id)
    .single();

  if (error) {
    return json({ error });
  }

  return redirect("/admin/posts");
};

const edit = () => {
  const data = useLoaderData();
  const [state, setState] = useState({ ...data.post });
  const fetcher = useFetcher();

  const submitHandler = async (e) => {
    fetcher.submit(
      {
        ...state,
        tags: JSON.stringify(state.tags),
        id: data.id,
      },
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

          {console.log(tags)}

          <div className="mt-4 flex flex-col gap-2">
            <label htmlFor="tags" className="text-xl text-yellow-300">
              Tags
            </label>
            <CustomSelect
              options={tags}
              isMulti
              onChange={(e) => setState({ ...state, tags: e })}
              value={
                state.tags?.map((tag) => ({
                  ...tag,
                })) || null
              }
            />
          </div>

          <div className="mt-6 flex items-center gap-6">
            <button
              className="link-button primary small"
              type="submit"
              disabled={fetcher.state === "submitting"}
            >
              {fetcher.state === "submitting"
                ? "Updating post..."
                : " Update post"}
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
      </main>
    </div>
  );
};

export default edit;
