/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-text": "rgb(255, 255, 255)",
        "blue-text": "rgb(31, 128, 240)",
        "orange-main-bg": "rgb(254, 139 ,83)",
      },
      boxShadow: {
        "button-primary-shadow": "0px 3px 3px rgba(16, 62, 117, 0.37)",
      },
      clipPath: {
        "hero-clip": "polygon(0 0, 100% 0, 100% 81%, 0% 100%)",
        "hero-clip-phone": "polygon(0 0, 100% 0, 100% 92%, 0% 100%)",
        "bg-clip-hero-image":
          "polygon(67% 0, 100% 0, 100% 68%, 80% 100%, 0 100%, 32% 51%)",
        "bg-clip-hero-image-phone": "polygon(0 15%, 100% 0, 100% 85%, 0% 100%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const clipPaths = theme("clipPath");
      const utilities = Object.entries(clipPaths).reduce(
        (acc, [key, value]) => {
          acc[`.clip-${key}`] = { clipPath: value };
          return acc;
        },
        {}
      );
      addUtilities(utilities);
    },
  ],
};
