import React, {useState} from 'react'
import FormUbicacion from '../Components_Panel/FormUbicacion';
import ListMapaUbicacion from '../Components_Panel/ListMapaUbicacion';

function MapaUbicacionPage() {
    const ubicaciones = [
        {
          id: 1,
          nombre: "UNAM",
          direccion:"Col. Loma Linda, San Juan del Rio, QRO, C.P.76820.",
          latitud: "15.654 ",
          longitud:"130.5434234",
        },
        {
            id: 1,
            nombre: "UNAM",
            direccion:"Col. Loma Linda, San Juan del Rio, QRO, C.P.76820.",
            latitud: "15.654 ",
            longitud:"130.5434234",
          },
        
      ];

      const [mostrarFormulario, setMostrarFormulario] = useState(false);

      const handleClickNuevoProyecto = () => {
        setMostrarFormulario(true);
      };
    return (
        <div className="container mx-auto px-4 py-8 h-screen">
      <div className="flex justify-between items-center mb-8">
      {!mostrarFormulario && (
            <h1 className="mt-16 text-3xl font-bold">Mapa Ubicaciones</h1>
          )}
        {mostrarFormulario ? (
            <div className='ml-24'>
                // Mostrar el formulario cuando mostrarFormulario es true
            <FormUbicacion />
            </div>
          ) : (
            // Mostrar el botón "Nuevo Proyecto" cuando mostrarFormulario es false
            <button onClick={handleClickNuevoProyecto} className="mt-16 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Nueva Ubucacion</button>
          )}
      </div>
      {!mostrarFormulario && (
            <div>
              <ListMapaUbicacion ubicaciones={ubicaciones} />
            </div>
          )}
    </div>
      )
}

export default MapaUbicacionPage