/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}",
    "./*.html",
    "./src/*.jsx"
  ],  
  theme: {
    extend: {
      fontFamily: {
        "mono": ["Space Mono"],
        "grotesk": ["Space Grotesk"]
      },
      colors: {
        "primary": "#A35CF0",
        "background": "#1A1A2E",
        "accent": "#FCFF6F"
      }
    },
  },
  plugins: [],
}

