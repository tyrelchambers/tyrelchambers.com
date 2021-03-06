import { Link } from "@remix-run/react";
import React from "react";
import { truncateString } from "~/utils/truncateString";
import { motion } from "framer-motion";

const PostItem = ({ post }) => {
  const transition = {
    ease: "easeIn",
    type: "tween",
    duration: 0,
    originY: 0,
  };

  const bgImgMotion = {
    rest: {
      translateY: 0,
      transition,
      opacity: 0.5,
    },
    hover: {
      translateY: -10,
      transition,
      opacity: 1,
    },
  };

  const gradient = {
    rest: {
      opacity: 0.5,
      transition,
    },
    hover: {
      opacity: 1,
      transition,
    },
  };

  const titleMotion = {
    rest: {
      opacity: 0.5,
      translateY: 0,
      transition,
    },
    hover: {
      opacity: 1,
      translateY: -80,
      transition,
    },
  };

  const descriptionMotion = {
    rest: {
      opacity: 0,
      transition,
    },
    hover: {
      opacity: 1,
      transition,
    },
  };

  return (
    <Link to={`/blog/${post.slug}`} prefetch="intent">
      <motion.div
        className="post-item"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.img
          src={post.cover_img}
          alt=""
          className="h-full w-full object-cover transition-all"
          variants={bgImgMotion}
        />
        <motion.div
          className="post-item-body  absolute z-10 flex h-[250px] w-full flex-col justify-start p-6"
          variants={titleMotion}
        >
          <h3 className="h3 post-item-title transition-all">{post.title}</h3>
          <motion.ul
            variants={descriptionMotion}
            className="mt-4 flex flex-wrap gap-2"
          >
            {post.tags.map((tag) => (
              <li className="w-fit rounded-full border-2 border-teal-400 py-1 px-3 text-xs text-teal-400">
                {tag.label}
              </li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div className="gradient" variants={gradient}></motion.div>
      </motion.div>
    </Link>
  );
};

export default PostItem;
