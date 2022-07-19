import { Form, Link, useLoaderData } from "@remix-run/react";
import {
  dislikePost,
  getLikes,
  getPost,
  getPosts,
  likePost,
  triggerView,
} from "../../blogPosts.server";

import Divider from "~/components/Divider";
import Footer from "~/layouts/Footer";
import Gap from "~/components/Gap";
import Header from "~/layouts/Header";
import MarkdownRender from "../../components/MarkdownRender";
import PostFooter from "~/layouts/PostFooter";
import PostItem from "~/components/PostItem";
import React from "react";
import { format } from "date-fns";
import { getArticleSuggestions } from "~/utils/getArticleSuggestions";
import invariant from "tiny-invariant";
import { getIPAddress } from "../../utils";

export const meta = ({ data }) => {
  if (!data) {
    return {
      title: "No post found",
      description: "No post found",
    };
  }

  return {
    title: data.post.title,
    description: data.post.description,
    "og:image": data.post.cover_img,
    "og:url": `https://tyrelchambers.com/blog/${data.post.slug}`,
    "twitter:card": data.post.cover_img ? "summary_large_image" : "summary",
    "twitter:title": data.post.title,
    "twitter:description": data.post.description,
    "twitter:image": data.post.cover_img,
    "twitter:site": "@imtyrelchambers",
    "twitter:creator": "@imtyrelchambers",
    "og:site_name": "Tyrel Chambers",
    "og:locale": "en_US",
    "og:type": "article",
    "og:title": data.post.title,
    "og:description": data.post.description,
  };
};

export const loader = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  const { posts } = await getPosts();
  const { post, markdown } = await getPost(params.slug);
  const ipAddress = await getIPAddress();

  const liked = await getLikes(ipAddress, post.slug);

  if (process.env.NODE_ENV !== "development") {
    await triggerView(post.id);
  }

  if (!post) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  const suggestions = getArticleSuggestions({ articles: posts, count: 3 });
  return { post, suggestions, markdown, isLiked: !!liked };
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const action = formData.get("action");
  const slug = params.slug;

  if (action === "like-post") {
    const ipAddress = await getIPAddress();
    likePost(ipAddress, slug);
  }

  if (action === "dislike-post") {
    const ipAddress = await getIPAddress();
    dislikePost(ipAddress, slug);
  }

  return null;
};
const PostSlug = () => {
  const { post, suggestions, markdown, isLiked } = useLoaderData();

  return (
    <div>
      <Header isDim />
      <div className="blog-post-bg relative flex h-[500px] items-center">
        <img
          src={post.cover_img}
          alt=""
          className="mb-10 w-full rounded-lg object-cover shadow-lg"
        />
      </div>
      <div className="absolute top-1/3 z-10 flex w-full flex-col items-center">
        <div className="mt-10 max-w-screen-md p-4">
          <h1 className="h1 ">{post.title}</h1>
          <div className="mb-10 flex items-center gap-4 ">
            <p className="text-teal-400">
              {format(new Date(post.created_at), "MMMM do, yyyy")}
            </p>
          </div>
          <MarkdownRender markdown={markdown} />
          <hr className="mt-20 mb-10 border-zinc-700" />
          <div className="flex w-full items-center justify-between rounded-xl bg-gray-800 p-6">
            <div className="flex flex-col gap-2">
              <p className="text-xl font-normal text-white">
                Did you enjoy this article?
              </p>
              <p className="text-sm text-gray-400">
                Consider liking it! I'd surely appreciate the love.
              </p>
            </div>
            <Form method="post">
              {isLiked ? (
                <button
                  className="flex items-center gap-2 rounded-full border-2 border-red-400 bg-red-900 bg-opacity-30 py-1 px-3 text-gray-100"
                  value="dislike-post"
                  name="action"
                >
                  <i class="fa-solid fa-heart  text-red-400"></i>
                  glad you liked it!
                </button>
              ) : (
                <button
                  className="flex items-center gap-2 rounded-full border-2 border-gray-400 py-1 px-3 text-gray-400"
                  value="like-post"
                  name="action"
                >
                  <i class="fa-solid fa-heart  text-gray-400"></i>
                  press me
                </button>
              )}
            </Form>
          </div>
          <div className="mt-8 flex items-center gap-2">
            <i class="fa-solid fa-face-grin-hearts text-xl text-teal-400"></i>
            <p className="text-sm font-semibold text-gray-300">
              {post.views} <span className="font-thin">views</span>
            </p>
          </div>
        </div>
        <Gap height="h-12" />
        <PostFooter postTitle={post.title} slug={post.slug} />
        <Gap />
        <div className="ml-auto mr-auto flex max-w-screen-xl flex-col p-4">
          <h2 className="h2">If you enjoyed this article</h2>
          <p className="subtitle">You might enjoy one of these suggestions</p>
          <div className="mt-10 grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
            {suggestions.map((post) => (
              <PostItem key={post.slug} post={post} />
            ))}
          </div>
        </div>
        <Gap />
        <Footer />
      </div>
    </div>
  );
};

export default PostSlug;
