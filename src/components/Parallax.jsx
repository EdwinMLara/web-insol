// Importa las bibliotecas necesarias
import React from "react";
import { Parallax } from "react-parallax";

// Importa los estilos de tailwindcss
import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";

// Define el componente principal
const ParallaxComponent = () => {
  return (
    <div>
      {/* Encabezado con parallax */}
      <Parallax bgImage="/img/img2.jpg" strength={500}>
        <motion.div
          className="h-screen flex items-center justify-center text-white text-4xl font-bold"
          animate={{ x: 100 }}
          transition={{ delay: 1 }}
        >
          ¡Bienvenido a mi sitio!
        </motion.div>
      </Parallax>

      {/* Contenido regular */}
      <div className="container mx-auto my-8">
        <h2 className="text-2xl font-bold mb-4">Contenido Principal</h2>
        <p className="text-gray-700">
          Tu contenido va aquí. Puedes agregar más secciones, imágenes, texto,
          etc.
        </p>
      </div>

      {/* Sección con otro parallax */}
      <Parallax bgImage="/img/img1.jpg/" strength={500}>
        <div className="h-screen flex items-center justify-center text-white text-4xl font-bold">
          ¡Más contenido asombroso!
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxComponent;
