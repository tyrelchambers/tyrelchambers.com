import { bundleMDX } from "mdx-bundler";

export const bundleMdx = async ({ source }) => {
  return await bundleMDX({
    source,
    xdmOptions(options) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.

      return options;
    },
  });
};
