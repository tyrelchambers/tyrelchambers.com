import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import { useMobileNav } from "~/hooks/useMobileNav";
import { motion } from "framer-motion";
import headshot from "../../public/images/headshot.webp";
import { Link } from "remix";

const Header = () => {
  const { isMobileNavOpen, toggleMobileNav } = useMobileNav(false);
  const [docWidth, setDocWidth] = useState(0);

  useEffect(() => {
    if (document) {
      setDocWidth(document.body.clientWidth);
    }
  }, []);

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
        className={`sticky top-0 z-10 flex w-full flex-col items-center justify-between bg-white py-5 px-4`}
      >
        {console.log(docWidth)}
        <section className="flex w-full items-center justify-between">
          <Link
            to="/"
            className="flex w-full items-center justify-between px-4 tablet:w-fit tablet:px-0"
          >
            <img src={headshot} alt="" className="h-12 w-12 rounded-full" />
          </Link>
          <div className="flex items-center gap-4">
            {docWidth > 425 ? (
              <Link
                to="/gallery"
                className="whitespace-nowrap rounded-full bg-red-400 py-2 px-6 text-white"
              >
                The Gallery
              </Link>
            ) : (
              <Link to="/gallery">
                <i class="fa-solid fa-gallery-thumbnails text-gray-800"></i>
              </Link>
            )}

            <div className="relative z-10 flex flex-col">
              <div
                className={`flex items-center gap-4 rounded-full bg-gray-100 py-2 px-4 ${
                  isMobileNavOpen ? "bg-indigo-500" : ""
                }`}
                onClick={() => toggleMobileNav()}
              >
                <p
                  className={` ${
                    isMobileNavOpen ? "text-white" : "text-gray-600"
                  }`}
                >
                  Menu
                </p>
                <motion.div
                  className={`flex h-[16px] w-[30px] flex-col items-center justify-between`}
                  animate={isMobileNavOpen ? "open" : "closed"}
                  variants={toggle}
                >
                  <motion.span
                    className={`h-[2px] w-[20px] ${
                      isMobileNavOpen ? "bg-white" : "bg-gray-900"
                    }`}
                    variants={toggleLine1}
                  ></motion.span>
                  <motion.span
                    className={`h-[2px] w-[20px] ${
                      isMobileNavOpen ? "bg-white" : "bg-gray-900"
                    }`}
                    variants={toggleLine2}
                  ></motion.span>
                  <motion.span
                    className={`h-[2px] w-[20px] ${
                      isMobileNavOpen ? "bg-white" : "bg-gray-900"
                    }`}
                    variants={toggleLine3}
                  ></motion.span>
                </motion.div>
              </div>
              {isMobileNavOpen && <MobileNav isOpen={isMobileNavOpen} />}
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
