/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-poppins)"],
        secondary: ["var(--font-opensans)"],
      },
      colors: {
        violet: "hsl(257, 40%, 49%)",
        magenta: "hsl(300, 69%, 71%)",
      },
      backgroundImage: {
        desktop: "url('./images/bg-desktop.svg')",
        mobile: "url('./images/bg-mobile.svg')",
      },
      screens: {
        sm: "375px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
