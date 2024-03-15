import React from 'react'

function FormUbicacion() {
  return (
    <div className='flex '>
      <div className=" ">
      <div className="text-left mt-20 mb-5 ml-32">
            <h1 className="font-bold text-2xl text-secondary">Nueva Ubicacion al Mapa </h1>
          </div>
      <div className="mx-32 my-14 w-full">
        
        <form>
          <div className="mb-4">
            <label for="Nombre" className="block text-lg sm:text-base md:text-lg lg:text-xl font-semibold">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Nombre de la Ubucacion"
            />
          </div>   
          <div className="mb-4">
            <label for="direccion" className="block text-lg sm:text-base md:text-lg lg:text-xl font-semibold ">
              Direccion
            </label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Direccion del Lugar"
            />
          </div> 
          <div class="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label for="latitud" className="block text-lg font-semibold ">
                Latitud
              </label>
              <input
                type="text"
                id="latitud"
                name="latitud"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label for="longitud" className="block text-lg font-semibold ">
                Longitud
              </label>
              <input
                type="text"
                id="longitud"
                name="longitud"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </div>
          <div className="mb-12">
            <button
              type="submit"
              className="bg-primary text-black py-2 px-4 rounded-md hover:bg-darkPrimary hover:text-white absolute  right-72 mr-3"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default FormUbicacion