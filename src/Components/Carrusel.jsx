import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

// Importa tus imágenes dinámicamente
import image1 from "../imgCarrusel/01.jpg";
import image2 from "../imgCarrusel/02.jpg";
import image3 from "../imgCarrusel/03.jpg";
import image4 from "../imgCarrusel/04.jpg";
import image5 from "../imgCarrusel/05.jpg";

// Crea un array de rutas de imágenes
const imagePaths = [image1, image2, image3, image4, image5];

function Carrusel() {
  const [imagenActiva, setImagenActiva] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Cambia a la siguiente imagen
      setImagenActiva((prevImagen) => (prevImagen + 1) % imagePaths.length);
    }, 3000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div>
      <Navbar />
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {imagePaths.map((path, index) => (
          <div
            key={index}
            className={`relative w-full h-screen flex items-center justify-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
              index === imagenActiva ? "block" : "hidden"
            }`}
            data-te-carousel-item
            data-te-carousel-active={index === imagenActiva}
          >
             {/* Agregar el título encima de la imagen */}
             <div className="absolute top-2/3 left-16">
                <h3 className="font-bold text-black  top-1/3 transform ">PROYECTO VERDE</h3>
                <h1 className="text-2xl font-bold text-black transform lg:text-3xl xl:text-4xl">
                  AUTOMATIZACION DE <br class="lg:hidden xl:block" />{" "}
                  INVERNADEROS
                </h1>
                <button className="bg-white bg-opacity-25 text-black py-3 px-8 bottom-16 mt-2 transform border-2 border-black/50 ">
                CONOCE MÁS
              </button>
              </div> 
              
            <img src={path} className="block w-full" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      </div>
  
  );
}

export default Carrusel;


/*
src={`https://mdbcdn.b-cdn.net/img/new/slides/04${
                  index + 1
                }.webp`}
                className=" block w-full"
                alt={`Slide ${index + 1}`}
                */