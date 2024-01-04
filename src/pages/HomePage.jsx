import Carrusel from "../Components/Carrusel";
import Nosotros from "../Components/Nosotros";
import Formulario from "../Components/Formulario";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Map from "../Components/Map";
import MapaPage from "./MapaPage";

function HomePage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow" id="inicioSeccion">
        <Carrusel />
      </div>
      <div className="flex-grow bg-gradient-to-b from-white via-tertiary to-white">
        <h1 className="text-2xl justify-center text-center mt-5">
          Mapa de proyectos en el país
        </h1>
        <p className="justify-normal m-10">
          Te damos la bienvenida a nuestra sección de "Proyectos en el país",
          donde te invitamos a descubrir las diversas ubicaciones dentro de
          nuestro país donde hemos dejado nuestra marca. Cada región, cada
          ciudad es un testimonio de nuestro compromiso con la excelencia y la
          innovación en el ámbito nacional.
        </p>
        <div className="mb-5">
          <Map />
        </div>
      </div>

      <div className="flex-grow" id="nosotrosSeccion">
        <Nosotros id="nosotrosSeccion" />
      </div>

      <div className="flex-grow mb-5" id="formularioSeccion">
        <Formulario />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
