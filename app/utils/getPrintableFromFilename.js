export const getPrintableFromFilename = (filename) => {
  const regex = new RegExp("#np");
  return regex.test(filename);
};
