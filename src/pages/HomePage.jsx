import Carrusel from "../components/Carrusel";
import Clientes from "../components/Clientes";
import Nosotros from "../components/Nosotros";

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
