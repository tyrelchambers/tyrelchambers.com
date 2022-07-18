import React from "react";
import { Link } from "@remix-run/react";
const Project = ({ project }) => {
  return (
    <div
      key={project.title}
      className="project rounded-lg border-2 border-gray-700 bg-zinc-800 p-6 transition-all "
    >
      <h3 className="h3 mb-4">{project.title}</h3>
      <p className="text-normal h-40 text-gray-400 sm:h-32 desktop:text-xl">
        {project.summary}
      </p>
      {project?.caseStudy ? (
        <Link
          to={`/case-study/${project.caseStudy}`}
          className="link-button small mt-4 outline"
        >
          See {project.title} case study
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
      ) : (
        <a
          href={project.url}
          className="link-button small mt-4 outline"
          target="_blank"
          rel="noopenerr noreferrer"
        >
          See {project.title}
          <i className="fa-solid fa-arrow-right-long"></i>
        </a>
      )}
    </div>
  );
};

export default Project;
