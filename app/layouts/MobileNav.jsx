import React from "react";
import { NavLink } from "remix";

const MobileNav = () => {
  return (
    <nav className="mobile-nav w-full mt-6 md:hidden">
      <ul className="flex flex-col  border-t-2 border-gray-600">
        <li className="border-b-2 border-gray-600 p-4 py-6">
          <NavLink to="/" className="mobile-nav-link">
            Home
          </NavLink>
        </li>
        <li className="border-b-2 border-gray-600 p-4 py-6">
          <NavLink to="/blog" className="mobile-nav-link">
            Blog
          </NavLink>
        </li>
        <li className="border-b-2 border-gray-600 p-4 py-6">
          <NavLink to="/resources" className="mobile-nav-link">
            Resources
          </NavLink>
        </li>
        <li className="border-b-2 border-gray-600 p-4 py-6">
          <NavLink to="/about" className="mobile-nav-link">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
