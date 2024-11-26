/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/public/images/dashed.svg')",
      },
      colors: {
        primary: "#FF725F",
        secondary: "#26C4D8",
        lightBlue: "#ECF1F6",
        darkBlue: "#00508A",
        midBlue: "#318BB4",
        skyBlue: "#64ACCD",
        white: "#fff",
        black: "#151515",
        gray: "#3E4043",
        bodyColor: "#52565A",
        linear: "#318BB4",
        lightGray: "#CBDEFF",
        paleBlue: "#1D375E",
        smallBlue: "#64A4C0",
        midGray: "#576676",
        smallGray: "#CFD4E0",
        regularGray: "#666A6E",
        smallBlack: "#252525",
        hoverButton: "#DB4C38",
        hoverSecondary: "#1B909F",
        borderGray: "#CFCFCF",
        lighCyan: "#E4F6F9",
        lightGrayShade: "#F9FBFC",
        disableGray: "#D9E2EB",
        textAreaGray: "#8A8A8A",
      },
      fontSize: {
        banner: ["55px", { lineHeight: "70px", fontWeight: "800" }], // Banner headline
        headline: ["40px", { lineHeight: "48px", fontWeight: "800" }],
        head: ["16px", { lineHeight: "48px" }], // Normal headline
        subhead: ["24px", { lineHeight: "32px", fontWeight: "600" }], // Subhead line / Titles
        body: ["18px", { lineHeight: "26px", fontWeight: "400" }], // Body copy / Content
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        // Custom screen sizes
        xs: "475px", // Extra small devices (mobile)
        sm: "640px", // Small devices (tablets)
        md: "768px", // Medium devices (small laptops)
        lg: "1024px", // Large devices (laptops/desktops)
        xl: "1280px", // Extra large devices (large desktops)
        xxl: "1536px", // 2XL devices (larger desktops)
      },
    },
  },
  plugins: [],
};
