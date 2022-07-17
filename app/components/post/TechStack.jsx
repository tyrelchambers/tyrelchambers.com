import React from "react";

const TechStack = ({ list }) => {
  return (
    <ul className="flex list-none flex-wrap gap-1 p-0">
      {list.map((l) => (
        <p
          key={l}
          className="whitespace-nowrap rounded-full bg-gradient-to-r from-teal-300 to-teal-600 py-1 px-3 text-sm !text-zinc-900"
        >
          {l}
        </p>
      ))}
    </ul>
  );
};

export default TechStack;
