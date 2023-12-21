import Carrusel from "../Components/Carrusel";
import Clientes from "../Components/Clientes";
import Nosotros from "../Components/Nosotros";

function HomePage() {
  return (
    <>
      <div className="h-screen">
        <Carrusel />
      </div>

      <div className="h-auto">
        <Nosotros/>
      </div>

      <div className="h-auto">
        <Clientes/>
      </div>
    </>
  );
}

export default HomePage;
