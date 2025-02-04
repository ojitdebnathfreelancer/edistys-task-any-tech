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
        "blue-text2": "rgb(22, 67, 119)",
        "orange-main-bg": "rgb(254, 139 ,83)",
        "gray-bg": "rgb(248, 252, 255)",
        "footer-bg": "rgb(0, 32, 69)",
        "footer-text": "rgb(0, 233, 234)",
        "copy-bg": "rgb(0, 21, 45)",
      },
      boxShadow: {
        "button-primary-shadow": "0px 3px 3px rgba(16, 62, 117, 0.37)",
        "slide-item-shadow":
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      },
      clipPath: {
        "hero-clip": "polygon(0 0, 100% 0, 100% 81%, 0% 100%)",
        "hero-clip-phone": "polygon(0 0, 100% 0, 100% 92%, 0% 100%)",
        "bg-clip-hero-image":
          "polygon(67% 0, 100% 0, 100% 68%, 80% 100%, 0 100%, 32% 51%)",
        "bg-clip-hero-image-phone": "polygon(0 15%, 100% 0, 100% 85%, 0% 100%)",
        "legacy-clip-xl": "polygon(0 0,100% 49%,100% 100%,0% 100%)",
        "legacy-clip-md": "polygon(0 0,100% 29%,100% 100%,0% 100%)",
        "legacy-clip-phone": "polygon(0 0,100% 14%,100% 100%,0% 100%)",
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
