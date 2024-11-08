/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "rgba(38, 210, 147, 1)",
        "primary-grey": "rgba(216, 215, 208, 255)",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Roboto", "sans-serif"],
      },


      keyframes: {
        customBounce: {
          '0%, 100%': { transform: 'translateY(-30%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
      },
      // Define the custom animation using the keyframes
      animation: {
        'custom-bounce': 'customBounce 0.53s infinite',
      },
      

    },
  },

  plugins: [],
};
