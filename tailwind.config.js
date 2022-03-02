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
      colors: {
        background: {
          primary: "#1f2028",
        },
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
