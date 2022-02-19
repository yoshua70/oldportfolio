module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: {
    enabled: true,
    content: ["./pages/**/*.js", "./components/**/*.js"],
    options: {
      safelist: ["dark"],
    },
  },
  theme: {
    typography: (theme) => ({}),
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
}
