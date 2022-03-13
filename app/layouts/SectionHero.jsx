import React from "react";
import { motion } from "framer-motion";

const SectionHero = ({ leftCol, rightCol, maxWidth = "max-w-screen-xl" }) => {
  const variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variants}
      className={`ml-auto mr-auto flex w-full ${maxWidth} flex-col-reverse items-center gap-8 p-4 tablet:flex-row desktop:gap-20`}
    >
      <div className="flex w-full flex-col items-start desktop:w-1/2">
        {leftCol}
      </div>
      <div className="ml-auto mr-auto  w-full max-w-lg desktop:w-1/2">
        {rightCol}
      </div>
    </motion.section>
  );
};

export default SectionHero;
