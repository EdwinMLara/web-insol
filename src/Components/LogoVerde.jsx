import React from "react";
import Navbar from "./Navbar";

// Importa tus imágenes dinámicamente
import image1 from "../imgCarrusel/06.png";
import { Link } from "react-router-dom";
import { useInsoel } from "../Context/InsoelContext";

function LogoVerde() {
 const {setLogoColor} = useInsoel();
 setLogoColor('verdeBlanco')
  return (
    <div>
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div className="relative w-full h-screen flex items-center justify-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ">
          {/* Agregar el título encima de la imagen */}
          <div className="absolute top-2/3 left-16">
            <h3 className="font-bold text-black  top-1/3 transform ">
              PROYECTO VERDE
            </h3>
            <h1 className="text-2xl font-bold text-black transform lg:text-3xl xl:text-4xl">
              AUTOMATIZACION DE <br class="lg:hidden xl:block" /> INVERNADEROS
            </h1>
            <button className="bg-white bg-opacity-25 text-black py-3 px-8 bottom-16 mt-2 transform border-2 border-black/50 ">
              <Link to= "/invernadero">CONOCE MÁS</Link>
            </button>
          </div>

          <img src={image1} className="block w-full" alt={"Slide 1"} />
        </div>
      </div>
    </div>
  );
}

export default LogoVerde;