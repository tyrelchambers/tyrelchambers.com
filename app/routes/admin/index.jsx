import AdminHeader from "~/layouts/AdminHeader";
import React from "react";
import { getSession } from "~/supabase.server";
import { redirect } from "remix";

export const loader = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));

  if (!session.has("access_token")) {
    return redirect("/login");
  }

  return null;
};

const admin = () => {
  return (
    <div className="ml-auto mr-auto mt-10 max-w-screen-2xl">
      <AdminHeader />
    </div>
  );
};

export default admin;
