import { Link } from "remix";
import React from "react";
import { motion } from "framer-motion";
import { truncateString } from "~/utils/truncateString";
const PostItem = ({ post }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{
        amount: 0.05,
      }}
      className="post-item"
    >
      <img
        src={post.cover_img}
        alt=""
        className="h-full w-full object-cover transition-all"
      />
      <div className="post-item-body  absolute z-10 flex h-[250px] w-full flex-col justify-start p-6">
        <h3 className="h3 post-item-title transition-all">{post.title}</h3>
        <p className="post-item-description mt-4 text-gray-400  opacity-0">
          {truncateString(post.description, 50)}
        </p>
        <Link
          to={`/blog/${post.slug}`}
          className="link-button small secondary post-item-cta mt-8 opacity-0"
          prefetch="intent"
        >
          Read post <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
      </div>
      <div className="gradient"></div>
    </motion.div>
  );
};

export default PostItem;
