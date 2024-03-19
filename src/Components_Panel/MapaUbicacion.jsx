import React from "react";



function MapaUbicacion({ ubicacion }) {
  
  return (
    <div className="m-5">
      <div className="bg-opacity-25 bg-gray-900 shadow-xl rounded-md p-4 relative">

        {/* Tabla de ubicaciones */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="text-lg font-semibold text-secondary px-4 py-2">
                  Nombre
                </th>
                <th className="text-lg font-semibold text-secondary px-4 py-2">
                  Direccion
                </th>
                <th className="text-lg font-semibold text-secondary px-4 py-2">
                  Latitud
                </th>
                <th className="text-lg font-semibold text-secondary px-4 py-2">
                  Longitud
                </th>
                <th className="text-lg font-semibold text-secondary px-4 py-2">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="text-lg font-semibold text-black px-4 py-2">
                {ubicacion.nombre}
                </td>
                <td className="text-lg font-semibold text-black px-4 py-2">
                {ubicacion.direccion}
                </td>
                <td className="text-lg font-semibold text-black px-4 py-2">
                {ubicacion.latitud}
                </td>
                <td className="text-lg font-semibold text-black px-4 py-2 ">
                {ubicacion.longitud}
                </td>
                <td className="flex justify-center">
                  {/* Botones de eliminar y editar */}
                  <div className="flex justify-end ">
                    <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md mr-2">
                      Eliminar
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                      Editar
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> 
      
    </div>
  );
}

export default MapaUbicacion;
