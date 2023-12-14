import React, { useState } from "react";
import LogoAmarillo from "../img/LogoAmarillo.png";

import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-primary dark:bg-gray-900 font-custom text-purple">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="" className="flex items-center">
              <img src={LogoAmarillo} className="h-16 " alt="" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contactanos
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
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
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Nosotros
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
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
                  <a href="#" className="hover:underline">
                    Nuestro Equipos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Tecnologias
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
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
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Tutoriales
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
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
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Servicios
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
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
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="#" className="hover:underline">
              INSOEL™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-4">
            <div>
              <BsInstagram className="text-2xl"/>
            </div>
            <div>
              <FaFacebook className="text-2xl"/>
            </div>
            <div>
              <BsLinkedin className="text-2xl"/>
            </div>
            <div>
              <IoLogoYoutube className="text-2xl"/>
            </div>
            <div>
              <BsTwitterX className="text-2xl"/>
            </div>
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
