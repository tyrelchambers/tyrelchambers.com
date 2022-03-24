import { destroySession, getSession } from "../supabase.server";

import React from "react";
import { redirect } from "remix";

export const loader = () => {
  // Redirect to `/` if user tried to access `/signout`
  return redirect("/");
};

export const action = async ({ request }) => {
  let session = await getSession(request.headers.get("Cookie"));

  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};
