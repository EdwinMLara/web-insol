import React from "react";
import { useEffect } from "react";
import { useInsoel } from "../../Context/InsoelContext";
import Footer from "../../Components/Footer";

import Img from "../../img/Proyectos/TI/01.png";
import Img1 from "../../img/Proyectos/TI/02.png";
import Img2 from "../../img/Proyectos/TI/03.png";
import Img3 from "../../img/Proyectos/TI/04.png";
import Img4 from "../../img/Proyectos/TI/05.png";
import Img5 from "../../img/Proyectos/TI/06.png";
import Img6 from "../../img/Proyectos/TI/07.png";
import Img7 from "../../img/Proyectos/TI/08.png";

function SistemaDeConsultasPage() {
  const { setLogoColor, setTxtColor } = useInsoel();
  setLogoColor("amarilloBlanco");
  setTxtColor("black");
  useEffect(() => {
    document.title = "BIORREACTOR | INSOEL";
    return () => {
      document.title = "INSOEL";
    };
  }, []);

  

  return (
    <>
      <div className="bg-bajo min-h-screen  flex flex-col">
        <div className="mb-20"></div>
        <div className="bg-gray-200 ">
          <div class="grid grid-cols-3 ">
            <div class="relative">
              <img
                src={Img}
                alt="Imagen 1"
                class="w-[32rem] h-[32rem] rounded"
              />
              <div class="absolute top-0 left-0  bg-black text-white"></div>
            </div>

            <div class="relative">
              <img
                src={Img1}
                alt="Imagen 3"
                class="w-[32rem] h-[32rem] rounded"
              />
              <div class="absolute top-0 left-0  bg-black text-white"></div>
            </div>

            <div class="relative">
              <img
                src={Img3}
                alt="Imagen 3"
                class="w-[32rem] h-[32rem] rounded"
              />
              <div class="absolute top-0 left-0  bg-black text-white"></div>
            </div>
          </div>
        </div>
        <div className="text-black m-5">
          <h2 className="text-2xl">14 Diciembre, 2023</h2>
          <h1 className="text-4xl font-semibold">yyyyyyyyyyyyyyyyyyyyyyy</h1>
          <br />
          <div className="md:columns-2 text-justify">
            <div className="grap md:grap-2">
              <div className="rounded-lg bg-white p-3  text-justify">
                <p>
                  En Insoel ofrecemos el desarrollo de sistemas de información,
                  lo cual permite a los usuarios optimizar y mejorar sus
                  procesos de administración y comunicación, ya sea con sus
                  clientes o compañeros de equipo. Hemos realizado
                  colaboraciones con medicos; implementado un sistema de
                  administración de paciente y consultas, Comerciantes;
                  realizando un punto de venta que le permite monitorear las
                  entradas y salidas de activos en cada uno de sus
                  establecimientos, y se ha colaborado con distintos municipios
                  implementando aplicaciones móviles y web que les permite
                  optimizar su operación.
                </p>
              </div>
            </div>
            <div className="grap p-5">
              <div className="flex flex-wrap">
                <img
                  src={Img2}
                  className="w-[16rem] h-[16rem] rounded-md shadow-lg m-4"
                />
                <img
                  src={Img4}
                  className="w-[16rem] h-[16rem] rounded-md shadow-lg m-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col sm:flex-row space-x-24">
        <img
          src={Img5}
          className="w-[20rem] h-[22rem] rounded-md shadow-lg ml-24 mb-2 sm:mb-0 "
        />
        <img src={Img6} className="w-[20rem] h-[22rem] rounded-md shadow-lg mb-2 sm:mb-0" />
        <img src={Img7} className="w-[20rem] h-[22rem] rounded-md shadow-lg mb-2 sm:mb-0" />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default SistemaDeConsultasPage;
