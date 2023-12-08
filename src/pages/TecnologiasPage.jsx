

function TecnologiasPage() {
  return (
    <div className="bg-black h-screen flex items-center justify-around">
      <div
        className="card"
        style={{ backgroundImage: 'url("/img/plcs.jpg")' }}
      >
        {/* Contenido de la primera tarjeta */}
      </div>
      <div
        className="card"
        style={{ backgroundImage: 'url("/img/img1.jpg")' }}
      >
        {/* Contenido de la segunda tarjeta */}
      </div>
      <div
        className="card"
        style={{ backgroundImage: 'url("ruta/de/imagen3.jpg")' }}
      >
        {/* Contenido de la tercera tarjeta */}
      </div>
    </div>
  );
}

export default TecnologiasPage;
