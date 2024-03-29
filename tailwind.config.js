/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': [ 'Poppins', 'sans-serif'],
        'zhi-mang-xing': [ 'Zhi Mang Xing', 'cursive'],
        'pontano':[ 'Pontano Sans, sans-serif'],
        
      },
      backgroundImage: {
        'bg-mobile': "url('/images/img-1.png')",
        'desktop': "url('/images/img-desktop.png')",
        'sunday': "url('/images/img13.png.jpg')",
        'tuesday': "url('/images/img4.png.jpg')",
        'thursday': "url('/images/img14.png.jpg')",
      },
      
      letterSpacing: {
        widest: "0.5em",
      },
      colors: {
        'transparent-blue': "rgba(24, 53, 109, 0.63)",
        'primary-blue': "#0E3887",
        'event-blue': "#01032E",
        'gallery-blue': "#16034D",
        'active-blue': "#0DCBD7",

      },
    },
  },
  plugins: [],
}

