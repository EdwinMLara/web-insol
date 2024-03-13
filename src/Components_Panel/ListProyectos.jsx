import React from 'react'
import Proyectos from './Proyectos'

function ListProyectos({proyectos}) {
    return (
        <div>
          {" "}
          <div className="">
            {proyectos.map((proyecto) => (
              <Proyectos key={proyecto.id} proyecto={proyecto} />
            ))}
          </div> 
        </div>
      );
}

export default ListProyectos