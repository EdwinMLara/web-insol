import React, {useState} from 'react'

import Automa from "../img/Noticias/automatizacion.jpg";
import ListSubMenu from '../Components_Panel/ListSubMenu';

function SubMenuPage() {
    const submenus = [
        {
          id: 1,
          area: "Desarrollo Tecnologico",
          descripcion: "Explora nuestra sección de Desarrollo Tecnológico para conocer los proyectos pioneros que hemos llevado a cabo. Desde la creación de soluciones personalizadas hasta la adopción de tecnologías emergentes, demostramos nuestro compromiso con la innovación y el avance en el mundo digital.",
          img1: Automa,
          enlace: "https://ejemplo.com/proyecto1"
        },
      ];
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

      const handleClickNuevoProyecto = () => {
        setMostrarFormulario(true);
      };
    return (
        <div className="container mx-auto px-4 py-8 ">
      <div className="flex justify-between items-center mb-8">
      {!mostrarFormulario && (
            <h1 className="mt-16 text-3xl font-bold">SubMenus</h1>
          )}
        {mostrarFormulario ? (
            <div className='ml-24'>
                // Mostrar el formulario cuando mostrarFormulario es true
           
            </div>
          ) : (
            // Mostrar el botón "Nuevo Proyecto" cuando mostrarFormulario es false
            /* onClick={handleClickNuevoProyecto} */
            <button className="mt-16 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Nuevo SubMenu</button>
          )}
      </div>
      {!mostrarFormulario && (
            <div>
              <ListSubMenu submenus={submenus} />
            </div>
          )}
    </div>
      )
}

export default SubMenuPage