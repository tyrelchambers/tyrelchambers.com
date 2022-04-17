import { getDevToStats, hashNodeStats } from "~/blogPosts-server";
import { redirect, useLoaderData } from "remix";

import AdminHeader from "~/layouts/AdminHeader";
import React from "react";
import { getSession } from "~/supabase.server";

export const loader = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  console.log(session.get("access_token"));
  if (!session.has("access_token")) {
    return redirect("/login");
  }

  const devToStats = await getDevToStats();
  const hashnodeStats = await hashNodeStats();
  return { devToStats, hashnodeStats };
};

const admin = () => {
  const { devToStats, hashnodeStats } = useLoaderData();

  return (
    <div className="ml-auto mr-auto mt-10 max-w-screen-2xl">
      <AdminHeader />

      <div className="flex gap-10">
        <section className="mt-10 w-full max-w-sm rounded-lg border-2 border-zinc-700 p-6">
          <h2 className="h4">Dev.to Statistics</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 tablet:max-w-xs">
            <div className="flex items-center gap-4 rounded-lg bg-zinc-800 p-6">
              <i className="fa-solid fa-eye text-lg text-gray-300"></i>
              <p className="text-gray-100">{devToStats.page_views_count}</p>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-zinc-800 p-6">
              <i className="fa-solid fa-comment text-lg text-gray-300"></i>
              <p className="text-gray-100">{devToStats.comments_count}</p>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-zinc-800 p-6">
              <i className="fa-solid fa-heart text-lg text-gray-300"></i>
              <p className="text-gray-100">
                {devToStats.positive_reactions_count}
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-zinc-800 p-6">
              <i className="fa-solid fa-star text-lg text-gray-300"></i>
              <p className="text-gray-100">
                {devToStats.positive_reactions_count}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 w-full max-w-sm rounded-lg border-2 border-zinc-700 p-6">
          <h2 className="h4">HashNode Statistics</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 tablet:max-w-xs">
            <div className="flex items-center gap-4 rounded-lg bg-zinc-800 p-6">
              <i className="fa-solid fa-eye text-lg text-gray-300"></i>
              <p className="text-gray-100">{hashnodeStats.replyCount}</p>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-zinc-800 p-6">
              <i className="fa-solid fa-comment text-lg text-gray-300"></i>
              <p className="text-gray-100">{hashnodeStats.responseCount}</p>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-zinc-800 p-6">
              <i className="fa-solid fa-heart text-lg text-gray-300"></i>
              <p className="text-gray-100">{hashnodeStats.totalReactions}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default admin;
