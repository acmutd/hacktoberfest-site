module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
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
        aqua: '#183D5D',
        tomato: '#9C4668',
        cerulean: '#2780C0',
        fuschia: '#FF8AE2',
        grayed: 'rgba(198,198,198,0.6)',
      },
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
