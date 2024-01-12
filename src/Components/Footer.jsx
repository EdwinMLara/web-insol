import React, { useState } from "react";
import LogoAmarillo from "../img/LogoAmarillo.png";

import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  const redirigirAFacebbok = () => {
    window.location.href = 'https://www.facebook.com/profile.php?id=100093302174230&mibextid=2JQ9oc';
  };
  const redirigirAX = () => {
    window.location.href = 'https://x.com/InsoelMX?t=-CCkUolb6QJtigBT8ODxlw&s=09';
  };
  const redirigirALinkdin = () => {
    window.location.href = 'https://www.linkedin.com/company/insoel-mexico?trk=blended-typeahead';
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
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 mb-14">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                Contactanos
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <p>
                    {" "}
                    Adolfo Ruiz Cortines #34, Uriangato Gto. <br />
                    insoel.ventas@gmail.com <br />
                    445 111 222 452
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                Nosotros
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Sobre INSOEL
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Fundadores
                  </a>
                </li>
                <li>
                  <a href="nosotrosSeccion" className="hover:underline">
                    Nuestro Equipos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                Tecnologias
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Programacion PLC
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    React Native
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    React Js
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    LOT
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                Tutoriales
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    TypeScript
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    C++
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Arduino
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    PLC
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                Servicios
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Sistemas de Control PLC
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Instrumentación
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Desarrollo Web
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Desarrollo Movil
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-black sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="#" className="hover:underline">
              INSOEL™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-4">
            <button className="hover:bg-primary">
              <BsInstagram className="text-2xl"/>
            </button>
            <button onClick={redirigirAFacebbok} className="hover:bg-primary">
              <FaFacebook className="text-2xl" />
            </button>
            <button className="hover:bg-primary" onClick={redirigirALinkdin}>
              <BsLinkedin className="text-2xl"/>
            </button>
            <button className="hover:bg-primary">
              <IoLogoYoutube className="text-2xl"/>
            </button>
            <button className="hover:bg-primary" onClick={redirigirAX}>
              <BsTwitterX className="text-2xl"/>
            </button>
            <div>
              <FaTiktok className="text-2xl"/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
