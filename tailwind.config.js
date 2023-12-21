/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fcd424", // Color primario dorado amarillo
        secondary: "#04547c", // Color secundario azul rey
        tertiary: '#367696', // color tercioario azul claro
        quaternary: '#b09419', // color cuaternario dorado amarillo oscuro 
       
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
