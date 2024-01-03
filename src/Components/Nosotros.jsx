import React from "react";

import NosotrosInformacion from "./NosotrosInformacion";
import Fundadores from "./Fundadores";
import Clientes from "./Clientes";

function Nosotros() {
  return (
    <div className="min-h-screen flex flex-col">
  {/* Section: NosotrosInformacion */}
  <div className="min-h-screen bg-gradient-to-t from-black via-gray-800 to-white">
    <NosotrosInformacion />
  </div>

  {/* Section: Fundadores */}
  <div className="min-h-screen bg-gradient-to-b from-black to-quaternary">
    <Fundadores />
  </div>

  {/* section: Clientes */}
  <div className="bg-gradient-to-b from-quaternary  to-white" >
    <Clientes />
  </div>

  
</div>
  );
}

export default Nosotros;
