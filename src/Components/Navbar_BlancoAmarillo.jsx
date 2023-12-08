// Navbar.js
import React, { useState } from "react";
import Logo from "../img/Logo.png";
import LogoAmarillo from "../img/Logos/AmarilloBlanco.png";
import image from "../imgCarrusel/prueba.jpg";
import { Link } from "react-router-dom";

const Navbar_BlancoAmarrillo = () => {
  const [activeInfo, setActiveInfo] = useState(null);

  const handleInfoToggle = (info) => {
    setActiveInfo(activeInfo === info ? null : info);
  };
  return (
    <div>
      <nav
        className={`bg-${
          activeInfo === "proyectos" || activeInfo === "contactanos"  ? "white" : "transparent"
        } bg-opacity-75 p-4 absolute top-0 left-0 right-0 z-10`}
      >
        <div className="flex items-center justify-between">
          <div>
            {/*<img className="h-8" src={Logo} alt="Logo" /> */}
            <Link to={'/'}>
            <img className="h-16" src={LogoAmarillo} alt="Logo" />
            </Link>
          </div>

          <div className="hidden lg:flex space-x-4 relative mx-auto text-2xl ">
            <div
              className={`text-white cursor-pointer  ${
                activeInfo === "proyectos"
                  ? " font-bold p-2 border-dashed border-2 bg-gray-400 border-gray-600 rounded-lg "
                  : ""
              }`}
              onClick={() => handleInfoToggle("proyectos")}
            >
              Proyectos
            </div>
            <div
              className={`text-white cursor-pointer  ${
                activeInfo === "contactanos"
                  ? " font-bold p-2 border-dashed border-2 bg-gray-400 border-gray-600 rounded-lg "
                  : ""
              }`}
              onClick={() => handleInfoToggle("contactanos")}
            >
              Contactanos
            </div>
            <div
              className={`text-white cursor-pointer ${
                activeInfo === "tecnologias" && " p-2 bg-yellow-500 rounded-lg opacity-60"
              }`}
              onClick={() => handleInfoToggle("tecnologias")}
            >
              <Link to="/tecnologias">Tecnologias</Link>
              
            </div>
            <div
              className={`text-white cursor-pointer ${
                activeInfo === "clintes" && "font-bold"
              }`}
              onClick={() => handleInfoToggle("clientes")}
            >
              Clientes
            </div>
            <div
              className={`text-white cursor-pointer ${
                activeInfo === "nosotros" && "font-bold"
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
              activeInfo === "proyectos" || activeInfo === "contactanos" ? "transparent" : "transparent"
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
              <div className="flex items-center">
                <p className="font-serif text-right text-2xl mr-5 w-1/3">
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
            {activeInfo === "" && (
              <div>
                <p>Más información sobre Hola.</p>
                <a href="/enlace-hola">Enlace Hola</a>
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar_BlancoAmarrillo;
