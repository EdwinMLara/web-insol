import React from "react";
import Ug from "../imgCarrusel/ug.png";
import TecM from "../imgCarrusel/tec.png";
import Ing from "../imgCarrusel/ingenieria.png";
import Uat from "../imgCarrusel/uat.png";
import Solena from "../imgCarrusel/solena.png";
import { useInsoel } from "../Context/InsoelContext";

function Clientes() {
  const {setLogoColor} = useInsoel()
  setLogoColor('amarilloBlanco')
  return (
    <div className="min-h-screen bottom-0 bg-gradient-to-b from-white to-quaternary  ">
      <div className=" font-bold text-3xl text-center">MARCAS QUE CONFÍAN EN NOSOTROS
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
