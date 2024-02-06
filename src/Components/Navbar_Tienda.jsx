import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useInsoel } from "../Context/InsoelContext";

import LogoAmarilloNegro from "../img/Logos/AmarilloNegro.png";
import LogoAmarilloBlanco from "../img/Logos/AmarilloBlanco.png";
import LogoAmarilloBlancoNosotros from "../img/Logos/AmarilloBlanco.png";
import LogoVerdeNegro from "../img/Logos/VerdeNegro.png";
import LogoVerdeBlanco from "../img/Logos/VerdeBlanco.png";
import LogoAzulNegro from "../img/Logos/AzulNegro.png";
import LogoAzulBlanco from "../img/Logos/AzulBlanco.png";

function Navbar_Tienda() {
  const { logoColor } = useInsoel();
  const { proyectColor, opacidadColor } = useInsoel();
  const [activeInfo, setActiveInfo] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isContentActive, setIsContentActive] = useState(false);

  const handleInfoToggle = (info) => {
    setActiveInfo(activeInfo === info ? null : info);
    if (activeInfo === info) {
      setIsContentActive(!isContentActive); // Cambia el estado al hacer clic nuevamente en la misma sección
    } else {
      setActiveInfo(info);
      setIsContentActive(true); // Activa el contenido al hacer clic en una nueva sección
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setMostrarContenido(false);
  };

  const handleLogoClick = () => {
    // Restablecer la sección activa al valor predeterminado al hacer clic en el logo
    setActiveInfo("bg-gradient-to-b from-secondary ");
  };

  return (
    <div>
      <nav
        className={`${
          activeInfo === "proyectos" && isContentActive
            ? proyectColor
            : activeInfo === ""
            ? ""
            : opacidadColor
        } p-4 absolute top-0 left-0 right-0  z-10 `}
        //onMouseLeave={handleMouseLeave}
        onMouseLeave={
          activeInfo === "proyectos" && isContentActive
            ? handleMouseLeave
            : null
        }
      >
        {/* logos */}
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
                    : logoColor === "amarilloBlanco" &&
                      proyectColor &&
                      opacidadColor
                    ? LogoAmarilloBlanco
                    : logoColor === "verdeBlanco" && opacidadColor
                    ? LogoVerdeBlanco
                    : logoColor === "verdeNegro"
                    ? LogoVerdeNegro
                    : logoColor === "azulBlanco"
                    ? LogoAzulBlanco
                    : logoColor === "azulNegro"
                    ? LogoAzulNegro
                    : logoColor === "amarilloBlancoNosotros" &&
                      proyectColor &&
                      opacidadColor
                    ? LogoAmarilloBlancoNosotros
                    : LogoAmarilloBlanco
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

          {/*Navavar */}
          <div className="hidden lg:flex space-x-5 relative mx-auto text-[22px] mr-10">
            <div
              className={`text-${
                activeInfo === "contactanos" ? "black" : "white"
              } cursor-pointer  ${
                activeInfo === "contactanos"
                  ? "p-1 pr-2 pl-2 bg-darkPrimary transform border-2 border-black/50 rounded-lg"
                  : "hover:text-black hover:bg-primary p-1 pr-2 pl-2 rounded-lg"
              }`}
              onClick={() => handleInfoToggle("contactanos")}
            >
              <Link
                to="/web-insol/contactanos"
                style={
                  {
                    //color: activeInfo === "contactanos" ? "black" : txtColor,
                    // Ajusta según sea necesario
                  }
                }
              >
                Contactarnos
              </Link>
            </div>
          </div>
        </div>

        {/*menu de pantallas pequeñas */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-black bg-opacity-50 fixed inset-0 z-50"
              onClick={toggleMenu}
            >
              <div className="container mx-auto flex justify-end items-center py-16 ">
                <div className="bg-bajo p-4 ">
                  <div className="container mx-auto flex items-center h-auto ">
                    {/* Menú Principal */}
                    <div className="bg-white p-4 rounded-md shadow-md ">
                      <ul className="text-xl">
                        <li className="hover:bg-primary rounded p-2">
                          <Link to={"/web-insol/"}>Inicio</Link>
                        </li>
                        <br />
                        <li className="hover:bg-primary rounded p-2">
                          <Link to={"/web-insol/contactanos"}>
                            Contactarnos
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </div>
  );
}

export default Navbar_Tienda;
