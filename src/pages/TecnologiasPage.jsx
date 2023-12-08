import React, { useEffect } from "react";
import ProgramacionPLC from "../img/Tecnologias/39.png";
import LOT from "../img/Tecnologias/46.png";
import imgReact from "../img/Tecnologias/41.png";
import Navbar_BlancoAmarrillo from "../components/Navbar_BlancoAmarillo";
import { useInsoel } from "../Context/InsoelContext";

function TecnologiasPage() {
  const {setLogoColor} = useInsoel();
  setLogoColor('azulBlanco')
  useEffect(() => {
    document.title = "Tecnologías | INSOEL";
    return () => {
      document.title = "INSOEL";
    };
  }, []);
  return (
    <div className="bg-black h-screen flex flex-col">
      <div className="mb-20">
      </div>
      <div className="flex-1 flex items-center justify-around text-white text-5xl font-bold ">
        <div
          className="card bg-cover w-[30%] h-[90%]"
          style={{ backgroundImage: `url(${ProgramacionPLC})` }}
        >
          <h1 className="p-3">Programación PLC</h1>
        </div>
        <div
          className="card bg-cover w-[30%] h-[90%]"
          style={{ backgroundImage: `url(${LOT})` }}
        >
          <h2 className="p-3">LOT</h2>
        </div>
        <div
          className="card bg-cover w-[30%] h-[90%]"
          style={{ backgroundImage: `url(${imgReact})` }}
        >
          <h1 className="p-3">React JS</h1>
        </div>
      </div>
    </div>
  );
}

export default TecnologiasPage;
