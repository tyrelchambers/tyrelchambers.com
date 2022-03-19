import CustomSelect from "./CustomSelect";
import React from "react";
import { hashNodeTags } from "~/constants/blogTags";

const Hashnode = ({ state, setState }) => {
  return (
    <div className="mt-2 flex flex-col rounded-lg bg-zinc-800 p-4 ">
      <h4 className="border-b-2  border-gray-700 pb-2 text-xl text-white">
        HashNode
      </h4>

      <p htmlFor="devToTags" className="mt-4 mb-2 text-yellow-300 ">
        Tags
      </p>

      <CustomSelect
        options={hashNodeTags.map((tag) => ({
          ...tag,
          value: tag.slug,
          label: tag.name,
        }))}
        isMulti
        onChange={(e) => setState({ ...state, hashNodeTags: e })}
      />
    </div>
  );
};

export default Hashnode;
