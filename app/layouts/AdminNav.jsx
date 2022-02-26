import React from "react";
import { NavLink } from "remix";

const AdminNav = () => {
  return (
    <nav className="w-fit">
      <ul className="flex gap-10">
        <NavLink to="/admin" className="nav-link" end>
          Admin
        </NavLink>

        <NavLink to="/admin/post/new" className="nav-link">
          New Post
        </NavLink>

        <NavLink to="/admin/posts" className="nav-link">
          Posts
        </NavLink>
      </ul>
    </nav>
  );
};

export default AdminNav;
