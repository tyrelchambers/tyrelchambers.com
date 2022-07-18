import Header from "../../layouts/Header";
import React from "react";
import { getCaseStudy } from "../../case-study.server";
import { useLoaderData } from "@remix-run/react";
import { getMDXComponent } from "mdx-bundler/client";
import Footer from "../../layouts/Footer";
export const loader = async () => {
  const caseStudy = await getCaseStudy("reddex");

  return { caseStudy };
};

const $slug = () => {
  const { caseStudy } = useLoaderData();

  const Component = React.useMemo(
    () => getMDXComponent(caseStudy.code),
    [caseStudy.code]
  );
  return (
    <div>
      <Header />
      <main className="ml-auto mr-auto mt-10 flex max-w-screen-xl flex-col items-center p-4">
        <div className="prose prose-h1:font-normal prose-h1:text-white prose-h2:font-thin prose-h2:text-white prose-h3:font-thin prose-h3:text-white prose-h4:text-white prose-p:text-gray-400 prose-a:text-yellow-300 prose-a:underline prose-strong:text-white prose-code:text-white prose-li:text-gray-400">
          <Component />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default $slug;
