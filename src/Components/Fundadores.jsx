import React from "react";
import Persona1 from "../img/Personas/persona1.jpeg";
import Persona2 from "../img/Personas/persona2.jpeg";
import Persona3 from "../img/Personas/persona3.jpeg";

function Fundadores() {
  const persona1 = {
    nombre: "Ing. Luis Alejandro Zendejas",
    puesto: "Ingeniero de Control y Automatización",
    vision: "Visualiza un futuro industrial donde la ingeniería electrónica de control y automatización no solo impulsa la eficiencia operativa, sino que también establece nuevos estándares de calidad y seguridad. Su compromiso con la innovación y la aplicación práctica de la tecnología define su papel como un líder visionario en este campo dinámico.",
  };

  const persona2 = {
    nombre: "M.I. Edwin Miguel Lara Espinosa",
    puesto: "Ingeniero de Automatización de Sistemas",
    vision: "Tiene la visión de transformar y mejorar procesos operativos mediante la implementación de soluciones tecnológicas avanzadas. Su enfoque se centra en desarrollar y aplicar sistemas automatizados que permitan la ejecución eficiente y precisa de tareas. Busca optimizar la productividad, reducir costos y mejorar la calidad , contribuir al avance de la industria mediante la creación de entornos operativos inteligentes, adaptables y altamente eficientes",
  };

  const persona3 = {
    nombre: "M.I. David Balcazar",
    puesto: "Ingeniero de Control de Calidad de Software",
    vision: "Asegura  la excelencia y confiabilidad de los productos de software. Su enfoque se centra en garantizar que las aplicaciones y sistemas cumplan con los más altos estándares de calidad antes de su lanzamiento. Busca identificar y corregir defectos, mejorar la usabilidad y optimizar el rendimiento para proporcionar a los usuarios una experiencia fluida y libre de errores. Contribuye a la entrega de software robusto y de alta calidad, garantizando la satisfacción del usuario ",
  };

  return (
    <div>
      <h1 className="text-white text-center text-2xl mt-14">CONOCE A NUESTROS FUNDADORES</h1>
      <div className="flex justify-center">
        <div className="flex space-x-40 mt-20">
          {/* Persona 1 */}
          <div className="flex flex-col items-center group">
            <div className="relative">
              <img
                src={Persona1}
                alt="Foto de la persona 1"
                className="w-[16rem] h-[18rem] object-cover outline outline-offset-2 outline-white rounded-lg mb-4 hover:outline-quaternary"
              />
              <div className="hidden group-hover:block absolute top-1/2 left-full transform -translate-y-1/2 p-4 shadow-lg z-10 w-[32rem] h-[24rem] m-3 text-black py-3 px-8 bottom-16 rounded-lg 
              bg-gradient-to-t from-quaternary to-primary text-black bottom-16 mt-2 transform border-2 border-black/50 ">
                <h2 className="text-3xl text-center mb-2"> {persona1.nombre}</h2>
                <h2 className="text-xl mb-2">{persona1.puesto}</h2>
                <p className="text-lg text-justify leading-relaxed indent-8">{persona1.vision}</p>
              </div>
              <h1 className="text-center z-20 text-white relative">ING. LUIS ZENDEJAS</h1>
            </div>
          </div>

          {/* Persona 2 */}
          <div className="flex flex-col items-center group">
            <div className="relative">
              <img
                src={Persona2}
                alt="Foto de la persona 2"
                className="w-[16rem] h-[18rem] object-cover outline outline-offset-2 outline-white rounded-lg mb-4"
              />
              <div className="hidden group-hover:block absolute top-1/2 left-full transform -translate-y-1/2 p-4 shadow-lg z-10 w-[32rem] h-[24rem] m-3 text-black py-3 px-8 bottom-16 rounded-lg 
              bg-gradient-to-t from-quaternary to-primary text-black bottom-16 mt-2 transform border-2 border-black/50 ">
                <h2 className="text-3xl text-center mb-2"> {persona2.nombre}</h2>
                <h2 className="text-xl mb-2">{persona2.puesto}</h2>
                <h2 className="text-lg text-justify leading-relaxed indent-8">{persona2.vision}</h2>
              </div>
              <h1 className="text-center text-white">M.I. EDWIN LARA</h1>
            </div>
          </div>

          {/* Persona 3 */}
          <div className="flex flex-col items-center group">
            <div className="relative">
              <img
                src={Persona3}
                alt="Foto de la persona 3"
                className="w-[16rem] h-[18rem] object-cover outline outline-offset-2 outline-white rounded-lg mb-4"
              />
              <div className="hidden group-hover:block absolute top-1/2 right-full transform -translate-y-1/2 p-4 shadow-lg z-10 w-[32rem] h-[24rem] m-3 text-black py-3 px-8 bottom-16 rounded-lg 
              bg-gradient-to-t from-quaternary to-primary text-black bottom-16 mt-2 transform border-2 border-black/50 ">
                <h2 className="text-3xl text-center mb-2"> {persona3.nombre}</h2>
                <h2 className="text-xl mb-2">{persona3.puesto}</h2>
                <h2 className="text-lg text-justify leading-relaxed indent-8"> {persona3.vision} </h2>
              </div>
              <h1 className="text-center text-white">M.I. DAVID BALCAZAR</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fundadores;
