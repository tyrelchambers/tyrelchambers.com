import React from "react";
import AuthorCard from "~/components/AuthorCard";

const PostFooter = ({ postTitle, slug }) => {
  return (
    <div className="w-full max-w-screen-lg ml-auto mr-auto">
      <div className="flex justify-between px-10 py-5">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"I just read ${postTitle}" 🥳 by @imtyrelchambers \n\n`
          )}&url=${encodeURIComponent(`https://tyrelchambers/blog/${slug}`)}`}
          className=" text-yellow-300 opacity-80 hover:opacity-100 transition-all text-lg"
        >
          Tweet this article
        </a>

        <a
          href={`https://www.github.com/tyrelchambers/tyrelchambers.com`}
          className=" text-yellow-300 opacity-80 hover:opacity-100 transition-all text-lg"
        >
          See an issue? Edit on GitHub.
        </a>
      </div>
      <AuthorCard />
    </div>
  );
};

export default PostFooter;
