import React from "react";
import Ug from "../imgCarrusel/ug.png";
import TecM from "../imgCarrusel/tec.png";
import Ing from "../imgCarrusel/ingenieria.png";
import Uat from "../imgCarrusel/uat.png";
import Solena from "../imgCarrusel/solena.png";

function Clientes() {
  return (
    <div className="absolute left-0 right-0 bg-secondary ">
      <div className=" font-bold text-3xl">MARCAS QUE CONFÍAN EN NOSOTROS
      <div className="flex flex-wrap justify-center ">
        <div className="flex-none w-1/4 ">
          <img src={Ug} alt="Imagen 1" class="w-[20rem] h-[19rem]" />
        </div>
        <div className="flex-none w-1/4">
          <img src={TecM} alt="Imagen 2" class="w-[20rem] h-[19rem]" />
        </div>
        <div className="flex-none w-1/4">
          <img src={Ing} alt="Imagen 3" class="w-[20rem] h-[19rem]" />
        </div>
        <div className="flex-none w-1/4">
          <img src={Uat} alt="Imagen 4" class="w-[24rem] h-[20rem]" />
        </div>
        <div className="flex-none w-full text-center">
          <img
            src={Solena}
            alt="Imagen 5"
            className="w-[25rem] h-[9rem] inline-block pb-2"
          />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Clientes;
