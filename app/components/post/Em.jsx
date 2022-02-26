import React from "react";

const Em = ({ text }) => {
  return (
    <div className="bg-blue-300 bg-opacity-20 border-2 border-blue-300 rounded-lg px-4 relative">
      <span className="text-blue-900 absolute top-[-10px] left-[-10px] bg-blue-300 py-1 px-3 text-xs font-bold shadow-md  rounded-full">
        info
      </span>
      <p>{text}</p>
    </div>
  );
};

export default Em;
