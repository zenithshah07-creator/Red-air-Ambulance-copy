/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0052A0', // Medical Blue
          dark: '#003d7a',    // Darker Medical Blue
          light: '#3373b3',   // Lighter Medical Blue
        },
        secondary: {
          DEFAULT: '#FFFFFF', // White
          dark: '#f0f0f0',    // Off-white for subtle contrast
          light: '#ffffff',
        },
        accent: '#4FC3F7',    // Sky Blue
        emergency: '#D00000', // Emergency Red
        charcoal: '#2E2E2E',   // Charcoal Grey
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
