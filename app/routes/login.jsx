import React, { useEffect } from "react";
import { commitSession, getSession } from "../supabase.server";
import { redirect, useSubmit } from "remix";

import { Auth } from "@supabase/ui";
import { useSupabase } from "~/utils/supabase-client";

export const action = async ({ request }) => {
  const formData = await request.formData();

  const session = await getSession(request.headers.get("Cookie"));
  session.set("access_token", formData.get("access_token"));
  session.set("user_id", formData.get("user_id"));

  return redirect("/admin", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

const Container = ({ children }) => {
  const { user, session } = Auth.useUser();
  const submit = useSubmit();

  useEffect(() => {
    if (user) {
      const formData = new FormData();

      const accessToken = session?.access_token;

      // you can choose whatever conditions you want
      // as long as it checks if the user is signed in
      if (accessToken) {
        formData.append("access_token", accessToken);
        formData.append("user_id", user.id);
        submit(formData, { method: "post", action: "/login" });
      }
    }
  }, [user]);

  return (
    <div className="ml-auto mr-auto mt-20 max-w-lg rounded-lg bg-zinc-100 p-6">
      {children}
    </div>
  );
};

export default function login() {
  const supabase = useSupabase();

  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Container>
        <Auth supabaseClient={supabase} magicLink={true} />
      </Container>
    </Auth.UserContextProvider>
  );
}
