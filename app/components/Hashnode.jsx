import React from "react";

const Hashnode = () => {
  return (
    <div className="flex flex-col mt-10 bg-zinc-800 p-4 rounded-lg ">
      <h4 className="text-white  text-xl border-b-2 border-gray-700 pb-2">
        HashNode
      </h4>

      <div className="flex flex-col mt-4 gap-2">
        <label htmlFor="markdown" className="text-yellow-300  ">
          Cover Image URL
        </label>
        <input
          type="text"
          name="coverImageURL"
          className="rounded-lg p-4 bg-zinc-700 w-full text-white"
          placeholder="Cover Image URL"
        />
      </div>

      <div className="flex flex-col mt-4 gap-2">
        <label htmlFor="markdown" className="text-yellow-300  ">
          Tags
        </label>
        <input
          type="text"
          name="hashNodeTags"
          className="rounded-lg p-4 bg-zinc-700 w-full text-white"
          placeholder="Comma separated tags with a space"
        />
      </div>

      <div className="flex flex-col mt-4 gap-2">
        <label htmlFor="markdown" className="text-yellow-300  ">
          Canonical URL
        </label>
        <input
          type="text"
          name="originalArticleURL"
          className="rounded-lg p-4 bg-zinc-700 w-full text-white"
          value={`https://tyrelchambers.com/blog/`}
          placeholder="https://tyrelchambers.com/blog/"
        />
      </div>
    </div>
  );
};

export default Hashnode;
