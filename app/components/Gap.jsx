import React from "react";

const Gap = ({ height = "h-12 desktop:h-48", className = "" }) => {
  return <div className={`w-full ${height} ${className}`}></div>;
};

export default Gap;
