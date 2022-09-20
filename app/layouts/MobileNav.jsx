import React from "react";
import { NavLink } from "@remix-run/react";
import { motion } from "framer-motion";
import { Divider } from "@supabase/ui";
import SocialList from "../components/SocialList";

const MobileNav = ({ isOpen }) => {
  const navLinks = [
    {
      label: "Home",
      to: "/",
    },

    {
      label: "Blog",
      to: "/blog",
    },
    {
      label: "Resources",
      to: "/resources",
    },
    {
      label: "About",
      to: "/about",
    },
  ];

  return (
    <nav className="mobile-nav absolute top-16 right-0 flex w-[300px] flex-col rounded-2xl border-2 border-gray-200  bg-white p-6 shadow-lg">
      <p className="font-medium text-gray-500">Navigation</p>
      <Divider className="my-6" />
      <ul className="flex flex-col gap-4">
        {navLinks.map((link) => (
          <li key={link.label}>
            <NavLink
              to={link.to}
              className="text-gray-400 transition-all hover:text-gray-800"
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <Divider className="my-6" />

      <SocialList />
    </nav>
  );
};

export default MobileNav;
