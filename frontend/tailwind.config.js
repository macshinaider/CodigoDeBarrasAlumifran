module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {},
  corePlugins: {},
  // Adicione a classe de animação personalizada
  extend: {
    animation: {
      'marquee': 'marquee 5s linear infinite',
    },
  },
}
