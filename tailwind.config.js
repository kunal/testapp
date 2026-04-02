/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-foreground': '#ffffff',
        'brand-background': '#1f2937',
        'brand-accent': '#7c3aed',
      },
    },
  },
  plugins: [],
}

