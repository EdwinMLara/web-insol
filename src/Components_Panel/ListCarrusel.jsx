import React from 'react'
import Carrusel from './Carrusel'

function ListCarrusel({carruseles}) {
    return (
        <div>
          {" "}
          <div className="grid gap-4 grid-cols-2">
            {carruseles.map((carrusel) => (
              <Carrusel key={carrusel.id} carrusel={carrusel} />
            ))}
          </div> 
        </div>
  )
}

export default ListCarrusel