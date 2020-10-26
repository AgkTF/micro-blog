module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      xs: '414px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      spacing: {
        72: '18rem',
        80: '20rem',
      },
      fontFamily: {
        work: 'Work Sans',
      },
      fontSize: {
        tiny: '0.625rem',
      },
      colors: {
        css: {
          default: '#3da9fc',
          light: '#CEE9FE',
        },
        html: {
          default: '#e44d26',
          light: '#F8D2C8',
        },
        js: {
          default: '#ecc94b',
          light: '#FAF2D2',
        },
        git: {
          default: '#0A0A0A',
          light: '#C1C1C1',
        },
        offWhite: '#FFFFFE',
      },
    },
  },
  variants: {},
  plugins: [],
};
