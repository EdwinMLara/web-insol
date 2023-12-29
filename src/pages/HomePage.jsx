import Carrusel from "../Components/Carrusel";
import Nosotros from "../Components/Nosotros";
import Formulario from '../Components/Formulario'
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow" id="inicioSeccion" >
        <Carrusel />
      </div>
      
      <div className="flex-grow" id="nosotrosSeccion">
        <Nosotros id="nosotrosSeccion" />
      </div>

      <div className="flex-grow mb-5" id="formularioSeccion">
        <Formulario />
      </div>
      <div>
        <Footer/>
      </div>


    </div>
  );
}

export default HomePage;
