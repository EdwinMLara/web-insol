import React from "react";
import Ug from "../imgCarrusel/ug.png";
import TecM from "../imgCarrusel/tec.png";
import Ing from "../imgCarrusel/ingenieria.png";
import Uat from "../imgCarrusel/uat.png";
import Solena from "../imgCarrusel/solena.png";
import { useInsoel } from "../Context/InsoelContext";

function Clientes() {
  const { setLogoColor } = useInsoel();
  setLogoColor('amarilloNegro');

  return (
    <div className="absolute left-0 right-0 bg-white">
      <div className="font-bold text-3xl text-center py-5">
        MARCAS QUE CONFÍAN EN NOSOTROS
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="flex-none w-1/4">
          <img src={Ug} alt="Imagen 1" className="w-[20rem] h-[19rem]" />
        </div>
        <div className="flex-none w-1/4">
          <img src={TecM} alt="Imagen 2" className="w-[20rem] h-[19rem]" />
        </div>
        <div className="flex-none w-1/4">
          <img src={Ing} alt="Imagen 3" className="w-[20rem] h-[19rem]" />
        </div>
        <div className="flex-none w-1/4">
          <img src={Uat} alt="Imagen 4" className="w-[24rem] h-[20rem]" />
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
  );
}

export default Clientes;
