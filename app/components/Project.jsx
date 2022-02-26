import React from "react";

const Project = ({ project }) => {
  return (
    <div
      key={project.title}
      className="bg-zinc-800 p-6 rounded-lg project border-2 border-gray-700 hover:border-yellow-300 transition-all"
    >
      <h3 className="h3 mb-4">{project.title}</h3>
      <p className="text-gray-400 text-xl h-32">{project.summary}</p>
      <a
        href={project.url}
        className="link-button small outline mt-4"
        target="_blank"
        rel="noopenerr noreferrer"
      >
        See more
        <i className="fa-solid fa-arrow-right-long"></i>
      </a>
    </div>
  );
};

export default Project;
