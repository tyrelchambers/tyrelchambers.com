

import AdminHeader from "~/layouts/AdminHeader";
import React from "react";
import { requireUser } from "../../session.server";


export const loader = ({request}) => {
  const user = requireUser(request)
  return user
}


const admin = () => {
  
  return (
    <div className="ml-auto mr-auto mt-10 max-w-screen-2xl">
      <AdminHeader />

    </div>
  );
};

export default admin;
