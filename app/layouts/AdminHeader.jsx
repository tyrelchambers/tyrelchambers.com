import React from "react";
import AdminNav from "./AdminNav";

const AdminHeader = () => {
  return (
    <header>
      <h1 className="h1">Admin dashboard</h1>
      <AdminNav />
    </header>
  );
};

export default AdminHeader;
