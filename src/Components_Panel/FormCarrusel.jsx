import React from 'react'
import LogoAmarilloBlanco from "../img/Logos/AmarilloBlanco.png";

function FormCarrusel() {

  return (
    <div className='flex justify-center items-center h-screen '>
      <div className=" border-2 border-primary relative">
      <div className="bg-gradient-to-b from-secondary to-tertiary p-8 rounded shadow-md w-[56rem] ">
        <div className="text-center">
          <h1 className="font-bold text-2xl text-white">Agregar Imagenes para Carrusel </h1>
        </div>
        <form>
          <div className="mb-4">
            <label for="titulo" className="block text-sm sm:text-base md:text-lg lg:text-xl font-medium">
              Titulo
            </label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Titulo del Proyecto"
            />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div className="mb-4">
            <label for="imagen1" className="block text-sm font-medium ">
                Imagen 1
              </label>
              <input
                type="file"
                id="imagen1"
                name="imagen1"
                accept="image/*"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
            <label for="imagen2" className="block text-sm font-medium ">
                Imagen 2
              </label>
              <input
                type="file"
                id="imagen2"
                name="imagen2"
                accept="image/*"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label for="imagen3" className="block text-sm font-medium ">
                Imagen 3
              </label>
              <input
                type="file"
                id="imagen3"
                name="imagen3"
                //accept: que tipo de archivo acepta en este caso imagen y el /* es que acepta jpg,, png, etc
                accept="image/*"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label for="imagen4" className="block text-sm font-medium ">
                Imagen 4
              </label>
              <input
                type="file"
                id="imagen4"
                name="imagen4"
                accept="image/*"
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

export default FormCarrusel