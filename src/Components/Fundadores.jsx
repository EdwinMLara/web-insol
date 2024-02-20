import React, { useState } from 'react';

import Alejandro from "../img/Personas/persona1.jpeg";
import Miguel from "../img/Personas/persona2.jpeg";
import David from "../img/Personas/persona3.png";

function Fundadores() {
  const [showH1, setShowH1] = useState(true);
  const [showH2, setShowH2] = useState(true);
  const [showH3, setShowH3] = useState(true);

  const alejandro = {
    nombre: "Ing. Luis Alejandro Zendejas",
    puesto: "Jefe de Instrumentación",
    vision:
      "Encargado de toda la etapa de sensado y control en los proyectos de INSOEL. Diseña y ejecuta logística para optimizar procesos. Su conocimiento amplio en aspectos electrónicos le dan la capacidad a INSOEL en adaptarse a gran diversidad de proyectos de monitoreo y control."
  };

  const miguel = {
    nombre: "M.I. Edwin Miguel Lara Espinosa",
    puesto: "Ingeniero de Software",
    vision:
      "Es un ingeniero de software que disfruta escribir codigo pero ademas tiene una pasion por la colaboración y aplicación de sus conocimientos en diferentes áreas de la ingenieria. Ha colaborado en el desarrollo de sistemas inteligentes, las cuales han sido publicados en revistas reconocidas en por el sector cientifico. Fuera del ambito laboral y profesional disfruta hacer reparaciones mecanicas, electricas y jugar de partidos de frontón",
  };

  const david = {
    nombre: "M.I. David Balcazar",
    puesto: "Ingeniero de Automatización y Electrónica",
    vision:
      "David descubrió el mundo de la automatización e instrumentación mientras se encontraba estudiando ingeniería en comunicaciones y electrónica en la Universidad de Guanajuato y desde su segundo año comenzó a participar en concursos de innovación y desarrollo de prototipos en donde presentó proyectos que variaron desde sistemas de control para la eficiencia energética hasta páginas web para promocionar el turismo. En el 2020, David obtuvo su grado de Maestro en Ingeniería Electrónica Aplicada en la Universidad de Guanajuato y actualmente se encuentra por concluir el MBA con enfoque en Business Analytics en la IMF Business School en Madrid. Fuera del trabajo, a David le gusta meditar, practicar yoga, leer manga y ver animes además de llevar una dieta vegetariana. ",
  };
  

  return (
    <div className="">
      <h1 className="text-white text-center text-2xl mt-14">
        CONOCE A NUESTROS FUNDADORES
      </h1>
      <div className="sm:flex sm:space-x-40 mt-24 sm:flex-col items-center">
        <div className="sm:flex sm:space-x-40">
          {/* Persona 1 */}
          <div className="flex flex-col items-center group mb-8 sm:mb-0 relative">
            <div className="relative flex flex-col items-center">
              <img
                src={Miguel}
                alt="Foto de la persona 1"
                className="w-[16rem] h-[18rem] object-cover outline outline-offset-2 outline-white rounded-lg mb-4 hover:outline-quaternary" 
                onMouseEnter={() => setShowH2(false)}
                onMouseLeave={() => setShowH2(true)}
              />
              <div className="hidden group-hover:block sm:absolute top-1/2 left-full transform -translate-y-2/2   sm:-translate-y-1/2 sm:m-5 p-4 shadow-lg z-10 w-96 sm:w-[32rem] sm:h-[28rem] text-black py-3 px-8 bottom-16 rounded-lg bg-gradient-to-t from-quaternary to-primary mt-2 border-2 border-black/50 space-y-4"
               >
                <h2 className="text-3xl text-center mb-2 font-bold">{miguel.nombre}</h2>
                <h2 className="text-xl mb-2 italic text-secondary font-semibold ">{miguel.puesto}</h2>
                <p className="text-lg text-justify leading-relaxed indent-8  ">
                  {miguel.vision}
                </p>
              </div>

              {showH2 && (
      <h1 className="text-center text-white relative hidden sm:block">
        M.I. EDWIN LARA
      </h1>
    )}
              
            </div>
          </div>

          {/* Persona 2 */}
          <div className="flex flex-col items-center group mb-8 sm:mb-0">
            <div className="relative flex flex-col items-center">
              <img
                src={Alejandro}
                alt="Foto de la persona 2"
                className="w-[16rem] h-[18rem] object-cover outline outline-offset-2 outline-white rounded-lg mb-4 hover:outline-quaternary"
                onMouseEnter={() => setShowH1(false)}
                onMouseLeave={() => setShowH1(true)}
              />
              <div className="hidden group-hover:block sm:absolute top-1/2 left-full transform -translate-y-2/2   sm:-translate-y-1/2 sm:m-5 p-4 shadow-lg z-10 w-96 sm:w-[28rem] sm:h-[28rem] text-black py-3 px-8 bottom-16 rounded-lg bg-gradient-to-t from-quaternary to-primary mt-2 border-2 border-black/50 space-y-4">
                <h2 className="text-3xl text-center mb-2 font-bold">{alejandro.nombre}</h2>
                <h2 className="text-xl mb-2 italic text-secondary font-semibold">{alejandro.puesto}</h2>
                <p className="text-lg text-justify leading-relaxed indent-8">
                  {alejandro.vision}
                </p>
              </div>
              {showH1 && (
              <h1 className="text-center text-white relative hidden sm:block">
              ING. LUIS ZENDEJAS
              </h1>
              )}
            </div>
          </div>

          {/* Persona 3 */}
          <div className="flex flex-col items-center group mb-8 sm:mb-0">
            <div className="relative flex flex-col items-center">
              <img
                src={David}
                alt="Foto de la persona 3"
                className="w-[16rem] h-[18rem] object-cover outline outline-offset-2 outline-white rounded-lg mb-4 hover:outline-quaternary"
                onMouseEnter={() => setShowH3(false)}
                onMouseLeave={() => setShowH3(true)}
              />
              <div className="hidden group-hover:block sm:absolute top-1/2 right-full transform -translate-y-2/2   sm:-translate-y-1/2 sm:m-5 p-4 shadow-lg z-10 w-96 sm:w-[52rem] sm:h-[28rem] text-black py-3 px-8 bottom-16 rounded-lg bg-gradient-to-t from-quaternary to-primary mt-2 border-2 border-black/50 space-y-4">
                <h2 className="text-3xl text-center mb-2 font-bold">{david.nombre}</h2>
                <h2 className="text-xl mb-2 italic text-secondary font-semibold">{david.puesto}</h2>
                <p className="text-lg text-justify leading-relaxed indent-8">
                  {david.vision}
                </p>
              </div>
              {showH3 && (
              <h1 className="text-center text-white relative hidden sm:block">
                M.I. DAVID BALCAZAR
              </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
  
}

export default Fundadores;
