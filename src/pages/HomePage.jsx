import Carrusel from "../Components/Carrusel";
import Nosotros from "../Components/Nosotros";
import Clientes from "../Components/Clientes";
import Formulario from '../Components/Formulario'

function HomePage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow">
        <Carrusel />
      </div>

      <div className="flex-grow">
        <Formulario />
      </div>

      <div className="flex-grow">
        <Clientes/>
      </div>

    </div>
  );
}

export default HomePage;
