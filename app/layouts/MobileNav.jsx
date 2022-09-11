import React from "react";
import { NavLink } from "@remix-run/react";
import { motion } from "framer-motion";
import { Divider } from "@supabase/ui";
import SocialList from "../components/SocialList";

const MobileNav = ({ isOpen }) => {
  const nav = {
    open: {
      opacity: 1,
      display: "flex",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    close: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

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
    <motion.nav
      initial={{
        display: "none",
      }}
      animate={isOpen ? "open" : "hidden"}
      variants={nav}
      className="mobile-nav absolute top-16 right-0 flex w-[300px] flex-col rounded-2xl border-2 border-gray-200  bg-white p-6 shadow-lg"
    >
      <p className="font-medium text-gray-500">Navigation</p>
      <Divider className="my-6" />
      <motion.ul
        className="flex flex-col gap-4"
        variants={container}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
      >
        {navLinks.map((link) => (
          <motion.li variants={item} key={link.label}>
            <NavLink
              to={link.to}
              className="text-gray-400 transition-all hover:text-gray-800"
            >
              {link.label}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>

      <Divider className="my-6" />

      <SocialList />
    </motion.nav>
  );
};

export default MobileNav;
