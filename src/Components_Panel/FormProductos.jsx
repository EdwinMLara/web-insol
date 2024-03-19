import React from 'react'
import LogoAmarilloBlanco from "../img/Logos/AmarilloBlanco.png";

function FormProductos() {
  return (
    <div className="flex justify-center items-center h-screen">
  <div className="border-2 border-primary">
    <div className="bg-gradient-to-b from-secondary to-tertiary p-8 rounded shadow-md w-[56rem]">
       <div className="text-center">
       <h1 className="font-bold text-2xl text-white">Agregar Nuevo Producto </h1>
        </div>
        <form>
          <div className="mb-4">
            <label for="nombre" className="block text-sm font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Nombre del Producto"
            />
          </div>
          <div class="grid grid-cols-2 gap-6">
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
            <label for="precio" className="block text-sm font-medium ">
                Precio
              </label>
              <input
                type="text"
                id="precio"
                name="precio"
                accept="image/*"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-primary text-black py-2 px-4 rounded-md hover:bg-darkPrimary hover:text-white"
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

export default FormProductos