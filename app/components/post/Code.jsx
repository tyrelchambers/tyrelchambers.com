import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Code = ({ language, children }) => {
  return (
    <SyntaxHighlighter language={language} style={dracula}>
      {children}
    </SyntaxHighlighter>
  );
};

export default Code;
