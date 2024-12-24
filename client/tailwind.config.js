
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        custom: "4px", // Custom border radius
      },
      spacing: {
        customIcon: "20px", // Custom width and height
      },
      screens: {
        xs: "710px", // Define a custom breakpoint
      },
    },
  },
  plugins: [],
};