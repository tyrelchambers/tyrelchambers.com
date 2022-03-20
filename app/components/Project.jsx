import { Link } from "remix";
import React from "react";

const Project = ({ project }) => {
  return (
    <div
      key={project.title}
      className="project rounded-lg border-2 border-gray-700 bg-zinc-800 p-6 transition-all hover:border-yellow-300"
    >
      <h3 className="h3 mb-4">{project.title}</h3>
      <p className="text-normal h-40 text-gray-400 sm:h-32 desktop:text-xl">
        {project.summary}
      </p>
      <Link
        to={`/case-study/${project.slug}`}
        className="link-button small mt-4 outline"
        prefetch="intent"
      >
        See more
        <i className="fa-solid fa-arrow-right-long"></i>
      </Link>
    </div>
  );
};

export default Project;
