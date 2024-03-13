import React from 'react'

function FormUbicacion() {
  return (
    <div className='flex justify-center items-center h-screen '>
      <div className=" border-2 border-primary relative">
      <div className="bg-gradient-to-b from-secondary to-tertiary p-8 rounded shadow-md w-[56rem] ">
        <div className="text-center">
          <h1 className="font-bold text-2xl text-white">Agregar Ubicaion al Mapa </h1>
        </div>
        <form>
          <div className="mb-4">
            <label for="Nombre" className="block text-sm sm:text-base md:text-lg lg:text-xl font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Nombre de la Ubucaion"
            />
          </div>   
          <div class="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label for="latitud" className="block text-sm font-medium ">
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
              <label for="longitud" className="block text-sm font-medium ">
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
              className="bg-primary text-black py-2 px-4 rounded-md hover:bg-darkPrimary hover:text-white absolute bottom-0 right-0 mb-7 mr-8"
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