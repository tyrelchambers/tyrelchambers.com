import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Code = ({ className, children }) => {
  return (
    <SyntaxHighlighter language={className} style={dracula}>
      {children}
    </SyntaxHighlighter>
  );
};

export default Code;
