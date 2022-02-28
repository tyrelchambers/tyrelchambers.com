import { supabase } from "~/utils/supabase";

export async function signInWithEmail({ email, password }) {
  const { user, error } = await supabase.auth.signIn({
    email,
  });
  if (error) {
    console.log(error);
  }

  return user;
}
