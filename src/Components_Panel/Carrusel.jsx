import React from 'react'

function Carrusel({carrusel}) {
    return ( 
        <div className="m-5 ">
            <div className="bg-opacity-25 bg-gray-900 shadow-xl rounded-md p-4 relative">
              
            <div className="">
            <h2 className="text-2xl text-center font-semibold text-secondary mb-4">{carrusel.titulo}</h2>
            
            
  <div className="grid gap-4 grid-cols-4 ">
    <img
      src={carrusel.img1}
      alt={carrusel.titulo}
      className="w-full h-36 object-cover rounded-md border border-gray-300"
    />
    <img
      src={carrusel.img2}
      alt={carrusel.titulo}
      className="w-full h-36 object-cover rounded-md border border-gray-300"
    />
    <img
      src={carrusel.img3}
      alt={carrusel.titulo}
      className="w-full h-36 object-cover rounded-md border border-gray-300"
    />
    <img
      src={carrusel.img4}
      alt={carrusel.titulo}
      className="w-full h-36 object-cover rounded-md border border-gray-300"
    />
  </div>
</div>
        
        
        {/* Botones de eliminar y editar */}
    <div className="flex justify-end mt-5">
      <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-md mr-2">
        Eliminar
      </button>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-md">
        Editar
      </button>
    </div>
      </div>
    </div>
    
      );
}

export default Carrusel