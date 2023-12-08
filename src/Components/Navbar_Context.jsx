// Navbar.js
import React, { useState } from "react";
import Logo from "../img/Logo.png";
import LogoVerde from "../img/LogoVerde.png";

//Logos
import LogoAmarilloNegro from "../img/Logos/AmarilloNegro.png";
import LogoAmarilloBlanco from "../img/Logos/AmarilloBlanco.png";
import LogoVerdeNegro from "../img/Logos/VerdeNegro.png";
import LogoVerdeBlanco from "../img/Logos/VerdeBlanco.png";
import LogoAzulNegro from "../img/Logos/AzulNegro.png";
import LogoAzulBlanco from "../img/Logos/AzulBlanco.png";

import image from "../imgCarrusel/prueba.jpg";
import { Link } from "react-router-dom";
import { useInsoel } from "../Context/InsoelContext";

const Navbar_Context = () => {
  const { logoColor, setLogoColor } = useInsoel();
  const [activeInfo, setActiveInfo] = useState(null);

  const handleInfoToggle = (info) => {
    setActiveInfo(activeInfo === info ? null : info);
  };
  return (
    <div>
      <nav
        className={`bg-${
          activeInfo === "proyectos" || activeInfo === "contactanos"
            ? "white"
            : "transparent"
        } bg-opacity-75 p-4 absolute top-0 left-0 right-0 z-10`}
      >
        <div className="flex items-center justify-between">
          <div>
            {/*<img className="h-8" src={Logo} alt="Logo" /> */}
            {logoColor === "amarilloNegro" ? (
              <img className="h-16" src={LogoAmarilloNegro} alt="Logo" />
            ) : logoColor === "verdeBlanco" ? (
              <img className="h-16" src={LogoVerdeBlanco} alt="Logo" />
            ) : logoColor === "azulBlanco"?(
              <img className="h-16" src={LogoAzulBlanco} alt="Logo" />
            ): null}
          </div>

          <div className="hidden lg:flex space-x-4 relative mx-auto text-2xl">
            <div
              className={`text-white cursor-pointer  ${
                activeInfo === "proyectos"
                  ? " p-2 border-dashed border-2 bg-gray-400 border-gray-600 rounded-lg "
                  : ""
              }`}
              onClick={() => handleInfoToggle("proyectos")}
            >
              Proyectos
            </div>
            <div
              className={`text-white cursor-pointer  ${
                activeInfo === "contactanos"
                  ? " p-2 border-dashed border-2 bg-gray-400 border-gray-600 rounded-lg "
                  : ""
              }`}
              onClick={() => handleInfoToggle("contactanos")}
            >
              Contactanos
            </div>
            <div
              className={`text-white cursor-pointer ${
                activeInfo === "tecnologias" && "p-2 bg-yellow-500 rounded-lg opacity-60"
              }`}
              onClick={() => {handleInfoToggle("tecnologias")}}
            >
              <Link to="/tecnologias">Tecnologias</Link>
            </div>
            <div
              className={`text-white cursor-pointer ${
                activeInfo === "clintes" && "p-2 bg-yellow-500 rounded-lg opacity-60"
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
              activeInfo === "proyectos" || activeInfo === "contactanos"
                ? "transparent"
                : "transparent"
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

export default Navbar_Context;
