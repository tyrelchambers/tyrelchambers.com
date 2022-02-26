import React from "react";
import { useLoaderData } from "remix";
import Gap from "~/components/Gap";
import Header from "~/layouts/Header";
import { getPosts } from "~/post";
import { useSearchParams } from "remix";
import Footer from "~/layouts/Footer";
import BlogPosts from "~/components/BlogPosts";
import { Link } from "react-router-dom";

export const loader = async () => {
  return getPosts();
};

const index = () => {
  const posts = useLoaderData();
  const tags = [...new Set(posts.map((post) => post.tags.split(",")).flat())];
  let [searchParams, setSearchParams] = useSearchParams();
  let queryTag = searchParams.get("tag");
  let query = searchParams.get("q");
  const featuredPost = posts[posts.length - 1];

  return (
    <div>
      <Header />
      <Gap />
      <main className="max-w-screen-xl ml-auto mr-auto mb-20">
        <div className="flex gap-20">
          <div className="max-w-2xl flex flex-col w-1/2">
            <h1 className="text-white text-5xl mt-2 leading-snug ">
              Welcome to my growing collection of articles
            </h1>
            <p className="subtitle">
              I write mainly for myself, but hopefully they help you too!
            </p>
            <input
              type="search"
              placeholder="Search for articles"
              className="mt-16 rounded-full p-6 border-2 border-gray-500 bg-zinc-800 bg-opacity-20 text-white"
              onInput={(e) => setSearchParams({ q: e.target.value })}
              value={query}
            />
          </div>
          <div className="w-1/2">
            <h2 className="h3 mb-6">Featured article</h2>
            <div className="flex flex-col w-full bg-zinc-800  rounded-lg shadow-lg">
              <img
                src={featuredPost.banner}
                alt=""
                className="w-full h-52 object-cover mb-4  rounded-lg"
              />
              <div className="p-6">
                <h3 className="h3">{featuredPost.title}</h3>
                <p className="text-xl text-gray-400 mt-4">
                  {featuredPost.description}
                </p>
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="link-button small secondary mt-6"
                >
                  Read post
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Gap height="h-28" />
        <section>
          <div className="flex flex-col">
            <h3 className="h3">Search by tag</h3>
            <div className="flex gap-2 mt-8 max-w-3xl flex-wrap">
              {tags.map((tag) => (
                <label
                  className={`bg-zinc-800 p-3 px-6 rounded-full whitespace-nowrap text-gray-200 ${
                    queryTag === tag && " border-2 border-yellow-300"
                  }`}
                  onClick={() => {
                    if (queryTag === tag) {
                      setSearchParams("");
                    } else {
                      setSearchParams({ tag });
                    }
                  }}
                  key={tag}
                >
                  <input type="checkbox" name="" id="" className="sr-only" />
                  <span>{tag}</span>
                </label>
              ))}
            </div>
          </div>
        </section>
        <Gap height="h-28" />
        <section>
          <h3 className="h3">Showing {queryTag ? queryTag : "all"} articles</h3>
          <div className="grid grid-cols-3 gap-10 mt-10">
            <BlogPosts posts={posts} query={query} queryTag={queryTag} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default index;
