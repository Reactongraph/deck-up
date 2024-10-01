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
        smallGray: "#CFD4E0"
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
    },
  },
  plugins: [],
};
