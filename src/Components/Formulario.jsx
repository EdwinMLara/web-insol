import React from "react";
import LogoAmarilloBlanco from "../img/LogoAmarilloBlanco.png";

function Formulario() {
  return (
    <div className="bg-black h-screen">
      <div className="flex bg-gradient-to-r from-blue-500 via-blue-950 to-black absolute left-0 right-0 mt-10">
        <div className="w-1/2 p-8 ">
          <h1 className="text-4xl font-bold mb-4 text-white text-left pt-32">
            AUTOMATIZACIÓN <br />
            REDEFINIDA <br />
            <h2 className="pl-24 text-3xl">Contáctanos.</h2>
          </h1>
        </div>
        <div className="w-1/2 p-5 ">
          <form className="pr-28">
            <div className="mb-4 border-b border-white py-2 ">
              <input
                className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                id="nombre"
                type="text"
                placeholder="Nombre y Apellido"
              />{" "}
            </div>
            <div className="mb-4 border-b border-white py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                id="empresa"
                type="text"
                placeholder="Empresa"
              />
            </div>
            <div className="mb-4 border-b border-white py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                id="correo"
                type="text"
                placeholder="Correo"
              />
            </div>
            <div className="mb-4 border-b border-white py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                id="telefono"
                type="text"
                placeholder="Teléfono"
              />
            </div>
            <div className="mb-4 border-b border-white py-2 relative ">
              <select className=" appearance-none w-full bg-transparent  mr-3 py-1 px-2 rounded leading-tight focus:outline-none focus:shadow-outline text-white text-opacity-50">
                <option disabled selected value="Servicio">
                  Servicios
                </option>
                <option className="bg-blue-500 text-white">Option 2</option>
                <option className="bg-blue-500 text-white">Option 3</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="mb-4 border-b border-white py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                id="descripcion"
                type="text"
                placeholder="Descripción del Proyecto"
              />
            </div>
            <button
              className="bg-black text-white rounded-full py-2 px-4 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Contacta a
              <img
                src={LogoAmarilloBlanco}
                className="inline-block h-6 w-20 mr-2 pl-2"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
