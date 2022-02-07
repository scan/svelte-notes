const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  config: ['./src/**/*.html', './src/**/*.svelte'],
  darkMode: 'media',

  theme: {
    extend: {},
  },

  variants: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
        monospace: ['Roboto Mono', 'monospace'],
      },
    },
  },

  daisyui: {
    rtl: false,
    logs: false,
    themes: ['dark', 'light'],
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
  ],

  content: ['./src/**/*.{html,js,svelte,ts}'],
};
