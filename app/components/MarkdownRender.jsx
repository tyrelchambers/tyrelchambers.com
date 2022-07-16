import React from "react";
import { getMDXComponent } from "mdx-bundler/client";

const MarkdownRender = ({ markdown, html }) => {
  const Component = markdown
    ? React.useMemo(() => getMDXComponent(markdown), [markdown])
    : null;

  return (
    <div className="prose prose-h1:font-normal prose-h1:text-white prose-h2:font-thin prose-h2:text-white prose-h3:font-thin prose-h3:text-white prose-h4:text-white prose-p:text-gray-400 prose-a:text-yellow-300 prose-a:underline prose-strong:text-white prose-code:text-white prose-li:text-gray-400">
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
};

export default MarkdownRender;
