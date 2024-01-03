import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Importa tus imágenes dinámicamente
import image1 from "../imgCarrusel/31.png";
import image2 from "../imgCarrusel/02.png";
import image3 from "../imgCarrusel/03.png";
import image4 from "../imgCarrusel/11.png";
import image5 from "../imgCarrusel/05.png";
import { useInsoel } from "../Context/InsoelContext";

// Crea un array de rutas de imágenes
const imagePaths = [image1, image2, image3, image4, image5];

function Carrusel() {
  const {setTxtColor, setLogoColor} = useInsoel()
  setTxtColor('white')
  setLogoColor('amarilloBlanco')
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
                <h3 className="font-bold text-black  top-1/3 transform ">Materializamos tus ideas</h3>
                <h1 className="text-2xl font-bold text-black transform lg:text-3xl xl:text-4xl">
                  AUTOMATIZACION Y <br class="lg:hidden xl:block" />{" "}
                  CONTROL
                </h1>
                <button className="bg-primary bg-opacity-75 text-black py-3 px-8 bottom-16 mt-2 transform border-2 border-black/50 bg-gradient-to-r hover:from-secondary hover:to-tertiary  ">
                <Link to= "/invernadero">CONOCE MÁS</Link>
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