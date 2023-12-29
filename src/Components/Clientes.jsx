import React from "react";
import Ug from "../imgCarrusel/ug.png";
import TecM from "../imgCarrusel/tec.png";
import Ing from "../imgCarrusel/ingenieria.png";
import Uat from "../imgCarrusel/uat.png";
import Solena from "../imgCarrusel/solena.png";
import { useInsoel } from "../Context/InsoelContext";

function Clientes() {
  const { setLogoColor } = useInsoel();
  setLogoColor("amarilloBlanco");
  return (
    <div className=" ">
      <div className=" font-bold text-3xl text-center p-5 ">
        MARCAS QUE CONFÍAN EN NOSOTROS
        <div className="flex flex-wrap justify-center text-center pt-10 pb-10 md:pr-[10rem] md:pl-[10rem]">
          <div className="md:flex-none w-1/5 ">
            <img src={Ug} alt="Imagen 1" className="w-[5rem] h-[5rem]" />
          </div>
          <div >
            <img src={TecM} alt="Imagen 2" className="w-[5rem] h-[5rem]" />
          </div>
          <div >
            <img src={Ing} alt="Imagen 3" className="w-[5rem] h-[5rem]" />
          </div>
          <div >
            <img src={Uat} alt="Imagen 4" className="w-[5rem] h-[5rem]" />
          </div>
          <div >
            <img src={Solena} alt="Imagen 5" className="w-[24rem] h-[4rem]" />
          </div>
         
         
          </div>
        </div>
      </div>
  );
}

export default Clientes;
