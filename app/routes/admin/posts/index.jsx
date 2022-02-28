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

      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 mt-10 gap-10 p-4">
        {posts.length > 0 &&
          posts.map((post) => (
            <Link
              to={`/admin/post/${post.id}`}
              className="border-2 border-gray-500 rounded-lg p-4 flex gap-4 flex-col large:flex-row items-center large:items-start"
              key={post.id}
            >
              <img
                src={post.cover_img}
                className="w-32 object-cover rounded-lg aspect-[4/6]"
                alt=""
              />
              <div className="flex flex-col gap-2">
                <h4 className="h4 text-center large:text-left">{post.title}</h4>
                <p className="text-gray-400 text-center large:text-left">
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
