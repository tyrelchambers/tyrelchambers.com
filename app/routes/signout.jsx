import { destroySession, getSession } from "../supabase.server";
import { redirect } from "@remix-run/node";
import React from "react";
import { logout } from "../session.server";

export const loader = () => {
  // Redirect to `/` if user tried to access `/signout`
  return redirect("/");
};

export const action = async ({ request }) => {
  return logout(request);
};
