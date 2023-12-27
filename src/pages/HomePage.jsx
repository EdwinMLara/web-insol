import Carrusel from "../Components/Carrusel";
import Nosotros from "../Components/Nosotros";
import Clientes from "../Components/Clientes";
import Formulario from '../Components/Formulario'
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow">
        <Carrusel />
      </div>
      
      <div className="flex-grow">
        <Nosotros />
      </div>

      <div className="flex-grow mb-5">
        <Formulario />
      </div>
      <div>
        <Footer/>
      </div>


    </div>
  );
}

export default HomePage;
