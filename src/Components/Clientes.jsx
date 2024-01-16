import React, {useEffect} from "react";
import { useInsoel } from "../Context/InsoelContext"; 

import Ug from "../img/Clientes/ug.png";
import TecM from "../img/Clientes/tec.png";
import Ing from "../img/Clientes/ingenieria.png";
import Uat from "../img/Clientes/uat.png";
import Solena from "../img/Clientes/solena.png";


function Clientes() {
  const { setLogoColor } = useInsoel();
  
  useEffect(() => {
    // Este efecto se ejecutará después del montaje inicial
    setLogoColor("amarilloBlanco");

    // Si necesitas realizar alguna limpieza al desmontar el componente, puedes devolver una función
    return () => {
      // Código de limpieza, si es necesario
    };
  }, []); // El segundo argumento, un array vacío, significa que el efecto solo se ejecutará al montar y desmontar


  return (
    <div className=" mt-24 mb-10">
      <div className=" font-bold text-3xl text-center p-5">
        MARCAS QUE CONFÍAN EN NOSOTROS
        <div className="flex flex-wrap brightness-50 lur-none justify-center text-center pt-20 pb-5 md:pr-[10rem] md:pl-[10rem]">
          <div className="md:flex-none w-1/5 ">
            <img src={Ug} alt="Imagen 1" className="w-[7rem] h-[7rem]" />
          </div>
          <div className="flex-none w-1/5">
            <img src={TecM} alt="Imagen 2" className="w-[7rem] h-[7rem]" />
          </div>
          <div className="flex-none w-1/5">
            <img src={Ing} alt="Imagen 3" className="w-[7rem] h-[7rem]" />
          </div>
          <div className="flex-none w-1/5">
            <img src={Uat} alt="Imagen 4" className="w-[7rem] h-[7rem]" />
          </div>
          <div className="flex-none w-1/5">
            <img src={Solena} alt="Imagen 5" className="w-[24rem] h-[7rem]" />
          </div>
         
         
          </div>
        </div>
      </div>
  );
}

export default Clientes;