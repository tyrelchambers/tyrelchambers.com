import PostItem from "./PostItem";
import React from "react";

const BlogPosts = ({ posts, query }) => {
  const tagRegex = new RegExp(query, "i");

  return posts
    .filter((post) =>
      query
        ? post.title.toLowerCase().includes(query) ||
          post.tags.filter((tag) => tagRegex.test(tag.name || tag.label))
            .length > 0
        : post
    )
    .map((post) => <PostItem key={post.title + "_" + post.id} post={post} />);
};

export default BlogPosts;
