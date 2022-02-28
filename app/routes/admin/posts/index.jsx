import { Link, useLoaderData } from "remix";
import React from "react";
import AdminHeader from "~/layouts/AdminHeader";
import { supabase } from "~/utils/supabase";
import { truncateString } from "~/utils/truncateString";
export const loader = async () => {
  let { data: posts, error } = await supabase
    .from("post")
    .select()
    .order("id", { ascending: false });
  if (error) {
    return { error };
  }

  return posts;
};

const index = () => {
  const posts = useLoaderData();

  return (
    <div className="max-w-screen-2xl ml-auto mr-auto mt-10">
      <AdminHeader />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
        {posts.length > 0 &&
          posts.map((post) => (
            <Link
              to={`/admin/post/${post.id}`}
              className="border-2 border-gray-500 rounded-lg p-4 flex gap-4"
              key={post.id}
            >
              <img
                src={post.cover_img}
                className="w-32 object-cover rounded-lg aspect-[4/6]"
                alt=""
              />
              <div className="flex flex-col gap-2">
                <h4 className="h4">{post.title}</h4>
                <p className="text-gray-400">
                  {truncateString(post.description, 100)}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default index;
