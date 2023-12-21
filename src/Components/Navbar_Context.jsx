// Navbar.js
import React, { useState, useEffect } from "react";
import Logo from "../img/Logo.png";
import LogoVerde from "../img/LogoVerde.png";

//Logos
import LogoAmarilloNegro from "../img/Logos/AmarilloNegro.png";
import LogoAmarilloBlanco from "../img/Logos/AmarilloBlanco.png";
import LogoVerdeNegro from "../img/Logos/VerdeNegro.png";
import LogoVerdeBlanco from "../img/Logos/VerdeBlanco.png";
import LogoAzulNegro from "../img/Logos/AzulNegro.png";
import LogoAzulBlanco from "../img/Logos/AzulBlanco.png";

import image from "../imgCarrusel/prueba.png";
import { Link } from "react-router-dom";
import { useInsoel } from "../Context/InsoelContext";

// Importa tus imágenes dinámicamente
import image1 from "../imgCarrusel/15.jpg";
import image2 from "../imgCarrusel/16.jpg";
import image3 from "../imgCarrusel/17.jpg";


const Navbar_Context = () => {
  const { logoColor, setLogoColor, txtColor } = useInsoel();
  const [activeInfo, setActiveInfo] = useState(null);
  console.log(txtColor);

  const handleInfoToggle = (info) => {
    setActiveInfo(activeInfo === info ? null : info);
  };

  const handleLogoClick = () => {
    // Restablecer la sección activa al valor predeterminado al hacer clic en el logo
    setActiveInfo("bg-gradient-to-b from-secondary ");
  };

  const imagePaths = [image1, image2, image3];

  const [imagen, setImagen] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Cambia a la siguiente imagen
      setImagen((prevImagen) => (prevImagen + 1) % imagePaths.length);
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <nav
        className={`${
          activeInfo === "proyectos"
            ? "bg-tertiary bg-opacity-75 "
            : activeInfo === ""
            ? ""
            : activeInfo === "" ? "": "bg-opacity-75 bg-gradient-to-b from-secondary bottom-96"
        }  p-4 absolute top-0 left-0 right-0  z-10`}
      >
        <div className="flex items-center justify-between">
          <div className="">
            <Link to={"/web-insol"}  onClick={handleLogoClick}>
              {logoColor === "amarilloNegro" ? (
                <img className="h-16" src={LogoAmarilloNegro} alt="Logo" />
              ) : logoColor === "amarilloBlanco" ? (
                <img className="h-16" src={LogoAmarilloBlanco} alt="Logo" />
              ) : logoColor === "verdeBlanco" ? (
                <img className="h-16" src={LogoVerdeBlanco} alt="Logo" />
              ) : logoColor === "verdeNegro" ? (
                <img className="h-16" src={LogoVerdeNegro} alt="Logo" />
              ) : logoColor === "azulBlanco" ? (
                <img className="h-16" src={LogoAzulBlanco} alt="Logo" />
              ) : logoColor === "azulNegro" ? (
                <img className="h-16" src={LogoAzulNegro} alt="Logo" />
              ) : (
                <img className="h-16" src={LogoAmarilloNegro} alt="Logo" />
              )}
            </Link>
          </div>

          <div className="hidden lg:flex space-x-20 relative mx-auto text-[22px] mr-10">
            <div
              className={`text-${txtColor} cursor-pointer  ${
                activeInfo === "proyectos"
                  ? " p-1 pr-2 pl-2 bg-primary bg-opacity-75 transform border-2 border-black/50 rounded-lg "
                  : ""
              }`}
              onClick={() => handleInfoToggle("proyectos")}
            >
              Proyectos
            </div>
            <div
              className={`text-${txtColor} cursor-pointer ${
                activeInfo === "tecnologias" &&
                "p-1 pr-2 pl-2 bg-primary bg-opacity-75 transform border-2 border-black/50 rounded-lg"
              }`}
              onClick={() => {
                handleInfoToggle("tecnologias");
              }}
            >
              <Link to="/tecnologias">Tecnologias</Link>
            </div>
            <div
              className={`text-${txtColor} cursor-pointer ${
                activeInfo === "nosotros" &&
                "p-1 pr-2 pl-2 bg-primary bg-opacity-75 transform border-2 border-black/50 rounded-lg "
              }`}
              onClick={() => handleInfoToggle("nosotros")}
            >
              <Link to="/nosotros">Nosotros</Link>
            </div>
            <div
              className={`text-${txtColor} cursor-pointer ${
                activeInfo === "clientes" &&
                "p-1 pr-2 pl-2 bg-primary bg-opacity-75 transform border-2 border-black/50 rounded-lg "
              }`}
              onClick={() => handleInfoToggle("clientes")}
            >
              <Link to="/clientes">Clientes</Link>
            </div>
            <div
              className={`text-${txtColor} cursor-pointer  ${
                activeInfo === "contactanos" 
                ? "p-1 pr-2 pl-2 bg-primary bg-opacity-75 transform border-2 border-black/50 rounded-lg"
                : ""
              }`}
              onClick={() => handleInfoToggle("contactanos")}
            >
              <Link to="/contactanos">Contáctanos</Link>
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
                  <Link to={'/proyectos/biorreactor'}>Biorreactor</Link><br /> <br />
                  Banco UAT <br /> <br />
                  Sistema de Consultas <br /> <br />
                  Apk Lectora QR <br /> <br />
                </p>
                <div className="border-r-2 border-yellow-500 h-[20rem]"></div>
                <div className="ml-32 w-1/3">
        {imagePaths.map((path, index) => (
          <div
          key={index}
          className={`relative ${
            index === imagen ? "block" : "hidden"
          }`}
          data-te-carousel-item
          data-te-carousel-active={index === imagen}
        >
            <img src={path} alt={`Slide ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar_Context;
