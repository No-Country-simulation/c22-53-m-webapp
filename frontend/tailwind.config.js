/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ["'Lora'", "serif"],
      },
      colors: {
        "custom-cyan":"#88DFF2"
      },
      spacing: { 
        'dvh-100': '100dvh',
        'dvw-100': '100dvw',
      }
    },
  },
  plugins: [],
}
