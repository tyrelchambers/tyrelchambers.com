/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  serverDependenciesToBundle: [
    "remark-gfm",
    "rehype-highlight",
    "hast-util-to-text",
    "hast-util-is-element",
    "unist-util-find-after",
    "unist-util-is",
    "unist-util-visit",
    "unist-util-visit-parents",
  ],
};
