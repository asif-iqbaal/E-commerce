/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transform: {
        'translate-z-100': 'translateZ(100px)',
        'translate-z-200': 'translateZ(200px)',
        // Add more if needed
      },
    },
  },
  plugins: [],
}

