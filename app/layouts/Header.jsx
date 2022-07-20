import React from "react";
import SocialList from "~/components/SocialList";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { useMobileNav } from "~/hooks/useMobileNav";
import { motion } from "framer-motion";

const Header = ({ isDim }) => {
  const { isMobileNavOpen, toggleMobileNav } = useMobileNav(false);

  const isDimClasses = isDim
    ? "absolute right-0 left-0 z-20 bg-gray-900 bg-opacity-60"
    : "";

  const toggleLine1 = {
    open: {
      rotate: "45deg",
      translateY: "9px",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const toggleLine2 = {
    open: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const toggleLine3 = {
    open: {
      rotate: "-45deg",
      translateY: "-9px",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const toggle = {
    open: {
      height: "20px",
      width: "30px",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <header
        className={`flex w-full  flex-col items-center justify-between p-2 px-4 tablet:py-8 ${isDimClasses}`}
      >
        <section className="flex w-full flex-col items-center justify-between tablet:flex-row">
          <div className="flex w-full items-center justify-between px-4 tablet:w-fit tablet:px-0">
            <h1 className="text-md mb-4 mt-4 text-white sm:mb-0 sm:mt-0 md:text-2xl">
              Tyrel Chambers
            </h1>
            <motion.div
              className="relative z-50 flex h-[20px] w-[30px] flex-col items-center justify-between  tablet:hidden"
              onClick={() => toggleMobileNav()}
              animate={isMobileNavOpen ? "open" : "closed"}
              variants={toggle}
            >
              <motion.span
                className="h-[2px] w-[20px] bg-gray-400"
                variants={toggleLine1}
              ></motion.span>
              <motion.span
                className="h-[2px] w-[20px] bg-gray-400"
                variants={toggleLine2}
              ></motion.span>
              <motion.span
                className="h-[2px] w-[20px] bg-gray-400"
                variants={toggleLine3}
              ></motion.span>
            </motion.div>
          </div>
          <Nav />
          <div className="hidden items-center gap-4 md:flex">
            <SocialList />
          </div>
          <motion.div
            className="z-50 hidden h-[20px] w-[30px] flex-col justify-between tablet:flex desktop:hidden"
            onClick={() => toggleMobileNav()}
            animate={isMobileNavOpen ? "open" : "closed"}
            variants={toggle}
          >
            <motion.span
              className="h-[2px] w-[20px] bg-gray-400"
              variants={toggleLine1}
            ></motion.span>
            <motion.span
              className="h-[2px] w-[20px] bg-gray-400"
              variants={toggleLine2}
            ></motion.span>
            <motion.span
              className="h-[2px] w-[20px] bg-gray-400"
              variants={toggleLine3}
            ></motion.span>
          </motion.div>
        </section>
      </header>
      <MobileNav isOpen={isMobileNavOpen} />
    </>
  );
};

export default Header;
