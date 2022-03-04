import { Link, Meta, useLoaderData } from "remix";

import Footer from "~/layouts/Footer";
import Gap from "~/components/Gap";
import Header from "~/layouts/Header";
import Markdown from "markdown-to-jsx";
import PostFooter from "~/layouts/PostFooter";
import PostItem from "~/components/PostItem";
import React from "react";
import { format } from "date-fns";
import { getArticleSuggestions } from "~/utils/getArticleSuggestions";
import invariant from "tiny-invariant";
import { overrides } from "~/constants/markdownOverrides";
import { supabase } from "~/supabase.server";

export const meta = (props) => {
  return {
    title: "Tyrel Chambers | Blog",
    description: "",
  };
};

export const loader = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  const { body: posts } = await supabase.from("posts").select();
  const { body: post } = await supabase
    .from("posts")
    .select()
    .eq("slug", params.slug)
    .single();

  if (!post) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  const suggestions = getArticleSuggestions({ articles: posts, count: 3 });
  return { post, suggestions };
};

const PostSlug = () => {
  const { post, suggestions } = useLoaderData();

  return (
    <div>
      <Header />
      <div className="ml-auto mr-auto mt-20 max-w-screen-md">
        <Link to="/blog" className="text-white">
          <i className="fa-solid fa-arrow-left-long mr-8"></i>
          Back to blogs
        </Link>
        <Gap height="h-20" />
        <img
          src={post.cover_img}
          alt=""
          className="mb-10 h-[500px] w-full rounded-lg object-cover shadow-lg"
        />
        <h1 className="h1 ">{post.title}</h1>
        <p className="mb-10 text-teal-400">
          {format(new Date(post.created_at), "MMMM do, yyyy")}
        </p>
        <div className="prose prose-h2:font-thin prose-h2:text-white prose-h3:font-thin prose-h3:text-white prose-p:text-gray-400 prose-a:text-yellow-300 prose-a:underline prose-strong:text-white prose-code:text-red-300">
          <Markdown options={{ ...overrides }}>{post.markdown}</Markdown>
        </div>
      </div>
      <Gap />
      <PostFooter postTitle={post.title} slug={post.slug} />
      <Gap />
      <div className="ml-auto mr-auto flex max-w-screen-xl flex-col">
        <h2 className="h2">If you enjoyed this article</h2>
        <p className="subtitle">You might enjoy one of these suggestions</p>
        <div className="mt-10 grid grid-cols-3 gap-10">
          {suggestions.map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </div>
      </div>
      <Gap />
      <Footer />
    </div>
  );
};

export default PostSlug;
