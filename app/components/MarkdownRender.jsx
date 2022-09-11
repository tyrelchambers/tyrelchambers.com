import React from "react";
import { getMDXComponent } from "mdx-bundler/client";

const MarkdownRender = ({ markdown }) => {
  const Component = markdown
    ? React.useMemo(() => getMDXComponent(markdown), [markdown])
    : null;

  return (
    <div className="prose-h1 prose font-thin prose-h1:font-normal prose-h1:text-gray-800  prose-h2:font-semibold prose-h2:text-gray-800 prose-h3:font-semibold prose-h3:text-gray-800 prose-h4:text-gray-800 prose-p:text-gray-500 prose-a:text-yellow-300 prose-a:underline prose-strong:text-gray-800 prose-code:text-indigo-500 prose-pre:bg-gray-100 prose-li:text-gray-600">
      <Component />
    </div>
  );
};

export default MarkdownRender;
