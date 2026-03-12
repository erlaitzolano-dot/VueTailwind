/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "limegreen": "#1DB489",
        "brightred": "hsl(356, 69%, 56%)",
        "facebook": "hsl(208, 92%, 53%)",
        "twitter": "hsl(203, 89%, 53%)",
      },

      backgroundImage: {
        "darkmode": "linear-gradient(hsl(210, 79%, 56%), hsl(146, 68%, 55%))",
        "togglegradient": "linear-gradient(to right, hsl(210, 79%, 56%), hsl(146, 68%, 55%))",
        "instagramgradient": "linear-gradient(to right, hsl(37, 97%, 70%), hsl(5, 77%, 71%), hsl(329, 70%, 58%))"
      },
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
}
