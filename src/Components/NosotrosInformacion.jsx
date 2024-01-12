import React, { useState, useEffect } from "react";

import { TbCloudComputing } from "react-icons/tb";
import { GiClockwork } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";
import { GiTimeSynchronization } from "react-icons/gi";
import { FaClock } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

// icons
import E from "../img/Iconos/11.svg"
import P from "../img/Iconos/9.svg"
import I from "../img/Iconos/10.svg"

function NosotrosInformacion() {
  const [numberOfLines, setNumberOfLines] = useState(9);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      // Ajusta el número de líneas según el ancho de la pantalla
      if (screenWidth < 600) {
        setNumberOfLines(3);
      } else if (screenWidth < 800) {
        setNumberOfLines(4);
      } else {
        setNumberOfLines(9);
      }
    };

    // Agrega un event listener para el cambio de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Asegúrate de ejecutar el efecto solo una vez al montar el componente

  //const numberOfLines = 9; // Adjust this number as needed

  const verticalLines = Array.from({ length: numberOfLines }).map(
    (_, index) => (
      <React.Fragment key={index}>
        <div className="w-px h-64 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-tertiary "></div>
        <div className="w-px h-80 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-secondary "></div>
        <div className="w-px h-40 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-tertiary "></div>
        <div className="w-px h-32 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-secondary "></div>
        <div className="w-px h-48 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-tertiary "></div>
        <div className="w-px h-64 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-secondary "></div>
        <div className="w-px h-72 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-tertiary "></div>
        <div className="w-px h-24 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-secondary "></div>
        <div className="w-px h-64 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-tertiary "></div>
        <div className="w-px h-80 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-secondary "></div>
        <div className="w-px h-40 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-tertiary "></div>
        <div className="w-px h-32 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-secondary "></div>
        <div className="w-px h-48 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-tertiary "></div>
        <div className="w-px h-64 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-secondary "></div>
        <div className="w-px h-72 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-tertiary "></div>
        <div className="w-px h-24 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-secondary  "></div>
      </React.Fragment>
    )
  );
  // animate-pulse

  return (
    <div className="text-center mt-20">
      <h1 className="mb-5 text-2xl font-bold text-white">¿Quiénes Somos?</h1>
      <div className="text-white pt-5 p-5 z-10 relative">
        {" "}
        "En INSOEL, somos arquitectos del progreso, pioneros en el ámbito de la
        automatización, donde la innovación se une a la eficiencia. Con un
        compromiso inquebrantable de dar forma al futuro, aprovechamos el poder
        de la tecnología de vanguardia para automatizar máquinas y programas,
        trascendiendo límites y redefinir lo que es posible. Nuestra incesante
        búsqueda de la excelencia permite a las industrias evolucionar,
        integrando perfectamente la automatización en el latido del progreso.
        Donde cada línea de código y cada máquina revoluciona la forma en que
        funciona el mundo <br />
        <br />
        INSOEL — Automatización redefinida".
        <div className="mt-20 ">
          <h1 className="text-2xl">
            Optimizamos su Camino hacia el Éxito Empresarial
          </h1>
          <div className="mx-auto w-44 border-b-2 border-tertiary"></div>

          <div className="flex items-center justify-evenly p-8 mt-10">
            <div className="text-center item-center">
            <img src={I} alt="Icono Personalizado" className="mx-auto fill-tertiary W-[5rem] h-[5rem]" />
              <p>Innovación</p>
            </div>
            <div className="text-center">
            <img src={P} alt="Icono Personalizado" className="mx-auto fill-tertiary W-[5rem] h-[5rem]" />
              <p>Productividad</p>
            </div>
            <div className="text-center">
            <img src={E} alt="Icono Personalizado" className="mx-auto fill-tertiary W-[5rem] h-[5rem]" />
  <p>Eficiencia</p>
            </div>
          </div>
        </div>
      </div>
      {/* Vertical Lines with Different Sizes */}
    </div>
  );
}

export default NosotrosInformacion;
{
  /*<div className="flex items-end pt-[2rem]">{verticalLines}</div>*/
}
