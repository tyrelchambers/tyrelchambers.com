export function getImgProps(imageBuilder, { widths, sizes, transformations }) {
  const averageSize = Math.ceil(widths.reduce((a, s) => a + s) / widths.length);

  return {
    alt: imageBuilder.alt,
    src: imageBuilder({
      quality: "auto",
      format: "auto",
      ...transformations,
      resize: { width: averageSize, ...transformations?.resize },
    }),
    srcSet: widths
      .map((width) =>
        [
          imageBuilder({
            quality: "auto",
            format: "auto",
            ...transformations,
            resize: { width, ...transformations?.resize },
          }),
          `${width}w`,
        ].join(" ")
      )
      .join(", "),
    sizes: sizes.join(", "),
  };
}
