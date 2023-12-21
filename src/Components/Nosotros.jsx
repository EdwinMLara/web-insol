import React from "react";

import NosotrosInformacion from "./NosotrosInformacion";
import Fundadores from "./Fundadores";

function Nosotros() {
  return (
    <div className="min-h-screen flex flex-col">
  {/* Section: NosotrosInformacion */}
  <div className="min-h-screen bg-gradient-to-t from-black via-gray-800 to-white">
    <NosotrosInformacion />
  </div>

  {/* Section: Fundadores */}
  <div className="min-h-screen bg-gradient-to-b from-black via-gray-600 to-white">
    <Fundadores />
  </div>

  
</div>
  );
}

export default Nosotros;
