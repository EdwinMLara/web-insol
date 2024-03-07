import React from "react";

function NavbarPanel() {
  return (
    <div>
      <nav class="bg-secondary p-5 fixed top-0 left-0 w-full z-50">
        <div class="container mx-auto flex justify-between items-center">
          <div class="text-white font-bold text-lg">Mi Sitio</div>
          <ul class="flex space-x-4">
            <li>
              <a href="#" class="text-white hover:text-gray-400">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" class="text-white hover:text-gray-400">
                Acerca
              </a>
            </li>
            <li>
              <a href="#" class="text-white hover:text-gray-400">
                Servicios
              </a>
            </li>
            <li>
              <a href="#" class="text-white hover:text-gray-400">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavbarPanel;
