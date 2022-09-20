import { Link } from "@remix-run/react";
import React from "react";
import { format } from "date-fns";

const PostItem = ({ post }) => {
  return (
    <Link
      to={`/blog/${post.slug}`}
      prefetch="intent"
      className="flex flex-col gap-2 rounded-3xl bg-white p-6 transition-all hover:bg-gray-50"
    >
      <p className="text-sm text-indigo-300">
        {format(new Date(post.created_at), "MMM do, yyyy")}
      </p>
      <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
      <p className="mt-2 flex-1 text-sm text-gray-500">{post.description}</p>
    </Link>
  );
};

export default PostItem;
