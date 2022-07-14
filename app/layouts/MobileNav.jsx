import React from "react";
import { NavLink } from "@remix-run/react";

const MobileNav = () => {
  return (
    <nav className="mobile-nav mt-6 w-full ">
      <ul className="flex flex-col  border-t-2 border-gray-600">
        <li className="border-b-2 border-gray-600 ">
          <NavLink to="/" className="mobile-nav-link p-4 py-6">
            Home
          </NavLink>
        </li>
        <li className="border-b-2 border-gray-600 ">
          <NavLink to="/blog" className="mobile-nav-link p-4 py-6">
            Blog
          </NavLink>
        </li>
        <li className="border-b-2 border-gray-600 ">
          <NavLink to="/resources" className="mobile-nav-link p-4 py-6">
            Resources
          </NavLink>
        </li>
        <li className="border-b-2 border-gray-600 ">
          <NavLink to="/about" className="mobile-nav-link p-4 py-6">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
