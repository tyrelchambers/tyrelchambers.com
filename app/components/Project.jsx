import React from "react";
import { Link } from "@remix-run/react";

const Project = ({ project }) => {
  return (
    <div
      key={project.title}
      className="rounded-3xl bg-white p-6 transition-all hover:bg-gray-50"
    >
      <a
        href={
          !project.caseStudy ? project.url : `/case-study/${project.caseStudy}`
        }
        target="_blank"
        rel="noopenerr noreferrer"
      >
        <h3 className="mb-4 text-xl font-semibold text-gray-800">
          {project.title}
        </h3>
        <p className=" text-sm text-gray-400  desktop:text-lg">
          {project.summary}
        </p>
      </a>
    </div>
  );
};

export default Project;
