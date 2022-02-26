import { Link, useLoaderData } from "remix";
import React from "react";
import AdminHeader from "~/layouts/AdminHeader";
import { db } from "~/db.server";

export const loader = async () => {
  const posts = await db.post.findMany();

  return posts;
};

const index = () => {
  const posts = useLoaderData();
  return (
    <div className="max-w-screen-2xl ml-auto mr-auto mt-10">
      <AdminHeader />

      <div className="grid grid-cols-3 mt-10 gap-10">
        {posts.map((post) => (
          <Link
            to={`/admin/post/${post.id}`}
            className="border-2 border-gray-500 rounded-lg p-4"
            key={post.id}
          >
            <p className="text-gray-300">{post.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default index;
