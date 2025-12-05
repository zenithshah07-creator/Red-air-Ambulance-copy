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
          DEFAULT: '#DC2626', // Red-600
          dark: '#B91C1C',    // Red-700
          light: '#EF4444',   // Red-500
        },
        secondary: {
          DEFAULT: '#1E293B', // Slate-800 (Navy-ish)
          dark: '#0F172A',    // Slate-900
          light: '#334155',   // Slate-700
        },
        accent: '#F8FAFC',    // Slate-50
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
