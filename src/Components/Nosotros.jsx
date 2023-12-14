import React from "react";
import Persona from "../imgCarrusel/persona.jpg";
import NosotrosInformacion from "./NosotrosInformacion";
const persona = {
  nombre: "",
  puesto: "",
  vision: "",
};

function Nosotros() {
  return (
    <div className="absolute left-0 right-0 bg-black h-screen ">
      <div className="w-5/5 pt-[2rem] pb-[9rem] ">
        <NosotrosInformacion />
      </div>
      <div className=" flex absolute left-0 right-0 bg-black pb-14">
        <div className="w-2/5 p-8 ">
          {/* Foto de la persona */}
          <img
            src={Persona}
            alt="Foto de la persona"
            className=" w-[25rem] h-[27rem]"
          />
        </div>
        <div className="w-4/5 text-left text-white pt-16">
          {/* Información de la persona */}
          <h2 className="text-3xl font-bold mb-4">Nombre: {persona.nombre}</h2>
          <h2 className="text-3xl font-bold mb-4">Puesto: {persona.puesto}</h2>
          <h2 className="text-3xl font-bold mb-4">
            {" "}
            Vision de su trabajo: {persona.vision}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
