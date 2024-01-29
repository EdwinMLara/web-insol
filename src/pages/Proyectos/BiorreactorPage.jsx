import { useRef,useEffect } from "react";
import { useInsoel } from "../../Context/InsoelContext";
import imgBiorreactor from "../../img/Proyectos/49.png";
import logo from "../../img/Logos/AmarilloNegro.png";
import Footer from "../../Components/Footer";

import Bio from "../../img/Proyectos/Bio_Reactor/000.mp4";

import Img2 from "../../img/Proyectos/Bio_Reactor/02.jpg";
import Img3 from "../../img/Proyectos/Bio_Reactor/03.jpg";
import Img4 from "../../img/Proyectos/Bio_Reactor/04.jpg";
import Img5 from "../../img/Proyectos/Bio_Reactor/05.jpg";
import Img6 from "../../img/Proyectos/Bio_Reactor/06.jpg";
import Img7 from "../../img/Proyectos/Bio_Reactor/07.jpg";

function BiorreactorPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      videoElement.currentTime = 0; // Reinicia el video al principio
      videoElement.play(); // Inicia la reproducción nuevamente
    };

    videoElement.addEventListener('ended', handleVideoEnd);

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, []); // Asegúrate de pasar un array vacío como dependencia para que el efecto se ejecute solo una vez

  const { setLogoColor, setTxtColor,setOpacidadColor } = useInsoel();
  setLogoColor("AmarilloBlanco");
  setTxtColor("black");
  setOpacidadColor('bg-opacity-75 bg-gradient-to-b from-secondary bottom-[29rem]')
  useEffect(() => {
    document.title = "BIORREACTOR | INSOEL";
    return () => {
      document.title = "INSOEL";
    };
  }, []);
  return (
    <>
      <div className="bg-bajo min-h-screen  flex flex-col">
        <div className=""></div>
        <div className="relative  w-full h-auto  md:h-screen">
        <video
      ref={videoRef}
      autoPlay // Inicia la reproducción automáticamente
      //controls
      className="block w-full object-fill max-h-[80%] md:max-h-full rounded-lg shadow-md "
    >
      <source src={Bio} type="video/mp4" />
      Tu navegador no soporta el elemento de video.
    </video>
          
        </div>
        <div className="text-black m-5">
          <h2 className="text-2xl">14 Diciembre, 2023</h2>
          <h1 className="text-4xl font-semibold">
            Integración de Soluciones en Automatización y Control
          </h1>
          <br />
          <div className="md:columns-2 text-justify">
            <div className="grap md:grap-2">
              <p>
                Estamos comprometidos en brindar soluciones integrales y
                eficientes a nuestros clientes, debido a que nuestro lema
                implica aplicar lo último en innovación, eficiencia y
                viabilidad. <br />
                Llevamos a cabo una colaboración con la UNAM - Querétaro, el
                Tecnológico de Monterrey y la empresa SOLENA para realizar una
                integración de un panel de control con el objetivo de
                implementar un sistema de automatización. El biorreactor tienen
                la finalidad generador de Hidrógeno como fuente de energía
                alterna. En este proyecto multidisciplinario se contó con la
                aportación del desarrollo tecnológico de las instituciones
                educativas de la UNAM y el Tec de Monterrey. <br/>
                La empresa SOLENA
                nos brindó acceso a sus instalaciones y proporcionó la
                infraestructura necesaria para llevar a cabo este proyecto que
                se encuentra en funcionamiento hasta la fecha. INSOEL formó
                parte de este proyecto fungiendo como vínculo entre los centros
                de investigación y la industria llevando a cabo la
                implementación trasladando del prototipo a la realidad.
              </p>
            </div>
            <div className="grap p-5">
    <div className="flex flex-wrap">
      <img src={Img2} className="w-[16rem] h-[16rem] rounded-md shadow-lg m-4" />
      <img src={Img3} className="w-[16rem] h-[16rem] rounded-md shadow-lg m-4" />
      <img src={Img6} className="w-[16rem] h-[16rem] rounded-md shadow-lg m-4" />
      <img src={Img7} className="w-[16rem] h-[16rem] rounded-md shadow-lg m-4" />
      <img src={Img4} className="w-[16rem] h-[20rem] rounded-md shadow-lg m-4" />
      <img src={Img5} className="w-[16rem] h-[20rem] rounded-md shadow-lg m-4" />
    </div>
  </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default BiorreactorPage;
