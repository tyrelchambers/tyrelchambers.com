import React from "react";
import PostItem from "./PostItem";

export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* add the UI you want your users to see */}
        <Scripts />
      </body>
    </html>
  );
}
const BlogPosts = ({ posts, query }) => {
  const tagRegex = new RegExp(decodeURIComponent(query), "i");

  return posts
    .filter((post) =>
      query
        ? post.title.toLowerCase().includes(decodeURIComponent(query)) ||
          post.tags.filter((tag) => tagRegex.test(tag.name)).length > 0
        : post
    )
    .map((post) => <PostItem key={post.title + "_" + post.id} post={post} />);
};

export default BlogPosts;
