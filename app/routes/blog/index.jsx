import { Form, Meta, useLoaderData } from "remix";

import BlogPosts from "~/components/BlogPosts";
import Footer from "~/layouts/Footer";
import Gap from "~/components/Gap";
import Header from "~/layouts/Header";
import { Link } from "react-router-dom";
import React from "react";
import SectionHero from "~/layouts/SectionHero";
import { getPosts } from "~/blogPosts-server";
import { useSearchParams } from "remix";
import { useUpdateQueryStringValueWithoutNavigation } from "~/utils/misc";

export const meta = () => {
  return {
    title: "Tyrel Chambers | Blog",
    description: "Articles about web development, programming, and life.",
  };
};

export const loader = async () => {
  const { posts } = await getPosts();
  return { posts };
};

const index = () => {
  const { posts } = useLoaderData();

  const postsTags = posts.reduce((acc, post) => {
    post.tags.forEach((tag) => {
      if (!acc.includes(tag)) {
        acc.push(tag);
      }
    });
    return acc;
  }, []);

  const tags = postsTags.filter(
    (value, index, self) =>
      index ===
      self.findIndex((t) => t.slug === value.slug && t.name === value.name)
  );
  let [searchParams] = useSearchParams();
  const featuredPost = posts.filter((post) => post.featured)[0];

  const [queryValue, setQuery] = React.useState(() => {
    return searchParams.get("q") ?? "";
  });
  const query = queryValue.trim();

  useUpdateQueryStringValueWithoutNavigation("q", query);

  return (
    <div>
      <Header />
      <Gap height="h-20" />
      <main className="ml-auto mr-auto mb-20 max-w-screen-xl">
        <SectionHero
          leftCol={
            <>
              <h1 className="h1">
                Welcome to my growing collection of articles
              </h1>
              <p className="subtitle">
                I write mainly for myself, but hopefully they help you too!
              </p>
              <Form
                action="/blog"
                method="GET"
                onSubmit={(e) => e.preventDefault()}
                className="w-full"
              >
                <input
                  type="search"
                  placeholder="Search for articles"
                  className="mt-6 w-full rounded-full border-2 border-gray-500 bg-zinc-800 bg-opacity-20 p-6 text-white tablet:mt-16"
                  onChange={(event) =>
                    setQuery(event.currentTarget.value.toLowerCase())
                  }
                />
              </Form>
            </>
          }
          rightCol={
            <>
              <h2 className="h3 mb-6">Featured article</h2>
              <div className="flex w-full flex-col rounded-lg  bg-zinc-800 shadow-lg">
                <img
                  src={featuredPost.cover_img}
                  alt=""
                  className="mb-4 h-52 w-full rounded-lg  object-cover"
                />
                <div className="p-6">
                  <h3 className="h3">{featuredPost.title}</h3>
                  <p className="mt-4 text-xl text-gray-400">
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
            </>
          }
        />

        <Gap height="h-12 desktop:h-28" className="" />
        <section className="p-4">
          <div className="flex flex-col">
            <h3 className="h3">Search by tag</h3>

            <div className="mt-8 flex max-w-3xl flex-wrap gap-2">
              <label
                className={`whitespace-nowrap rounded-full border-2 bg-zinc-800  p-3 px-6 text-gray-200 ${
                  query === "" ? "border-yellow-300" : "border-transparent"
                }`}
                onClick={() => {
                  setQuery("");
                }}
              >
                <input type="checkbox" name="" id="" className="sr-only" />
                <span>All</span>
              </label>
              {tags.map((tag, id) => (
                <label
                  className={`whitespace-nowrap rounded-full border-2 bg-zinc-800  p-3 px-6 text-gray-200 ${
                    query.includes(tag.name.toLowerCase())
                      ? "border-yellow-300"
                      : "border-transparent"
                  }`}
                  onClick={() => {
                    setQuery(tag.name.toLowerCase());
                  }}
                  key={id}
                >
                  <input type="checkbox" name="" id="" className="sr-only" />
                  <span>{tag.name}</span>
                </label>
              ))}
            </div>
          </div>
        </section>
        <Gap height="h-12 desktop:h-28" />
        <section className="p-4">
          <h3 className="h3">
            Showing{" "}
            <span className="italic text-sky-300">{query ? query : "all"}</span>{" "}
            articles
          </h3>
          <div className="mt-10 grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
            <BlogPosts posts={posts} query={query} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default index;
