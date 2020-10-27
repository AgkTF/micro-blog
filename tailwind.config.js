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
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.gray.800'),
          code: {
            color: theme('colors.pink.500'),
          },
          a: {
            color: theme('colors.blue.600'),
            '&:hover': {
              color: theme('colors.blue.400'),
            },
          },
          blockquote: {
            color: theme('colors.gray.800'),
          },
        },
      },
    }),
    extend: {
      spacing: {
        72: '18rem',
        80: '20rem',
        88: '22rem',
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
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  variants: {
    boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [require('@tailwindcss/typography')],
};
