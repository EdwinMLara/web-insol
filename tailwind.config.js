/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d0e5e5", // Color primario
        secondary: "#fafafa", // Color secundario
        purple: '#7e5bef',
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
