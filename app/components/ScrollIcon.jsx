import React from "react";

const ScrollIcon = () => {
  return (
    <div className="flex w-full items-center before:h-[1px] before:w-full before:bg-gray-700 before:mt-[-1.5em] after:mt-[-1.5em] after:h-[1px] after:w-full after:bg-gray-700">
      <div className="relative h-24 w-24 flex flex-col items-center ml-10 mr-10">
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
      </div>
    </div>
  );
};

export default ScrollIcon;
