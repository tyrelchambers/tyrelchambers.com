import React from "react";

const DevTo = () => {
  return (
    <div className="flex flex-col mt-10 bg-zinc-800 p-4 rounded-lg ">
      <h4 className="text-white  text-xl border-b-2 border-gray-700 pb-2">
        Dev.to
      </h4>

      <div className="flex flex-col mt-4 gap-2">
        <label htmlFor="devToTags" className="text-yellow-300  ">
          Tags
        </label>
        <input
          type="text"
          name="devToTags"
          className="rounded-lg p-4 bg-zinc-700 w-full text-white"
          placeholder="Comma separated tags with a space"
        />
      </div>
    </div>
  );
};

export default DevTo;
