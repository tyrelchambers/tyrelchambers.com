import React from "react";
import { Form, useLoaderData } from "remix";
import Gap from "~/components/Gap";
import Header from "~/layouts/Header";
import { useSearchParams } from "remix";
import Footer from "~/layouts/Footer";
import BlogPosts from "~/components/BlogPosts";
import { Link } from "react-router-dom";
import { useUpdateQueryStringValueWithoutNavigation } from "~/utils/misc";
import { getBlogPosts } from "../../utils/getBlogPosts";

export const loader = async () => {
  const posts = getBlogPosts();
  return posts;
};

const index = () => {
  const posts = useLoaderData();
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
      <main className="max-w-screen-xl ml-auto mr-auto mb-20">
        <div className="flex gap-20">
          <div className="max-w-2xl flex flex-col w-1/2">
            <h1 className="text-white text-5xl mt-2 leading-snug ">
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
                className="mt-16 rounded-full p-6 border-2 border-gray-500 bg-zinc-800 bg-opacity-20 text-white w-full"
                onChange={(event) =>
                  setQuery(event.currentTarget.value.toLowerCase())
                }
                value={query}
              />
            </Form>
          </div>
          <div className="w-1/2">
            <h2 className="h3 mb-6">Featured article</h2>
            <div className="flex flex-col w-full bg-zinc-800  rounded-lg shadow-lg">
              <img
                src={featuredPost.cover_img}
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
              <label
                className={`bg-zinc-800 p-3 px-6 border-2  rounded-full whitespace-nowrap text-gray-200 ${
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
                  className={`bg-zinc-800 p-3 px-6 border-2  rounded-full whitespace-nowrap text-gray-200 ${
                    query.includes(encodeURIComponent(tag.name.toLowerCase()))
                      ? "border-yellow-300"
                      : "border-transparent"
                  }`}
                  onClick={() => {
                    setQuery(encodeURIComponent(tag.name.toLowerCase()));
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
        <Gap height="h-28" />
        <section>
          <h3 className="h3">
            Showing{" "}
            <span className="text-sky-300 italic">
              {query ? decodeURIComponent(query) : "all"}
            </span>{" "}
            articles
          </h3>
          <div className="grid grid-cols-3 gap-10 mt-10">
            <BlogPosts posts={posts} query={query} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default index;
