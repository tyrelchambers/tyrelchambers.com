export const slugify = (text) => {
  return text.toString().toLowerCase().replace(/\s+/g, "-"); // Replace spaces with -
};
