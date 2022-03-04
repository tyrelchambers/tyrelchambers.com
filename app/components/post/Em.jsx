import React from "react";

const Em = ({ text }) => {
  return (
    <div className="custom-component relative rounded-lg border-2 border-blue-300 bg-blue-300 bg-opacity-20 px-4">
      <span className="absolute top-[-10px] left-[-10px] rounded-full bg-blue-300 py-1 px-3 text-xs font-bold text-blue-900  shadow-md">
        info
      </span>
      <p style={{ color: "white" }}>{text}</p>
    </div>
  );
};

export default Em;
