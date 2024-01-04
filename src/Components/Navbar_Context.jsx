import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useInsoel } from "../Context/InsoelContext";

import LogoAmarilloNegro from "../img/Logos/AmarilloNegro.png";
import LogoAmarilloBlanco from "../img/Logos/AmarilloBlanco.png";
import LogoVerdeNegro from "../img/Logos/VerdeNegro.png";
import LogoVerdeBlanco from "../img/Logos/VerdeBlanco.png";
import LogoAzulNegro from "../img/Logos/AzulNegro.png";
import LogoAzulBlanco from "../img/Logos/AzulBlanco.png";

import image from "../imgCarrusel/prueba.png";

// Importa tus imágenes dinámicamente
import image1 from "../imgCarrusel/15.jpg";
import image2 from "../imgCarrusel/22.jpg";
import image3 from "../imgCarrusel/16.jpg";
import image4 from "../imgCarrusel/17.jpg";

const Navbar_Context = () => {
  const { logoColor, setLogoColor, txtColor } = useInsoel();
  const [activeInfo, setActiveInfo] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleInfoToggle = (info) => {
    setActiveInfo(activeInfo === info ? null : info);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    // Restablecer la sección activa al valor predeterminado al hacer clic en el logo
    setActiveInfo("bg-gradient-to-b from-secondary ");
  };

  const imagePaths = [
    image1, 
    image2, 
    image3, 
    image4,
  ];

  const enlaces = [
    "/proyectos/biorreactor",
    "/proyectos/BancoUAT",
    "/proyectos/Consultas",
    "/proyectos/ApkLectora",
  ];

  const descripciones = [
    "Un biorreactor es un dispositivo diseñado para facilitar y controlar las condiciones óptimas para el crecimiento y actividad de organismos vivos, como células, bacterias o levaduras, en un entorno controlado.",
    "Descripción de Banco UAT",
    "Descripción de Consultas",
    "Descripción de Apk Lectora Qr",
  ];

  const [imagen, setImagen] = useState(0);

  const handleClick = (index) => {
    setImagen(index);
    setSelectedItem(index);
  };

  return (
    <div>
      <nav
        className={`${
          activeInfo === "proyectos"
            ? "bg-tertiary bg-opacity-75 "
            : activeInfo === ""
            ? ""
            : activeInfo === ""
            ? ""
            : "bg-opacity-75 bg-gradient-to-b from-secondary bottom-96"
        }  p-4 absolute top-0 left-0 right-0  z-10`}
      >
        <div className="flex items-center justify-between">
          <div className="bg-transparent ">
            <Link to={"/web-insol/"} onClick={handleLogoClick}>
              <motion.img
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="h-16"
                src={
                  logoColor === "amarilloNegro"
                    ? LogoAmarilloNegro
                    : logoColor === "amarilloBlanco"
                    ? LogoAmarilloBlanco
                    : logoColor === "verdeBlanco"
                    ? LogoVerdeBlanco
                    : logoColor === "verdeNegro"
                    ? LogoVerdeNegro
                    : logoColor === "azulBlanco"
                    ? LogoAzulBlanco
                    : logoColor === "azulNegro"
                    ? LogoAzulNegro
                    : LogoAmarilloNegro
                }
                alt="Logo"
              />
            </Link>
          </div>

          {/*Navavar con Framer-motion */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-16 6h16"
                ></path>
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex space-x-5 relative mx-auto text-[22px] mr-10">
            <div
              className={`text-${
                activeInfo === "proyectos" ? "black" : "white"
              } cursor-pointer  ${
                activeInfo === "proyectos"
                  ? "p-1 pr-2 pl-2 bg-primary bg-opacity-75 transform border-2 border-black/50 rounded-lg "
                  : ""
              }`}
              onClick={() => handleInfoToggle("proyectos")}
            >
              ¿Qué hacemos?
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
              <Link
                to="/web-insol/tecnologias"
                style={{
                  color: activeInfo === "tecnologias" ? "black" : txtColor,
                  // Ajusta según sea necesario
                }}
              >
                
              </Link>
            </div>
            <div
              className={`text-${txtColor} cursor-pointer ${
                activeInfo === "nosotros" &&
                "p-1 pr-2 pl-2 bg-primary bg-opacity-75 transform border-2 border-black/50 rounded-lg "
              }`}
              onClick={() => handleInfoToggle("nosotros")}
            >
              <Link
                to="/web-insol/nosotros"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{
                  color: activeInfo === "nosotros" ? "black" : txtColor,
                  // Ajusta según sea necesario
                }}
              >
                ¿Quiénes Somos?
              </Link>
            </div>
            <div
              className={`text-${txtColor} cursor-pointer ${
                activeInfo === "clientes" &&
                "p-1 pr-2 pl-2 bg-primary bg-opacity-75 transform border-2 border-black/50 rounded-lg "
              }`}
              onClick={() => handleInfoToggle("clientes")}
            >
              <Link
                to="/web-insol/tienda"
                style={{
                  color: activeInfo === "clientes" ? "black" : txtColor,
                  // Ajusta según sea necesario
                }}
              >
                
              </Link>
            </div>
            <div
              className={`text-${txtColor} cursor-pointer  ${
                activeInfo === "contactanos"
                  ? "p-1 pr-2 pl-2 bg-primary bg-opacity-75 transform border-2 border-black/50 rounded-lg"
                  : ""
              }`}
              onClick={() => handleInfoToggle("contactanos")}
            >
              <Link
                to="/web-insol/contactanos"
                style={{
                  color: activeInfo === "contactanos" ? "black" : txtColor,
                  // Ajusta según sea necesario
                }}
              >
                Contactarnos
              </Link>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-black bg-opacity-50 fixed inset-0 z-50"
              onClick={toggleMenu}
            >
              <div className="container mx-auto flex justify-end items-center py-16">
                <div className="bg-bajo p-4 ">
                  {/* ... Resto del código ... */}
                  <div className="container mx-auto flex items-center h-auto">
                    <div className="bg-white p-4 ">
                      <ul className="text-xl">
                        <li className="hover:bg-primary rounded">
                          <br />
                          <Link to={"/web-insol/web-insol/"}>Inicio</Link>
                        </li>
                        <br />
                        <li className="hover:bg-primary rounded">
                          <Link to={"/web-insol/tecnologias"}>Tecnologías</Link>
                        </li>
                        <br />
                        <li className="hover:bg-primary rounded">
                          <Link to={"/web-insol/nosotros"}>Nosotros</Link>
                        </li>
                        <br />
                        <li className="hover:bg-primary rounded">
                          <Link to={"/web-insol/tienda"}>Tienda</Link>
                        </li>
                        <br />
                        <li className="hover:bg-primary rounded">
                          <Link to={"/web-insol/contactanos"}>Contáctanos</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {activeInfo && (
          <div
            className={`bg-${
              activeInfo === "proyectos" ? "transparent" : "transparent"
            } bg-opacity-75 p-4 mt-2 w-full text-center text-black`}
          >
            {activeInfo === "proyectos" && (
              <div className="flex items-center ">
                <div className="text-right text-2xl mr-5 w-1/3">
                <p
        className={`cursor-pointer ${selectedItem === 0 ? 'underline decoration-wavy decoration-primary' : ''}`}
        onClick={() => handleClick(0)}
      >
                    Desarrollo Tecnológico <br />
                    <br />
                  </p>
                  <p
        className={`cursor-pointer ${selectedItem === 1 ? 'underline decoration-wavy decoration-primary' : ''}`}
        onClick={() => handleClick(1)}
      >
                    Soluciones de Integración <br />
                    <br />
                  </p>
                  <p
        className={`cursor-pointer ${selectedItem === 2 ? 'underline decoration-wavy decoration-primary' : ''}`}
        onClick={() => handleClick(2)}
      >
                    DevOPs e Infraestructura TI <br />
                    <br />
                  </p>
                  <p
        className={`cursor-pointer ${selectedItem === 3 ? 'underline decoration-wavy decoration-primary' : ''}`}
        onClick={() => handleClick(3)}
      >
                    Adquisición de Equipos y Herramientas
                  </p>
                </div>

                <div className="border-r-2 border-yellow-500 h-[20rem]"></div>
                <div className="ml-24 w-2/3">
                  <div className="flex">
                    {imagePaths.map((path, index) => (
                      <div
                        key={index}
                        className={`relative flex ${
                          index === imagen ? "block" : "hidden"
                        }`}
                        data-te-carousel-item
                        data-te-carousel-active={index === imagen}
                      >
                        <img
                          src={path}
                          alt={`Slide ${index + 1}`}
                          className="w-[26rem]"
                        />
                        <div className="flex flex-col items-start mt-2 ml-2">
                          <p className="text-lg text-white text-justify p-3">
                            {descripciones[index]}
                          </p>
                          <Link to={enlaces[index]}>
                            <button className="absolute bottom-0 right-0 p-1 pr-2 pl-2 bg-primary bg-opacity-75 transform border-2 border-black/50 rounded-lg ">
                              Ver más
                            </button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};
{
  /* <Link to={"/proyectos/biorreactor"}>Biorreactor</Link> */
}
export default Navbar_Context;
