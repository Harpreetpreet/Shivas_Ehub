/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: ({ theme }) => ({
        brand: '#222226',
        primary: '#ffecb3',
        secondary: '#104a3a',
        lightShade: '#f7f7f7',
        darkShade: '#8C8C8C',
        accent: '#999999',
      }),
      fontFamily: ({ theme }) => ({
        primary: 'Roboto, "Helvetica Neue", Arial, sans-serif',
        secondary: 'Poppins, sans-serif',
      }),
    },
  },
  plugins: [],
};
