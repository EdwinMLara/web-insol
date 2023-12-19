/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fcd424", // Color primario dorado
        secondary: "#fafafa", // Color secundario
        purple: '#7e5bef',
        fondo: '#f6e09d',
        azul: '#04547c',
        claro: '#64acbc',
        bajo: '#d0e5e5'
      },
      fontFamily: {
        custom: ["Montserrat", "sans-serif"], // Fuente personalizada
      },
      fontSize: {
        "2xl": "1.75rem", // Tamaño de fuente personalizado
      },
    },
  },
  plugins: [],
};
