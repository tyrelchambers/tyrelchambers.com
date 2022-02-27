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
  return posts
    .filter((post) =>
      query
        ? post.title.toLowerCase().includes(query) ||
          post.tags.filter((tag) => tag.slug.toLowerCase().includes(query))
            .length > 0
        : post
    )
    .map((post) => <PostItem key={post.title + "_" + post.id} post={post} />);
};

export default BlogPosts;
