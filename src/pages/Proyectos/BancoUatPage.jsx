import React from 'react'
import { useEffect } from "react";
import { useInsoel } from "../../Context/InsoelContext";
import imgBancoUAT from "../../img/Proyectos/49.png";
import logo from "../../img/Logos/AmarilloNegro.png";
import Footer from "../../Components/Footer";

import Img2 from "../../img/Proyectos/Banco_Uat/01.jpg";
import Img3 from "../../img/Proyectos/Banco_Uat/02.jpg";
import Img4 from "../../img/Proyectos/Banco_Uat/12.jpg";
import Img5 from "../../img/Proyectos/Banco_Uat/14.jpeg";
import Img6 from "../../img/Proyectos/Banco_Uat/05.jpg";
import Img7 from "../../img/Proyectos/Banco_Uat/06.jpg";
import Img8 from "../../img/Proyectos/Banco_Uat/08.jpg";
import Img9 from "../../img/Proyectos/Banco_Uat/07.jpg";
import Img10 from "../../img/Proyectos/Banco_Uat/04.jpg";
import Img11 from "../../img/Proyectos/Banco_Uat/03.jpg";
import Img12 from "../../img/Proyectos/Banco_Uat/13.jpg";
import Img13 from "../../img/Proyectos/Banco_Uat/11.jpg";
import Img14 from "../../img/Proyectos/Banco_Uat/10.jpg";
import Img15 from "../../img/Proyectos/Banco_Uat/09.jpg";

const images = [
  { src: Img9, description: "Descripción de la imagen 1" },
  { src: Img7, description: "Descripción de la imagen 2" },
  { src: Img6, description: "Descripción de la imagen 3" },
];


function BancoUatPage() {
  const { setLogoColor, setTxtColor,setOpacidadColor } = useInsoel();
  setLogoColor("amarilloBlanco");
  setTxtColor("black");
  setOpacidadColor('bg-secondary')
  useEffect(() => {
    document.title = "BANCO UAT | INSOEL";
    return () => {
      document.title = "INSOEL";
    };
  }, []);


  
  return (
    <>
      <div className="bg-bajo min-h-screen  flex flex-col">
        <div className=""></div>
        <div className='bg-gray-200 '><div class="grid grid-cols-3 ">
    
    <div class="relative">
      <img src={Img8} alt="Imagen 1" class="w-[32rem] h-[32rem] rounded"/>
      <div class="absolute top-0 left-0  bg-black text-white"></div>
    </div>

   
    <div class="relative">
      <img src={Img2} alt="Imagen 2" class="w-[32rem] h-[32rem] rounded"/>
      <div class="absolute top-0 left-0  bg-black text-white"></div>
    </div>

   
    <div class="relative">
      <img src={Img12} alt="Imagen 3" class="w-[32rem] h-[32rem] rounded"/>
      <div class="absolute top-0 left-0  bg-black text-white"></div>
    </div>

    

  </div></div>
  <div className="text-black m-3 bg-light p-6 rounded-md shadow-md space-y-4">
          <h1 className="text-4xl font-semibold text-accent">
            Dinamómetro
          </h1>
          <h2 className="text-xl text-secondary">14 Diciembre, 2023</h2>
          <div className="text-justify ">
            <p>
            La Unidad de Alta Tecnología (UAT) de la Universidad Nacional Autónoma de México (UNAM) emprendió la creación de una herramienta dedicada a la investigación en motores de combustión, con el objetivo de fomentar el desarrollo de nuevas tecnologías y la exploración de diversos combustibles.
            El equipo llevó a cabo la construcción de un dinamómetro, incorporando un motor de motocicleta y un freno hidráulico para realizar pruebas exhaustivas.
            </p>
            <div className="highlight-box mt-4">
              <p>
              INSOEL desempeñó un papel crucial en el proyecto al diseñar y fabricar elementos clave, incluyendo:
      <ul className='indent-8 list-inside'>
        <li className='list-disc'>Instrumentación de sensores</li>
        <li className='list-disc'>Adquisición y almacenamiento de datos</li>
        <li className='list-disc'>Interfaz gráfica para el monitoreo del dinamómetro</li>
        <li className='list-disc'>Mandos de control para las pruebas del dinamómetro</li>
        <li className='list-disc'>Organización y etiquetado del arnés de motor y otros elementos</li>
      </ul> <br/>
      Lo más destacado de la colaboración de INSOEL fue el compromiso total con la UAT, participando activamente en cada fase de las pruebas del dinamómetro. Contribuimos con nuestro conocimiento y estuvimos involucrados en el ensamblaje de componentes hidráulicos y mecánicos. Además, participamos en cada prueba del dinamómetro, ajustando la instrumentación y agregando información relevante a la interfaz. <br />
              </p>
            </div>
            <div className="highlight-box mt-4">
              <p>
              Es relevante destacar que el proyecto se sometió a evaluación para obtener una patente, ya que tanto la construcción del dinamómetro como su instrumentación presentaron innovaciones significativas. Por esta razón, los elementos específicos no se detallan en esta descripción.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image.src}
                  alt={`Imagen ${index + 1}`}
                  className=" object-cover rounded-md transition-transform transform hover:scale-105"
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
              "Desarrollo tecnológico en acción: INSOEL impulsando la innovación en motores de combustión junto a la Unidad de Alta Tecnología (UAT) de la Universidad Nacional Autónoma de México (UNAM)."
            </p>
          </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default BancoUatPage