import React from 'react'

function Proyectos({proyecto}) {
  const MAX_LENGTH = 300; // Número máximo de caracteres que deseas mostrar

// Función para truncar el texto si es demasiado largo
const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  } else {
    return text;
  }
};
    return ( 
        <div className="m-5">
            <div className="bg-opacity-25 bg-gray-900  shadow-xl rounded-md p-4 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div>
  <h2 className="text-2xl font-semibold text-secondary mb-2">{proyecto.titulo}</h2>
<p className="text-black mb-4">{proyecto.fecha}</p>
<p className="text-black mb-4">{proyecto.area}</p>
<p className="text-black mb-4">{truncateText(proyecto.contenido, MAX_LENGTH)}</p>
<p className="italic text-black mb-4">{proyecto.frase}</p>
  </div>
  <div>
  <div className='grid grid-cols-2 gap-4'>
        <img
          src={proyecto.img1}
          alt={proyecto.titulo}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <img
          src={proyecto.img2}
          alt={proyecto.titulo}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <img
          src={proyecto.img3}
          alt={proyecto.titulo}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <img
          src={proyecto.video}
          alt={proyecto.titulo}
          className="w-full h-40 object-cover rounded-md mb-4 border border-gray-300"
        />
        </div>
        
  </div>
</div>
        
        
        {/* Botones de eliminar y editar */}
    <div className="flex justify-end ">
      <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md mr-2">
        Eliminar
      </button>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
        Editar
      </button>
    </div>
      </div>
    </div>
    
      );
}

export default Proyectos