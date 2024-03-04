import React, { useState } from "react";
import LogoAmarillo from "../img/LogoAmarillo.png";

import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdPhoneAndroid } from "react-icons/md";

function Footer() {
  const redirigirAFacebbok = () => {
    window.location.href =
      "https://www.facebook.com/profile.php?id=100093302174230&mibextid=2JQ9oc";
  };
  const redirigirAX = () => {
    window.location.href =
      "https://x.com/InsoelMX?t=-CCkUolb6QJtigBT8ODxlw&s=09";
  };
  const redirigirALinkdin = () => {
    window.location.href =
      "https://www.linkedin.com/company/insoel-mexico?trk=blended-typeahead";
  };
  const redirigirALinkYoutube = () => {
    window.location.href =
      "https://www.youtube.com/@INSOELMexico";
  };
  
  return (
    <footer className=" bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between ">
          <div className="mb-6 md:mb-0">
            <a href="" className="flex items-center">
              <img src={LogoAmarillo} className="h-16 " alt="" />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3 mb-14">
            <div className="ml-24">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                Contáctanos
              </h2>
              <ul className="text-gray-700  font-medium">
                <li className="mb-4">
                  <div className="flex mb-3">
                    <FaRegBuilding size={18} />
                    <p className="pl-2">
                      Adolfo Ruiz Cortines #34,
                      <br />
                      Uriangato Gto.
                    </p>
                  </div>
                  <div className="flex mb-4">
                    <MdOutlineMailOutline size={20} />
                    <p className="pl-2"> insoel.ventas@gmail.com </p>
                  </div>
                  <div className="flex">
                    <MdPhoneAndroid size={22} />
                    <p className="pl-2"> 442 331 39 11 </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="ml-24">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                Nosotros
              </h2>
              <ul className="text-gray-700  font-medium">
                <li className="mb-4">
                  <a
                    href="#nosotrosSeccion"
                    className="hover:underline decoration-primary decoration-double"
                  >
                    Sobre INSOEL
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#nosotrosSeccionFundadores"
                    className="hover:underline decoration-primary decoration-double"
                  >
                    Fundadores
                  </a>
                </li>
                <li>
                  <a
                    href="#nosotrosSeccionClientes"
                    className="hover:underline decoration-primary decoration-double"
                  >
                    Clientes
                  </a>
                </li>
              </ul>
            </div>
            <div className="ml-24 sm:ml-0">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                Servicios
              </h2>
              <ul className="text-gray-700 font-medium">
                <li className="mb-4">
                  <a className="">Sistemas de Control PLC</a>
                </li>
                <li className="mb-4">
                  <a className="">Instrumentación</a>
                </li>
                <li className="mb-4">
                  <a className="">Desarrollo Web y Movil</a>
                </li>
                <li className="mb-4">
                  <a className="">Servicios Iot</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-left text-black  dark:text-gray-400">
            © 2023{" "}
            <a href="#" className="hover:underline">
              INSOEL™
            </a>
            . All Rights Reserved. <br/>
            Created by M.I Edwin Miguel, Jesus Salazar and Diana Melina.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-4">
            <button onClick={redirigirAFacebbok} className="hover:bg-primary hover:border-black border border-gray-100 p-1">
              <FaFacebook className="text-2xl " />
            </button>
            <button className="hover:bg-primary hover:border-black border border-gray-100 p-1" 
            onClick={redirigirALinkdin}>
              <BsLinkedin className="text-2xl" />
            </button>
            <button className="hover:bg-primary hover:border-black border border-gray-100 p-1"
            onClick={redirigirALinkYoutube}>
              <IoLogoYoutube className="text-2xl" />
            </button>
            <button className="hover:bg-primary hover:border-black border border-gray-100 p-1" 
            onClick={redirigirAX}>
              <BsTwitterX className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
