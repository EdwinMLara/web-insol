import React, {useState} from 'react'
import NavbarPanel from '../Components_Panel/NavbarPanel'
import { HiOutlineViewList } from "react-icons/hi";
import FormProyectos from '../Components_Panel/FormProyectos';

function PanelControlPage() {
  const [activeTab, setActiveTab] = useState(null); // Estado para rastrear la pestaña activa
  const [showSubMenu, setShowSubMenu] = useState(false); // Estado para rastrear si se muestra el submenú de Proyectos

  const handleTabClick = (tabName) => {
    // Esta función cambiará el estado activeTab cuando se haga clic en una pestaña
    setActiveTab(tabName);
  };

  const toggleSubMenu = () => {
    // Esta función cambiará el estado para mostrar u ocultar el submenú
    setShowSubMenu(!showSubMenu);
  };

  return (
    <div className='bg-black'>
    <NavbarPanel />
    <div className='flex'>
      {/* Barra lateral */}
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-16 transition-transform -translate-x-full sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 mt-1 overflow-y-auto bg-secondary  border-t-2 border-primary dark:bg-secondary">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className={`flex items-center text-white hover:text-black hover:bg-primary p-2 mt-2 rounded-lg dark:text-white group ${
                  activeTab === "proyectos" ? "bg-darkPrimary" : ""
                }`}
                onClick={() => {
                  handleTabClick("proyectos");
                  toggleSubMenu(); // Toggle del submenú al hacer clic en "Proyectos"
                }}
              >
                <HiOutlineViewList className="flex-shrink-0 w-5 h-5  transition duration-75 dark:text-gray-400 group-hover:text-secondary text-primary" />
                <span className="p-2 font-bold">Proyectos</span>
              </a>
              {/* Submenú de Proyectos */}
              {activeTab === "proyectos" && showSubMenu && (
                <ul className="ml-6 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-black hover:bg-primary p-2 rounded-lg dark:text-white"
                      onClick={() => handleTabClick("tabla")}
                    >
                      Tabla
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-black hover:bg-primary p-2 rounded-lg dark:text-white"
                      onClick={() => handleTabClick("nuevoProyecto")}
                    >
                      Nuevo Proyecto
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center text-white hover:text-black hover:bg-primary p-2 mt-2 rounded-lg dark:text-white group ${
                  activeTab === "tienda" ? "" : ""
                }`}
                onClick={() => {
                  handleTabClick("tienda");
                  toggleSubMenu(); // Toggle del submenú al hacer clic en "tienda"
                }}
              >
                <HiOutlineViewList className="flex-shrink-0 w-5 h-5  transition duration-75 dark:text-gray-400 group-hover:text-secondary text-primary" />
                <span className="p-2 font-bold">Tienda</span>
              </a>
              {/* Submenú de tienda */}
              {activeTab === "tienda" && showSubMenu && (
                <ul className="ml-6 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-black hover:bg-primary p-2 rounded-lg dark:text-white"
                      onClick={() => handleTabClick("tablaProductos")}
                    >
                      Tabla Productos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-black hover:bg-primary p-2 rounded-lg dark:text-white"
                      onClick={() => handleTabClick("nuevoProducto")}
                    >
                      Nuevo Producto
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </aside>

      {/* Contenido principal */}
      <div className="mt-16 sm:ml-64">
        {/* Contenido dinámico basado en la pestaña activa */}
        {activeTab === "tabla" && (
          <div>
            {/* Aquí coloca el contenido específico de la tabla de proyectos */}
            hola como estas proyecto
          </div>
        )}
        {activeTab === "nuevoProyecto" && (
          <div>
            {/* Aquí coloca el contenido específico del formulario de nuevo proyecto */}
            <FormProyectos />
          </div>
        )}
        {activeTab === "tablaProductos" && (
          <div>
            {/* Aquí coloca el contenido específico del formulario de nuevo proyecto */}
            hola como estas producto
          </div>
        )}
        {activeTab === "nuevoProducto" && (
          <div>
            {/* Aquí coloca el contenido específico del formulario de nuevo proyecto */}
            <FormProyectos />
          </div>
        )}
      </div>
    </div>
  </div>
);
}

export default PanelControlPage