import React from 'react'
import MapaUbicacion from './MapaUbicacion'

function ListMapaUbicacion({ubicaciones}) {
    return (
        <div>
          {" "}
          <div className="">
            {ubicaciones.map((ubicacion) => (
              <MapaUbicacion key={ubicacion.id} ubicacion={ubicacion} />
            ))}
          </div> 
        </div>
  )
}

export default ListMapaUbicacion