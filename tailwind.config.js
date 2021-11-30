module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'ui-monospace', 'ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },
    extend: {
      colors: {
        'honey-dew': '#f1faee',
        test: '#f7fff7',
        'winter-sky': '#FF206E',
      },
    },
  },
  variants: {},
  plugins: [],
};
