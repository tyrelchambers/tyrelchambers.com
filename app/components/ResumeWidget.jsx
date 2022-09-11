import { Divider } from "@mantine/core";
import React from "react";
import { Form, Link } from "remix";

const ResumeWidget = ({ jobs }) => {
  return (
    <div className="flex flex-col rounded-3xl border-[1px] border-gray-200 p-8">
      <h2 className="text-lg font-bold text-gray-800">Work</h2>
      <ul className="my-8 flex flex-col gap-4">
        {jobs.map((j) => (
          <li className="flex items-center gap-4" key={j.title}>
            <img
              src={`data:image/png;base64, ${j.logoUrl}`}
              className="h-14 w-14 rounded-full border-2 border-gray-400 object-cover shadow-md"
            />
            <div className="flex flex-1 flex-col">
              <p className="text-sm font-bold text-gray-700">{j.company}</p>
              <p className="text-sm text-gray-400">{j.title}</p>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-400">{j.years[0]}</p>
              <Divider className="w-7" />
              <p className="text-sm text-gray-400">{j.years[1]}</p>
            </div>
          </li>
        ))}
      </ul>
      {/* 
      <Form action="resume/resume.pdf" method="post">
        <button
          type="submit"
          className="w-full rounded-full bg-gray-100 py-3 px-6 text-center text-gray-700 transition-all hover:bg-indigo-400 hover:text-white"
        >
          Download Resume
        </button>
      </Form> */}
    </div>
  );
};

export default ResumeWidget;
