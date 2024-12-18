/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {

      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Open Sans', 'sans-serif'],
      },


      colors: {
        'blue':'#172554',
        'dark-blue':'#1e3a8a',
        'golden':'#FFD700',
        'dark-chocolate': '#3E2723',
        'light-brown': '#A1887F',
        'pale-beige': '#EFEBE9',
        'darker-brown': '#8D6E63',
        'BR': '#854d0e',
        'LBR':'#713f12',
        'LLBR':'#ca8a04',
        'DBR':'#422006',
        'WD':'#1c1917',
        'cyan':'rgb(45 212 191)',

        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}

