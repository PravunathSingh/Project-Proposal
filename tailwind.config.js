module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5.5rem',
        '3xl': '6.5rem',
      },
    },
    extend: {
      colors: {
        'brand-black': '#020202',
        'brand-yellow': '#f1bc01',
        'brand-white': '#ffffff',
      },
      backgroundImage: {
        hero: "url('/assests/newHero.png')",
      },
      spacing: {
        xl: '5.5rem',
      },
    },
  },
  plugins: [],
};
