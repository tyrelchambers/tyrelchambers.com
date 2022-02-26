import React from "react";
import { NavLink } from "remix";

const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center gap-6">
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className="nav-link">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/resources" className="nav-link">
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
