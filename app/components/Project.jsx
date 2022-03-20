import React from "react";
import { motion } from "framer-motion";
const Project = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{
        amount: 0.1,
      }}
      key={project.title}
      className="project rounded-lg border-2 border-gray-700 bg-zinc-800 p-6 transition-all "
    >
      <h3 className="h3 mb-4">{project.title}</h3>
      <p className="text-normal h-40 text-gray-400 sm:h-32 desktop:text-xl">
        {project.summary}
      </p>
      <a
        href={project.url}
        className="link-button small mt-4 outline"
        target="_blank"
        rel="noopenerr noreferrer"
      >
        See more
        <i className="fa-solid fa-arrow-right-long"></i>
      </a>
    </motion.div>
  );
};

export default Project;
