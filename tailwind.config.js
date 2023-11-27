/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      /*"gray-20": "#F8F4EB",
      "gray-50": "#EFE6E6",
      "gray-100": "#DFCCCC",
      "gray-500": "#5E0000",
      "primary-100": "#FFE1E0",
      "primary-300": "#FFA6A3",
      "primary-500": "#FF6B66",
      "secondary-400": "#FFCD58",
      "secondary-500": "#FFC132",#FFB300"*/
      "gray-20": "#FFFFFF",
      "gray-50": "#D9D9D9",
      "gray-100": "#8C8C8C",
      "gray-500": "#000000",
      "primary-100": "#F2F3F5",
      "primary-300": "#669CFF",
      "primary-500": "#003087",
      "secondary-400": "#FF9933",
      "secondary-500": "#81BC00",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HDD-1024x683.jpg')"
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      content: {
        evolvetext: "url('./assets/Teradyne-logo-WHITE-600x160.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}
