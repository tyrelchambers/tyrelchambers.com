import React from "react";
import AdminNav from "~/layouts/AdminNav";

const admin = () => {
  return (
    <div className="max-w-screen-2xl ml-auto mr-auto mt-10">
      <h1 className="h1">Admin dashboard</h1>
      <AdminNav />
    </div>
  );
};

export default admin;
