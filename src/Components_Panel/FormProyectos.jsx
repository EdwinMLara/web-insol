import React, { useState } from "react";

import LogoAmarilloBlanco from "../img/Logos/AmarilloBlanco.png";

function FormProyectos() {
  const [contenido, setContenido] = useState("");
  

  const handleChange = (event) => {
    // Reemplazar saltos de línea con \n
    setContenido(event.target.value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí guardas la descripción en la base de datos
    // Asegúrate de que el backend interprete \n como saltos de línea
    console.log("Descripción a guardar:", contenido);
    
  };

  return ( 
    <div className="flex ">
      <div className=" ml-10 mr-10">
      <div className="text-left mt-4 mb-2">
            <h1 className="font-bold text-2xl text-secondary">Nuevo Proyecto </h1>
          </div>
        <div className=" ">
          
          <form onSubmit={handleSubmit}>
            
              <div className="grid grid-cols-2 gap-4">
              <div className="mb-4 ">
              <label for="titulo" className="block text-lg font-bold ">
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
              <div className="mb-4">
              <label for="frase" className="block text-lg font-semibold ">
                Frase
              </label>
              <input
                type="text"
                id="frase"
                name="frase"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Frase inspiradora"
              />
            </div>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div className="mb-4">
                <label for="video" className="block text-lg font-semibold">
                  Video
                </label>
                <input
                  type="file"
                  id="video"
                  name="video"
                  accept="video/*"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Agregar Video del Proyecto"
                />
              </div>
              <div className="mb-4">
                <label for="fecha" className="block text-lg font-semibold ">
                  Fecha del Proyecto
                </label>
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Fecha"
                />
              </div>
              <div className="mb-4">
              <label for="fecha" className="block text-lg font-semibold ">
                  Seleccionar
                </label>
                <select className=" mt-1 p-2 w-full border rounded-md">
                  <option value="" disabled selected>
                    Area / Campo
                  </option>
                  <option value="opcion1">Desarrollo Tecnológico</option>
                  <option value="opcion2">Soluciones de Integracion</option>
                  <option value="opcion3">Infraestructura TI</option>
                  <option value="opcion4">AdquiSición de Equipos y Herramientas</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label for="contenido" className="block text-lg font-semibold ">
                Contenido
              </label>
              <textarea
                id="contenido"
                name="contenido"
                value={contenido}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Informacion del Proyecto "
              ></textarea>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div className="mb-4">
                <label for="imagen1" className="block text-lg font-semibold ">
                  Imagen 1
                </label>
                <input
                  type="file"
                  id="imagen1"
                  name="imagen1"
                  //accept: que tipo de archivo acepta en este caso imagen y el /* es que acepta jpg,, png, etc
                  accept="image/*"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label for="imagen2" className="block text-lg font-semibold ">
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
              <div className="mb-4">
                <label for="imagen3" className="block text-lg font-semibold ">
                  Imagen 3
                </label>
                <input
                  type="file"
                  id="imagen3"
                  name="imagen3"
                  accept="image/*"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
            </div>
            <div className="mb-12">
              <button
                type="submit"
                className="bg-primary text-black py-2 px-4 rounded-md hover:bg-darkPrimary hover:text-white absolute right-14 "
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormProyectos;
