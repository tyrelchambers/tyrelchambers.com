import React from "react";
import { Link, NavLink } from "remix";

const AdminMobileNav = () => {
  return (
    <nav className="w-full mt-4 tablet:mt-0 tablet:hidden">
      <ul className="flex flex-col border-t-2 border-gray-600">
        <li className="border-b-2 border-gray-600 ">
          <Link to="/" className="mobile-nav-link p-4 py-6" end>
            Home
          </Link>
        </li>

        <li className="border-b-2 border-gray-600 ">
          <NavLink to="/admin" className="mobile-nav-link p-4 py-6" end>
            Admin
          </NavLink>
        </li>

        <li className="border-b-2 border-gray-600 ">
          <NavLink to="/admin/post/new" className="mobile-nav-link p-4 py-6">
            New Post
          </NavLink>
        </li>

        <li className="border-b-2 border-gray-600 ">
          <NavLink to="/admin/posts" className="mobile-nav-link p-4 py-6">
            Posts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AdminMobileNav;
