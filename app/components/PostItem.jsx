import React from "react";
import { Link } from "remix";
import { truncateString } from "~/utils/truncateString";

const PostItem = ({ post }) => {
  return (
    <div className="post-item">
      <img src={post.banner} alt="" className="w-full object-cover h-full" />
      <div className="absolute  flex flex-col justify-start p-6 z-10 post-item-body w-full h-[250px]">
        <h3 className="h3 post-item-title transition-all">{post.title}</h3>
        <p className="text-gray-400 mt-4 opacity-0  post-item-description">
          {truncateString(post.description, 50)}
        </p>
        <Link
          to={`/blog/${post.slug}`}
          className="link-button small secondary mt-8 post-item-cta opacity-0"
        >
          Read post <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
      </div>
      <div className="gradient"></div>
    </div>
  );
};

export default PostItem;
