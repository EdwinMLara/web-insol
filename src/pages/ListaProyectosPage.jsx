import React, { useEffect } from 'react'
import { useInsoel } from '../Context/InsoelContext'

function ListaProyectosPage() {
    const {obtenerProyectos, proyectos} = useInsoel()
    useEffect(()=>{
        obtenerProyectos()
    },[])

    //console.log(proyectos)
    if (proyectos.length === 0) return (<h1>No Hay Productos</h1>)
  return (
    <div>
      <h2>Proyectos</h2>
      {proyectos.map((proyecto) => (
        console.log(proyecto.imagen.datosImagen),
        <div key={proyecto._id}>
          <h3>{proyecto.titulo}</h3>
          <p>{proyecto.contenido}</p>
          {/* Mostrar la imagen */}
          {proyecto.imagen && (
            
            <img
              src={`data:image/png;base64,${proyecto.imagen.datosImagen.toString('base64')}`}
              alt={proyecto.titulo}
            />
          )}
          
        </div>
      ))}
    </div>
  )
}

export default ListaProyectosPage