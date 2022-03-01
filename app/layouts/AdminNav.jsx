import React from "react";
import { Form, Link, NavLink } from "remix";
import { useSupabase } from "~/utils/supabase-client";

const AdminNav = () => {
  const supabase = useSupabase();

  const handleSignout = () => {
    supabase.auth.signOut().then(() => {
      submit(null, { method: "post", action: "/signout" });
    });
  };

  return (
    <nav className="w-fit mt-4 tablet:mt-0 tablet:flex hidden">
      <ul className="flex gap-10 flex-wrap">
        <li>
          <Link to="/" className="nav-link" end="true">
            Home
          </Link>
        </li>

        <li>
          <NavLink to="/admin" className="nav-link" end>
            Admin
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/post/new" className="nav-link">
            New Post
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/posts" className="nav-link">
            Posts
          </NavLink>
        </li>
        {supabase.auth.session() && (
          <li className="w-fit">
            <Form action="/signout" method="post">
              <button type="submit" className="nav-link w-fit">
                Sign out
              </button>
            </Form>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default AdminNav;
