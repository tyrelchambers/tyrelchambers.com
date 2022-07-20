import React from "react";
import { NavLink } from "@remix-run/react";
import { motion } from "framer-motion";

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
      animate={isOpen ? "open" : "close"}
      variants={nav}
      className="mobile-nav absolute top-0 bottom-0 z-20 w-full bg-zinc-800"
    >
      <motion.ul
        className="mt-10 flex flex-col"
        variants={container}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
      >
        {navLinks.map((link) => (
          <motion.li variants={item} key={link.label}>
            <NavLink to={link.to} className="mobile-nav-link p-4 py-6">
              {link.label}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default MobileNav;
