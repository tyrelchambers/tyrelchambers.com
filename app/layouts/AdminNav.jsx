import { Form, Link, NavLink } from "@remix-run/react";

import React from "react";
import { useSupabase } from "~/utils/supabase-client";

const AdminNav = () => {
  const supabase = useSupabase();

  const handleSignout = () => {
    supabase.auth.signOut().then(() => {
      submit(null, { method: "post", action: "/signout" });
    });
  };

  return (
    <nav className="mt-4 hidden tablet:mt-0 tablet:flex">
      <ul className="flex  gap-10">
        <li>
          <Link to="/" className="nav-link" end="true" prefetch="intent">
            Home
          </Link>
        </li>

        <li>
          <NavLink to="/admin" className="nav-link" end prefetch="intent">
            Admin
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/post/new" className="nav-link" prefetch="intent">
            New Post
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/posts" className="nav-link" prefetch="intent">
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
