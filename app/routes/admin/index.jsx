import AdminHeader from "~/layouts/AdminHeader";
import React from "react";
import { requireUser } from "../../session.server";
import { getPostsLikesCount, getPostsViewsCount } from "../../blogPosts.server";
import { useLoaderData } from "remix";

export const loader = async ({ request }) => {
  requireUser(request);
  const postsLikes = await getPostsLikesCount();
  const postsViews = await getPostsViewsCount();

  return { postsLikes, postsViews };
};

const admin = () => {
  const { postsLikes, postsViews } = useLoaderData();

  return (
    <div className="ml-auto mr-auto mt-10 max-w-screen-2xl">
      <AdminHeader />

      <main className="mt-10">
        <h2 className="text-xl text-white">Statistics</h2>

        <div className="flex gap-4 text-gray-400">
          <p>{postsLikes} likes</p>
          <p>{postsViews} views</p>
        </div>
      </main>
    </div>
  );
};

export default admin;
