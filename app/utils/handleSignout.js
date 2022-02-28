export const handleSignOut = (supabase) => {
  supabase.auth.signOut().then(() => {
    submit(null, { method: "post", action: "/signout" });
  });
};
