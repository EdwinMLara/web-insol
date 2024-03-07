import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

import foset from "../img/DetalleProducto/Foset_logo.png";

// Importa tus imágenes dinámicamente
import image1 from "../img/DetalleProducto/000.jpg";
import image2 from "../img/DetalleProducto/001.jpg";
import image3 from "../img/DetalleProducto/002.jpg";

// Crea un array de rutas de imágenes
const imagePaths = [image1, image2, image3];

function DetalleProducto() {
  const [imagenActiva, setImagenActiva] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Cambia a la siguiente imagen
      setImagenActiva((prevImagen) => (prevImagen + 1) % imagePaths.length);
    }, 3000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);

      // Después de unos segundos, vuelve a hacer visible el elemento
      setTimeout(() => {
        setIsVisible(true);
      }, 2000); // Ajusta el tiempo según tus necesidades
    }, 2000); // Ajusta el tiempo según tus necesidades

    // Limpia el temporizador al desmontar el componente
    return () => clearTimeout(timeout);
  }, [isVisible]);

  return (
    <div className="flex  mt-24 relative">
      {/* Izquierdo */}
      <div className="flex-1 flex flex-col">
        {/* Título */}
        <h1 className="text-2xl text-center mb-5">
          Calentador de paso instantáneo 6L,
          <br /> 1 servicio gas L.P
        </h1>

        {/* Carrusel */}
        <div className="relative overflow-hidden after:clear-both after:block after:content-['']">
          {imagePaths.map((path, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
                index === imagenActiva ? "block" : "hidden"
              }`}
              data-te-carousel-item
              data-te-carousel-active={index === imagenActiva}
            >
              <img
                src={path}
                className="block w-[24rem] h-[24rem]"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Derecho */}
      <div className="flex-1 flex flex-col relative">
        <img src={foset} alt="Logo" className="ml-auto mb-4 w-40 h-16" />

        {/* Mensaje de oferta especial */}
        <div className="absolute mt-10 transform -translate-x-1/2">
          <h1
            className={`font-black text-2xl text-red-600 transition-transform transform ${
              isVisible ? "rotate-12 hover:rotate-12 scale-150" : "opacity-0"
            } mt-3`}
          >
            ¡Oferta especial por tiempo limitado!
          </h1>
        </div>

        <div className="flex justify-around mt-10">
          <div className="flex mb-4">
            <div className="text-center">
              <h1 className="text-xl font-bold">Descuento</h1>
              <div className="bg-gray-200 pl-8 pr-8 pt-4 pb-4 rounded-lg ">
                <p className=" text-3xl font-bold text-red-600"> $ 1,993</p>
              </div>
            </div>
          </div>

          <div className="flex  mb-4">
            <div className="text-center">
              <h1 className="text-xl font-bold ">Preferencial</h1>
              <div className="bg-gray-200 pl-8 pr-8 pt-4 pb-4 rounded-lg ">
                <p className="text-3xl font-bold "> $ 2,215</p>
              </div>
            </div>
          </div>

          <div className="flex  ">
            <div className="text-center">
              <h1 className="text-xl font-bold ">Público</h1>
              <div className="bg-gray-200 pl-8 pr-8 pt-4 pb-4 rounded-lg ">
                <p className="text-3xl font-bold "> $ 2,685</p>
              </div>
            </div>
          </div>
        </div>

        <span className="text-center text-gray-600 block text-lg mb-5">
          Ahorro del 10% del precio preferencial y un 25.77% del precio publico
        </span>
        <h1 className="mt-10 text-center text-2xl">¡Aprovecha ahora!</h1>
        <a
          href={"https://wa.me/message/WAYW2ZY6BUU6G1?src=qr"}
          className="mt-3  mr-24 ml-24 flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          <FaWhatsapp className="mr-2 text-2xl" />
          Contáctanos por WhatsApp
        </a>
      </div>
    </div>
  );
}

export default DetalleProducto;
