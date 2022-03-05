/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: "netlify",
  server: "./server.js",
  ignoredRouteFiles: [".*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "netlify/functions/server/index.js",
  // publicPath: "/build/",
  // devServerPort: 8002
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
