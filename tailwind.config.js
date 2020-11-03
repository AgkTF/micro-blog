module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      './components/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      whitelistPatterns: [/css|js|html|git|vs/],
    },
  },
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
        136: '34rem',
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
        vs: {
          default: '#007acc',
          light: '#BFDDF2',
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
      boxShadow: {
        cssLight:
          '0 4px 6px -1px rgba(61, 169, 252, 0.2), 0 2px 4px -1px rgba(61, 169, 252, 0.06)',
        css:
          '6px 8px 6px -1px rgba(61, 169, 252, 0.2), 0 2px 4px -1px rgba(61, 169, 252, 0.06)',
        htmlLight:
          '0 4px 6px -1px rgba(228, 77, 38, 0.2), 0 2px 4px -1px rgba(228, 77, 38, 0.06)',
        html:
          '6px 8px 6px -1px rgba(228, 77, 38, 0.2), 0 2px 4px -1px rgba(228, 77, 38, 0.06)',
        jsLight:
          '0 4px 6px -1px rgba(236, 201, 75, 0.2), 0 2px 4px -1px rgba(236, 201, 75, 0.06)',
        js:
          '6px 8px 6px -1px rgba(236, 201, 75, 0.2), 0 2px 4px -1px rgba(236, 201, 75, 0.06)',
        gitLight:
          '0 4px 6px -1px rgba(10, 10, 10, 0.2), 0 2px 4px -1px rgba(10, 10, 10, 0.06)',
        git:
          '6px 8px 6px -1px rgba(10, 10, 10, 0.2), 0 2px 4px -1px rgba(10, 10, 10, 0.06)',
        vsLight:
          '0 4px 6px -1px rgba(0, 122, 204, 0.2), 0 2px 4px -1px rgba(0, 122, 204, 0.06)',
        vs:
          '6px 8px 6px -1px rgba(0, 122, 204, 0.2), 0 2px 4px -1px rgba(0, 122, 204, 0.06)',
      },
    },
  },
  variants: {
    boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [require('@tailwindcss/typography')],
};
