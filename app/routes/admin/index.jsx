import React from "react";
import { redirect } from "remix";
import AdminHeader from "~/layouts/AdminHeader";
import { getSession } from "~/supabase.server";

export const loader = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));

  if (!session.has("access_token")) {
    return redirect("/login");
  }

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
