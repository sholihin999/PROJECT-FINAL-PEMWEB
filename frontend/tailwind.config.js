/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'colorone': '#133E87',  // Menambah warna baru dengan nama 'custom-color'
        'colorsecond': '#608BC1',     // Warna kedua
        'colorthird': '#CBDCEB',     // Warna ketiga
      },
    },
  },
  plugins: [],
}