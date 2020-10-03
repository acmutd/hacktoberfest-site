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
        ocean: '#11194C',
        pond: '#9BC1D9',
        lake: '#233283',
        cerulean: '#2780C0',
        fuschia: '#FF8AE2',
        grayed: 'rgba(198,198,198,0.6)',
      },
      minWidth: {
        '1/2': '50%',
      },
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
