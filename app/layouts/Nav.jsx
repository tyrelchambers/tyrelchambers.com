import { NavLink } from "remix";
import React from "react";

const Nav = () => {
  return (
    <nav className="nav hidden desktop:flex">
      <ul className="flex items-center gap-6">
        <li>
          <NavLink to="/" className="nav-link" prefetch="intent">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className="nav-link" prefetch="intent">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/resources" className="nav-link" prefetch="intent">
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link" prefetch="intent">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
