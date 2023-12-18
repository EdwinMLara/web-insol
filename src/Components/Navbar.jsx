// Navbar.js
import React, { useState } from "react";
import Logo from "../img/Logo.png";
import LogoVerde from "../img/LogoVerde.png";
import image from "../imgCarrusel/prueba.png";
import Formulario from "./Formulario";

import Nosotros from "./Nosotros";
import Clientes from "./Clientes";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeInfo, setActiveInfo] = useState(null);
  const [navbarTextColor, setNavbarTextColor] = useState("text-black");

  const handleInfoToggle = (info) => {
    setActiveInfo(activeInfo === info ? null : info);
    setNavbarTextColor(info === "contactanos" || info === "nosotros" ? "text-white" : "text-black");
  };

  return (
    <div>
      <nav
        className={`bg-${
          activeInfo === "proyectos"
            ? "white"
            : activeInfo === "clientes"
            ? "white" 
            : activeInfo === "contactanos" || activeInfo === "nosotros"
            ? "black" 
            : "transparent"
        } ${activeInfo === "contactanos" || activeInfo === "nosotros" ? "text-white" : "text-black"} ${
          activeInfo === "contactanos" || activeInfo === "nosotros" || activeInfo ==="clientes" ? "bottom-0 " : activeInfo === "proyectos" ?"bg-opacity-80": "bg-opacity-100"
        } ${activeInfo === "clientes"  ? "text-black" : "text-black"}
         p-4 absolute top-0 left-0 right-0 z-10`}
      >
        <div className="flex items-center justify-between ">
          <div>
            {/*<img className="h-8" src={Logo} alt="Logo" /> */}
            <img className="h-16" src={LogoVerde} alt="Logo" />
          </div>

          <div className="hidden lg:flex space-x-14 relative mx-auto pr-44 text-xl">
            <div
              className={` cursor-pointer  ${
                activeInfo === "proyectos"
                  ? " font-bold pl-5 pr-5 pt-2 pb-2 border-dashed bg-gray-200 border-4 border-gray-300 rounded-lg "
                  : ""
              }`}
              onClick={() => handleInfoToggle("proyectos")}
            >
              Proyectos
            </div>
            <div
              className={` cursor-pointer  ${
                activeInfo === "contactanos"
                  ? "text-white font-bold pl-5 pr-5 pt-2 pb-2 bg-yellow-700 rounded-lg "
                  : ""
              }`}
              onClick={() => handleInfoToggle("contactanos")}
            >
              Contactanos
            </div>
            <div
              className={` cursor-pointer ${
                activeInfo === "tecnologias" && "font-bold"
              }`}
              onClick={() => handleInfoToggle("tecnologias")}
            >
              <Link to="/tecnologias">Tecnologias</Link>
              
            </div>
            <div
              className={` cursor-pointer ${
                activeInfo === "clientes" 
                ? "text-black font-bold pl-5 pr-5 pt-2 pb-2 bg-yellow-600 rounded-lg "
                : ""
              }`}
              onClick={() => handleInfoToggle("clientes")}
            >
              Clientes
            </div>
            <div
              className={` cursor-pointer ${
                activeInfo === "nosotros" 
                ? "text-white font-bold pl-5 pr-5 pt-2 pb-2 bg-yellow-700 rounded-lg "
                : ""
              }`}
              onClick={() => handleInfoToggle("nosotros")}
            >
              Nosotros
            </div>
          </div>
        </div>

        {activeInfo && (
          <div
            className={`bg-${
              activeInfo === "proyectos" ? "transparent" : "transparent"
            } bg-opacity-75 p-4 mt-2 w-full text-center text-black`}
          >
            {activeInfo === "proyectos" && (
              <div className="flex items-center">
                <p className="text-right text-2xl mr-5 w-1/3">
                  Biorreactor <br /> <br />
                  Banco UAT <br /> <br />
                  Sistema de Consultas <br /> <br />
                  Apk Lectora QR <br /> <br />
                </p>
                <div className="border-r-2 border-yellow-500 h-[20rem]"></div>
                <img
                  src={image}
                  alt="Descripción de la imagen"
                  className="ml-32 w-1/3"
                />
              </div>
            )}

            {activeInfo === "contactanos" && (
              <div>
                <Formulario />
              </div>
            )}
            {activeInfo === "" && (
              <div>
                <p>Más información sobre Hola.</p>
                <a href="/enlace-hola">Enlace Hola</a>
              </div>
            )}
            {activeInfo === "clientes" && (
              <div>
                <Clientes />
              </div>
            )}
            {activeInfo === "nosotros" && (
              <div>
                <Nosotros />
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
