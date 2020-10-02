module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      sans:
        '"DM Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {
      colors: {
        ocean: '#072540',
        pond: '#93C2DB',
        lake: '#183D5D',
        fuschia: '#FF8AE2',
        grayed: 'rgba(198,198,198,0.6)',
      },
      minWidth: {
        '1/2': '50%',
      },
    },
  },
  variants: {},
  plugins: [],
}
