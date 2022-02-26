import { useLoaderData } from "remix";
import React from "react";
import { getPostsFromS3 } from "~/utils/aws";
import AdminHeader from "~/layouts/AdminHeader";
import { getPosts } from "~/post";

export const loader = async () => {
  const postsFromS3 = await getPostsFromS3();
  const posts = await getPosts(postsFromS3);
  return posts;
};

const index = () => {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div className="max-w-screen-2xl ml-auto mr-auto mt-10">
      <AdminHeader />
    </div>
  );
};

export default index;
