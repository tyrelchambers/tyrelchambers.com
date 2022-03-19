import CustomSelect from "./CustomSelect";
import React from "react";
import { tags } from "~/constants/blogTags";

const DevTo = ({ state, setState }) => {
  return (
    <div className="mt-2 flex flex-col rounded-lg bg-zinc-800 p-4 ">
      <h4 className="border-b-2  border-gray-700 pb-2 text-xl text-white">
        Dev.to
      </h4>

      <div className="mt-4 flex flex-col gap-2">
        <label htmlFor="devToTags" className="text-yellow-300  ">
          Tags
        </label>
        <CustomSelect
          options={tags.map((tag) => ({
            ...tag,
          }))}
          isMulti
          onChange={(e) => setState({ ...state, devToTags: e })}
        />
      </div>
    </div>
  );
};

export default DevTo;
