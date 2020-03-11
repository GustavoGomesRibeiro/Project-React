module.exports = {
  plugins: [
    // ...
    require('tailwindcss'),
    require('autoprefixer'),
    // ...
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    inset: {
      '-16': '-4rem',
          },
  },
  variants: {
    boxSizing: ['responsive', 'hover', 'focus'],
    display: ['responsive', 'hover', 'focus'],
    float: ['responsive', 'hover', 'focus'],
    objectPosition: ['responsive', 'hover', 'focus'],
    position: ['responsive', 'hover', 'focus'],
    visibility: ['responsive', 'hover', 'focus'],
    zIndex: ['responsive', 'hover', 'focus'],
    textAlign: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
