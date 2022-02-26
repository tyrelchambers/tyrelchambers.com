import React from "react";
import Editor from "~/components/Editor";
import AdminHeader from "~/layouts/AdminHeader";
import AdminNav from "~/layouts/AdminNav";

export const loader = () => {
  return null;
};

const admin = () => {
  return (
    <div className="max-w-screen-2xl ml-auto mr-auto mt-10">
      <AdminHeader />
    </div>
  );
};

export default admin;
