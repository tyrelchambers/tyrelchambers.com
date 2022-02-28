module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      screens: {
        mobile: "425px",
        tablet: "768px",
        desktop: "1024px",
        large: "1440px",
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
