/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mintcream: "#e4f1e9",
        darkolivegreen: "#0d562a",
        white: "#fff",
        "primary-700-base": "#327a6d",
        whitesmoke: {
          100: "#f5f6f8",
          200: "#f5f5f5",
          300: "#f1f2f5",
        },
        dimgray: "#524f4f",
        gray: {
          100: "#858585",
          200: "#232222",
          300: "#222",
          400: "#1a1a1a",
          500: "rgba(34, 34, 34, 0.5)",
        },
        black: "#000",
        gainsboro: {
          100: "#e4e4e4",
          200: "#e2e2e2",
        },
        gold: "#ffde33",
        cadetblue: {
          100: "#75a69d",
          200: "#4e9f91",
        },
        "foundation-color-text-c500": "#121419",
        honeydew: "#d9f1e3",
        darkgray: "#9a9fad",
        darkslategray: "#4a4a4a",
        lightgray: "#cecece",
        ivory: "#f6faef",
      },
      spacing: {},
      fontFamily: {
        mukta: "Mukta",
        "hanken-grotesk": "'Hanken Grotesk'",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
      },
    },
    fontSize: {
      "33xl": "52px",
      "13xl": "32px",
      "5xl": "24px",
      "21xl": "40px",
      "23xl": "42px",
      base: "16px",
      "19xl": "38px",
      "93xl": "112px",
      "9xl": "28px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
