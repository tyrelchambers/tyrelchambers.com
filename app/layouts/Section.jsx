import React from "react";

const Section = (props) => {
  return (
    <section
      className={`flex flex-col ${props.className ? props.className : ""} p-6`}
    >
      <header
        className={`mb-10 ${
          props.headerPaddingBottom ? props.headerPaddingBottom : ""
        }`}
      >
        <h2 className=" text-2xl font-bold text-gray-700">{props.title}</h2>
        <p className="mt-2 text-gray-400">{props.subtitle}</p>
      </header>
      {props.children}
    </section>
  );
};

export default Section;
