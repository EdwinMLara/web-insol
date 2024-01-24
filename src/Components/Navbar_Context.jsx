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

// Importa tus imágenes dinámicamente para seccion de ¿que hacemos?
import image1 from "../img/Proyectos/Banco_Uat/09.jpg";
import image2 from "../img/Proyectos/Bio_Reactor/06.jpg";
import image3 from "../img/Proyectos/TI/login.png";
import image4 from "../img/Proyectos/Banco_Uat/01.jpg";

const Navbar_Context = () => {
  const { logoColor, setLogoColor, txtColor } = useInsoel();
  const {proyectColor, opacidadColor} = useInsoel(); 
  const [activeInfo, setActiveInfo] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isContentActive, setIsContentActive] = useState(false);
  

  const handleInfoToggle = (info) => {
    //setActiveInfo(activeInfo === info ? null : info);
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

  const toggleContenido = (e) => {
    e.stopPropagation(); // Evita que el clic se propague al contenedor principal
    setMostrarContenido(!mostrarContenido);
  };

  const handleLogoClick = () => {
    // Restablecer la sección activa al valor predeterminado al hacer clic en el logo
    setActiveInfo("bg-gradient-to-b from-secondary ");
  };

  const imagePaths = [image1, image2, image3, image4];

  const enlaces = [
    "/proyectos/BancoUAT",
    "/proyectos/Biorreactor",
    "/proyectos/Consultas",
    "/proyectos/ApkLectora",
  ];

  const descripciones = [
    "INSOEL colaboró con la Unidad de Alta Tecnología (UAT) UNAM en la creación de un dinamómetro para investigación en motores de combustión. Destacaron por su compromiso, participación en pruebas y aportes en instrumentación e interfaz gráfica. El proyecto, sujeto a evaluación para obtener una patente...",

    "La UNAM-Querétaro y el Tecnológico de Monterrey, en colaboración con SOLENA, desarrollaron un panel de control para automatizar un biorreactor, generando hidrógeno como fuente de energía. INSOEL facilitó la transición del prototipo a la implementación exitosa...",

    "En Insoel, especializados en desarrollo de sistemas, mejoramos la administración y comunicación para médicos, comerciantes y municipios mediante sistemas eficientes, como gestión médica y punto de venta...",

    "Descripción de Apk Lectora Qr",
  ];
  

  const [imagen, setImagen] = useState(0);

  const handleClick = (index) => {
    setImagen(index);
    setSelectedItem(index);
    setIsHovered(!isHovered); // Invertir el estado al hacer clic
  };


  const handleMouseLeave = () => {
    if (activeInfo === "proyectos" && isContentActive){
      setActiveInfo('bg-gradient-to-b from-secondary bottom-96');
      setIsContentActive(false); // Desactiva el contenido al salir del recuadro
    }
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
        onMouseLeave={activeInfo === "proyectos" && isContentActive ? handleMouseLeave : null}
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
                    : logoColor === "amarilloBlanco" && proyectColor && opacidadColor
                    ? LogoAmarilloBlanco
                    : logoColor === "verdeBlanco"
                    ? LogoVerdeBlanco
                    : logoColor === "verdeNegro"
                    ? LogoVerdeNegro
                    : logoColor === "azulBlanco"
                    ? LogoAzulBlanco
                    : logoColor === "azulNegro"
                    ? LogoAzulNegro
                    : logoColor === "amarilloBlancoNosotros" && proyectColor && opacidadColor
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
                activeInfo === "proyectos" ? "black" : "white"
              } cursor-pointer  ${
                activeInfo === "proyectos"
                  ? "p-1 pr-2 pl-2 bg-primary bg-opacity-75 transform border-2 border-black/50 rounded-lg "
                  : "hover:text-black hover:bg-primary p-1 pr-2 pl-2 rounded-lg"

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
              ></Link>
            </div>
            <div
              className={`text-${
                activeInfo === "nosotros" ? "black" : "white"
              } cursor-pointer  ${
                activeInfo === "nosotros" 
                ? "p-1 pr-2 pl-2 bg-primary bg-opacity-75 transform border-2 border-black/50 rounded-lg "
                : " hover:text-black hover:bg-primary p-1 pr-2 pl-2 rounded-lg"
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
                  //color: activeInfo === "nosotros" ? "black" : txtColor,
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
              ></Link>
            </div>
            <div
              className={`text-${
                activeInfo === "contactanos" ? "black" : "white"
              } cursor-pointer  ${
                activeInfo === "contactanos"
                  ? "p-1 pr-2 pl-2 bg-primary bg-opacity-75 transform border-2 border-black/50 rounded-lg"
                  : "hover:text-black hover:bg-primary p-1 pr-2 pl-2 rounded-lg"
              }`}
              onClick={() => handleInfoToggle("contactanos")}
            >
              <Link
                to="/web-insol/contactanos"
                style={{
                  //color: activeInfo === "contactanos" ? "black" : txtColor,
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
                <div className="bg-bajo p-4">
                  <div className="container mx-auto flex items-center h-auto">
                    {/* Menú Principal */}
                    <div className="bg-white p-4 rounded-md shadow-md">
                      <ul className="text-xl">
                        <li className="hover:bg-primary rounded p-2">
                          <Link to={"/web-insol/web-insol/"}>Inicio</Link>
                        </li>
                        <br />
                        <li
                          className={`hover:bg-primary rounded p-2 ${
                            mostrarContenido ? "bg-primary" : ""
                          }`}
                          onClick={toggleContenido}
                        >
                          <a className="cursor-pointer">¿Qué hacemos?</a>
                        </li>
                        <br />
                        <li className="hover:bg-primary rounded p-2">
                          <Link to={"/web-insol/nosotros"}>
                            ¿Quiénes Somos?
                          </Link>
                        </li>
                        <br />
                        <li className="hover:bg-primary rounded"> 
                          <Link to={"/web-insol/tienda"}></Link>
                        </li>
                        <li className="hover:bg-primary rounded p-2">
                          <Link to={"/web-insol/contactanos"}>
                            Contactarnos
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Menú de "¿Qué hacemos?" */}
                    {mostrarContenido && (
                      <aside className="bg-white p-4 absolute left-0 border-2 border-primary rounded-md shadow-md w-52 mt-52">
                        <ul className="text-xl pl-2  ">
                          <li className="space-y-2 list-disc pt-2 pb-2">
                            <Link
                              to="/proyectos/BancoUAT"
                              className="block text-black hover:bg-primary rounded p-2"
                            >
                              Desarrollo Tecnológico
                            </Link>
                            </li>
                            <li className="space-y-2 list-disc pt-2 pb-2">
                            <Link
                              to="/proyectos/Biorreactor"
                              className="block text-black hover:bg-primary rounded p-2"
                            >
                              Soluciones de Integración
                            </Link>
                            </li>
                            <li className="space-y-2 list-disc pt-2 pb-2">
                            <Link
                              to="/proyectos/Consultas"
                              className="block text-black hover:bg-primary rounded p-2"
                            >
                              DepOPs e Infraestructura TI
                            </Link>
                            </li>
                            <li className="space-y-2 list-disc pt-2 pb-2">
                            <Link
                              to="/proyectos/ApkLectora"
                              className="block text-black hover:bg-primary rounded p-2"
                            >
                              Adquisición de Equipos y Herramientas
                            </Link>
                          </li>
                        </ul>
                      </aside>
                    )}
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
            
          onMouseLeave={handleMouseLeave}
          >
            {activeInfo === "proyectos" && isContentActive && (
              <div className="flex items-center ">
                <div className="text-right text-2xl mr-5 w-1/3 ">
                  <p
                  
                    className={`cursor-pointer ${
                      selectedItem === 0
                        ? "bg-primary p-1 pr-2 pl-2 rounded-lg"
                        : "hover:bg-primary p-1 pr-2 pl-2 rounded-lg"
                    }`}
                    onClick={() => handleClick(0)}
                    //onClick={() => handleInfoToggle("proyectos")}
                  >
                    Desarrollo Tecnológico 
                    <br />
                  </p><br/>
                  <p
                    className={`cursor-pointer ${
                      selectedItem === 1
                        ? "bg-primary p-1 pr-2 pl-2  rounded-lg"
                        : "hover:bg-primary p-1 pr-2 pl-2 rounded-lg"
                    }`}
                    onClick={() => handleClick(1)}
                  >
                    Soluciones de Integración 
                    <br />
                  </p><br />
                  <p
                    className={`cursor-pointer ${
                      selectedItem === 2
                        ? "bg-primary p-1 pr-2 pl-2  rounded-lg"
                        : "hover:bg-primary p-1 pr-2 pl-2 rounded-lg"
                    }`}
                    onClick={() => handleClick(2)}
                  >
                    DevOPs e Infraestructura TI 
                    <br />
                  </p><br />
                  <p
                    className={`cursor-pointer ${
                      selectedItem === 3
                        ? "bg-primary p-1 pr-2 pl-2  rounded-lg "
                        : "hover:bg-primary p-1 pr-2 pl-2 rounded-lg"
                    }`}
                    onClick={() => handleClick(3)}
                  >
                    Adquisición de Equipos y Herramientas
                  </p>
                </div>

                <div className="border-r-2 border-yellow-500 h-[20rem]"></div>
                <div className="ml-12 w-2/3">
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
                          <p className="text-lg text-black text-justify p-3">
                            {descripciones[index]}
                          </p>
                          <Link to={enlaces[index]}>
                            <button
                              className="absolute bottom-0 right-0 p-1 pr-2 pl-2 bg-primary bg-opacity-75 transform border-2 border-black/50 bg-gradient-to-r hover:from-secondary hover:to-tertiary rounded-lg "
                              onClick={() => handleInfoToggle("proyectos")}
                            >
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
