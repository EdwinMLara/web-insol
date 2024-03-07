import React, {useState} from "react";
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
    console.log("Descripción a guardar:",contenido);
  };

  return (
    <div className="bg-black  flex justify-center items-center m-24 border-2 border-primary">
      <div className="bg-gradient-to-b from-secondary to-tertiary p-8 rounded shadow-md w-[56rem]">
        <div className="text-center">
          <img src={LogoAmarilloBlanco} className=" w-[14rem] mx-auto" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label for="titulo" className="block text-sm font-medium">
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
              <label for="video" className="block text-sm font-medium">
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
              <label for="fecha" className="block text-sm font-medium ">
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
          </div>
          <div className="mb-4">
            <label for="contenido" className="block text-sm font-medium ">
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
              <label for="imagen1" className="block text-sm font-medium ">
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
            <div className="mb-4">
              <label for="imagen3" className="block text-sm font-medium ">
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
          <div className="mb-4">
            <label for="frase" className="block text-sm font-medium ">
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
  );
  
}

export default FormProyectos;
