import { useRef, useEffect } from "react";
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

const images = [
  { src: Img5, description: "Descripción de la imagen 1" },
  { src: Img6, description: "Descripción de la imagen 2" },
  { src: Img7, description: "Descripción de la imagen 3" },
];

function BiorreactorPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      videoElement.currentTime = 0; // Reinicia el video al principio
      videoElement.play(); // Inicia la reproducción nuevamente
    };

    videoElement.addEventListener("ended", handleVideoEnd);

    return () => {
      videoElement.removeEventListener("ended", handleVideoEnd);
    };
  }, []); // Asegúrate de pasar un array vacío como dependencia para que el efecto se ejecute solo una vez

  const { setLogoColor, setTxtColor, setOpacidadColor } = useInsoel();
  setLogoColor("AmarilloBlanco");
  setTxtColor("black");
  setOpacidadColor(
    "bg-opacity-75 bg-gradient-to-b from-secondary bottom-[29rem]"
  );
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
        <div className="text-black m-5 bg-light p-6 rounded-md shadow-md">
          <h2 className="text-2xl text-primary">14 Diciembre, 2023</h2>
          <h1 className="text-4xl font-semibold text-accent">
            Integración de Soluciones en Automatización y Control
          </h1>
          <br />
          <div className="text-justify mb-5">
            <p>
              Estamos comprometidos en brindar soluciones integrales y
              eficientes a nuestros clientes, debido a que nuestro lema implica
              aplicar lo último en innovación, eficiencia y viabilidad
            </p>
            <div className="highlight-box mt-4">
              <p>
                Llevamos a cabo una colaboración con la UNAM - Querétaro, el
                Tecnológico de Monterrey y la empresa SOLENA para realizar una
                integración de un panel de control con el objetivo de
                implementar un sistema de automatización. El biorreactor tienen
                la finalidad generador de Hidrógeno como fuente de energía
                alterna. En este proyecto multidisciplinario se contó con la
                aportación del desarrollo tecnológico de las instituciones
                educativas de la UNAM y el Tec de Monterrey. <br />
              </p>
            </div>
            <div className="highlight-box mt-4">
              <p>
                La empresa SOLENA nos brindó acceso a sus instalaciones y
                proporcionó la infraestructura necesaria para llevar a cabo este
                proyecto que se encuentra en funcionamiento hasta la fecha.
                INSOEL formó parte de este proyecto fungiendo como vínculo entre
                los centros de investigación y la industria llevando a cabo la
                implementación trasladando del prototipo a la realidad.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image.src}
                  alt={`Imagen ${index + 1}`}
                  className="w-[35rem] h-[25rem] object-cover rounded-md transition-transform transform hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-lg font-semibold">
                    Descripción de la imagen {index + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-section mt-8">
            <p className="text-lg italic text-gray-600">
              "El trabajo conjunto con INSOEL ha sido fundamental para lograr
              nuestros objetivos de automatización."
            </p>
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
