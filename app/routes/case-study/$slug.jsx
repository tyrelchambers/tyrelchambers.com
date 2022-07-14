import Header from "../../layouts/Header";
import MarkdownRender from "../../components/MarkdownRender";
import React from "react";
import { getCaseStudy } from "../../case-study.server";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const caseStudy = await getCaseStudy("reddex");

  return { caseStudy };
};

const $slug = () => {
  const { caseStudy } = useLoaderData();

  return (
    <div>
      <Header />
      <main className="ml-auto mr-auto mt-10 max-w-screen-xl">
        <MarkdownRender html={caseStudy.markdown} />
      </main>
    </div>
  );
};

export default $slug;
