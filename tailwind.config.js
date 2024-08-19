/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        media440: "440px",
        media560: "560px",
      },
      backgroundImage: {
        "bg-testimonials": "url('/images/bg-Testimonials.png')",
      },
    },
  },
  plugins: [],
};

