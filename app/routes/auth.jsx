import React, { useEffect } from "react";
import { Auth } from "@supabase/ui";
import { useSupabase } from "~/utils/supabase-client";
import { commitSession, getSession } from "../supabase.server";
import { redirect, useSubmit } from "remix";

export const action = async ({ request }) => {
  const formData = await request.formData();

  const session = await getSession(request.headers.get("Cookie"));

  session.set("access_token", formData.get("access_token"));

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
        submit(formData, { method: "post", action: "/auth" });
      }
    }
  }, [user]);

  return (
    <div className="max-w-lg ml-auto mr-auto mt-20 p-6 bg-zinc-100 rounded-lg">
      {children}
    </div>
  );
};

export default function AuthBasic() {
  const supabase = useSupabase();

  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Container>
        <Auth supabaseClient={supabase} magicLink={true} />
      </Container>
    </Auth.UserContextProvider>
  );
}
