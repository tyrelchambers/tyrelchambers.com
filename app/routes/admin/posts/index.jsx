import { Link, useLoaderData } from "@remix-run/react";

import AdminHeader from "~/layouts/AdminHeader";
import React from "react";
import { truncateString } from "~/utils/truncateString";
import { requireUser } from "../../../session.server";
import { getPosts } from "../../../blogPosts.server";

export const loader = async ({ request }) => {
  await requireUser(request);

  const posts = await getPosts();
  return posts;
};

const index = () => {
  const posts = useLoaderData();

  return (
    <div className="ml-auto mr-auto mt-10 max-w-screen-2xl">
      <AdminHeader />

      <div className="mt-10 grid grid-cols-1 gap-10 p-4 tablet:grid-cols-2 desktop:grid-cols-3">
        {posts.length > 0 &&
          posts.map((post) => (
            <Link
              to={`/admin/post/${post.id}`}
              className="flex flex-col items-center gap-4 rounded-lg border-2 border-gray-500 p-4 large:flex-row large:items-start"
              key={post.id}
            >
              <img
                src={post.cover_img}
                className="aspect-[4/6] w-32 rounded-lg object-cover"
                alt=""
              />
              <div className="flex flex-col gap-2">
                <h4 className="h4 text-center large:text-left">{post.title}</h4>
                <p className="text-center text-gray-400 large:text-left">
                  {truncateString(post.description, 100)}
                </p>
                {post.published ? (
                  <p className=" text-green-300">published</p>
                ) : (
                  <p className=" text-orange-300">draft</p>
                )}
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <i className="fa-solid fa-chart-simple"></i>
                    <p>{post.views}</p>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400">
                    <i className="fa-solid fa-heart"></i>
                    <p>{post.PostLikes.length}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default index;
