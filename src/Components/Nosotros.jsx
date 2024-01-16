import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

import NosotrosInformacion from "./NosotrosInformacion";
import Fundadores from "./Fundadores";
import Clientes from "./Clientes";
import Colaboradores from "./Colaboradores";

function Nosotros() {
  // Estado local para realizar un seguimiento de qué sección mostrar
  const [seccionVisible, setSeccionVisible] = useState("fundadores");

  const mostrarOcultarColaboradores = () => {
    // Cambia la sección solo si actualmente es 'fundadores'
    setSeccionVisible((seccionActual) =>
      seccionActual === "fundadores" ? "colaboradores" : "fundadores"
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Section: NosotrosInformacion */}
      <div className="min-h-screen bg-gradient-to-b from-black via-black to-black ">
        <NosotrosInformacion />
      </div>

      {/* Section: Fundadores */}
      <div
        className="min-h-screen bg-gradient-to-b from-black via-black to-quaternary"
        id="nosotrosSeccionFundadores"
      >
        <Fundadores id="nosotrosSeccionFundadores" />
      </div>

      {/* section: Clientes */}
      <div
        className="bg-gradient-to-b from-quaternary  to-secondary"
        id="nosotrosSeccionClientes"
      >
        <Clientes id="nosotrosSeccionClientes" />
      </div>
    </div>
  );
}

export default Nosotros;

/* 
      <div className="bg-gradient-to-b from-quaternary to-quaternary flex justify-end items-center" id="nosotrosSeccionColaboradores">
   Botón para mostrar Colaboradores 
  <button className=" flex m-5 mr-24   rounded-lg" onClick={mostrarOcultarColaboradores}>
  <IoMdArrowDropdown size={28}/>
   <h1 className="text-xl">Colaboradores</h1> 
  </button>
</div>



       Section: Colaboradores 
      <div
        className={`bg-gradient-to-b from-quaternary to-quaternary ${
          seccionVisible === "colaboradores" ? "block" : "hidden"
        }`}
      >
        <Colaboradores id="nosotrosSeccionColaboradores"/>
      </div>
*/
