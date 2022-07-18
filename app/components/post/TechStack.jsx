import React from "react";

const TechStack = ({ list }) => {
  return (
    <ul className="flex list-none flex-wrap gap-2 p-0">
      {list.map((l) => (
        <li
          key={l}
          className="m-0 whitespace-nowrap rounded-full border-2 border-teal-400 px-4 !text-teal-400"
        >
          {l}
        </li>
      ))}
    </ul>
  );
};

export default TechStack;
