import AuthorCard from "~/components/AuthorCard";
import React from "react";

const PostFooter = ({ postTitle, slug }) => {
  return (
    <div className="ml-auto mr-auto w-full max-w-screen-lg p-4">
      <div className="tablrt:px-10 flex flex-col gap-4 p-4 tablet:flex-row tablet:justify-between tablet:py-5">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"I just read ${postTitle}" 🥳 by @imtyrelchambers \n\n`
          )}&url=${encodeURIComponent(`https://tyrelchambers/blog/${slug}`)}`}
          className=" text-lg text-yellow-300 opacity-80 transition-all hover:opacity-100"
        >
          Tweet this article
        </a>

        <a
          href={`https://www.github.com/tyrelchambers/tyrelchambers.com`}
          className=" text-lg text-yellow-300 opacity-80 transition-all hover:opacity-100"
        >
          See an issue? Open one on Github.
        </a>
      </div>
      <AuthorCard />
    </div>
  );
};

export default PostFooter;
