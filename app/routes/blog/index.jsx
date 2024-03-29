import { Form, useLoaderData } from "@remix-run/react";

import BlogPosts from "~/components/BlogPosts";
import Footer from "~/layouts/Footer";
import Gap from "~/components/Gap";
import Header from "~/layouts/Header";
import { Link } from "react-router-dom";
import React from "react";
import SectionHero from "~/layouts/SectionHero";
import { getPosts } from "~/blogPosts.server";
import { useSearchParams } from "@remix-run/react";
import { useUpdateQueryStringValueWithoutNavigation } from "~/utils/misc";
import Main from "../../layouts/Main";
import Section from "../../layouts/Section";

export const meta = () => {
  return {
    title: "Tyrel Chambers | Blog",
    description: "Articles about web development, programming, and life.",
  };
};

export const loader = async () => {
  const posts = await getPosts();
  return { posts };
};

const index = () => {
  const { posts } = useLoaderData();

  const postsTags = posts
    .reduce((acc, post, i) => {
      post.tags.forEach((tag) => {
        if (!acc.includes(tag)) {
          acc.push(tag);
        }
      });
      return acc;
    }, [])
    .filter(
      (tag, i, self) => i === self.findIndex((t) => t.value === tag.value)
    );

  let [searchParams] = useSearchParams();
  const featuredPost = posts[0];

  const [queryValue, setQuery] = React.useState(() => {
    return searchParams.get("q") ?? "";
  });
  const query = queryValue.trim();

  useUpdateQueryStringValueWithoutNavigation("q", query);

  return (
    <div>
      <Header />
      <Gap height="h-20" />

      <Main className="relative z-10 ml-auto mr-auto mb-20 max-w-screen-xl">
        <SectionHero
          leftCol={
            <div>
              <h1 className="mb-4 text-5xl font-bold leading-normal text-gray-700">
                Welcome to my growing collection of articles
              </h1>
              <p className="mb-6 text-2xl text-indigo-400">
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
                  className="mt-6 w-full rounded-full border-2 border-gray-300 bg-gray-200 bg-opacity-20 p-6 text-gray-800 tablet:mt-16"
                  onChange={(event) =>
                    setQuery(event.currentTarget.value.toLowerCase())
                  }
                />
              </Form>
            </div>
          }
          rightCol={
            <div>
              <Link to={`/blog/${featuredPost.slug}`} className="featured-post">
                <h2 className="h3 mb-6">Featured article</h2>
                <div className="flex w-full flex-col rounded-lg  bg-gray-100 shadow-lg">
                  <img
                    src={featuredPost.cover_img}
                    alt=""
                    className="mb-4 h-52 w-full rounded-tl-lg rounded-tr-lg  object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {featuredPost.title}
                    </h3>
                    <p className="mt-4 text-xl text-gray-400">
                      {featuredPost.description}
                    </p>
                    <span className="cta mt-6 flex items-center gap-2 text-gray-600 hover:text-indigo-500">
                      <i class="fa-solid fa-link-simple"></i>
                      Read post
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          }
        />

        <Section className="p-4">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-gray-800">Search by tag</h3>

            <div className="mt-8 flex max-w-3xl flex-wrap gap-2">
              <label
                className={`whitespace-nowrap rounded-full border-2 bg-gray-100  p-3 px-6 text-gray-800 ${
                  query === ""
                    ? "border-indigo-300 text-indigo-500"
                    : "border-transparent"
                }`}
                onClick={() => {
                  setQuery("");
                }}
              >
                <input type="checkbox" id="" className="sr-only" />
                <span>All</span>
              </label>
              {postsTags.map((tag, id) => (
                <label
                  className={`whitespace-nowrap rounded-full border-2 bg-gray-100  p-3 px-6 text-gray-800 ${
                    query.includes((tag.name || tag.label)?.toLowerCase())
                      ? "border-indigo-300 text-indigo-500"
                      : "border-transparent"
                  }`}
                  onClick={() => {
                    setQuery((tag.name || tag.label).toLowerCase());
                  }}
                  key={id}
                >
                  <input type="checkbox" id="" className="sr-only" />
                  <span>
                    {tag.name?.toLowerCase() ||
                      tag.label?.toLowerCase() ||
                      null}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </Section>
        <Section className="p-4">
          <p className="text-3xl text-gray-800">
            Showing <span>{query ? `{ ${query} }` : "{ all }"}</span> articles
          </p>
          <div className="mt-10 grid grid-cols-1 gap-10 tablet:grid-cols-2 desktop:grid-cols-3">
            <BlogPosts posts={posts} query={query} />
          </div>
        </Section>
      </Main>
      <Footer />
    </div>
  );
};

export default index;
