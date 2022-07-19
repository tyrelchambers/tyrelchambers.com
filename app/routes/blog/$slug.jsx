import { Link, useLoaderData } from "@remix-run/react";
import { getPost, getPosts, triggerView } from "../../blogPosts.server";

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

  if (process.env.NODE_ENV !== "development") {
    await triggerView(post.id);
  }

  if (!post) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  const suggestions = getArticleSuggestions({ articles: posts, count: 3 });
  return { post, suggestions, markdown };
};

const PostSlug = () => {
  const { post, suggestions, markdown } = useLoaderData();

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
            <Divider />

            <div className="flex items-center gap-2">
              <i className="fa-solid fa-face-grin-hearts text-yellow-500"></i>
              <p className="text-gray-300">{post.views}</p>
            </div>
          </div>
          <MarkdownRender markdown={markdown} />
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
