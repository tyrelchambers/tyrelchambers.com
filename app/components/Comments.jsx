import React from "react";
import Giscus from "@giscus/react";

const Comments = () => {
  return (
    <Giscus
      id="comments"
      src="https://giscus.app/client.js"
      repo="tyrelchambers/tyrelchambers.com"
      repoId="R_kgDOG6O2BA"
      category="Announcements"
      categoryId="DIC_kwDOG6O2BM4CQZ07"
      mapping="pathname"
      strict="0"
      reactionsEnabled="0"
      emitMetadata="0"
      inputPosition="bottom"
      theme="light"
      lang="en"
      crossOrigin="anonymous"
      term="Let me know what you thought of this article :)"
    />
  );
};

export default Comments;
