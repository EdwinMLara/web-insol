import { createContext, useState, useContext, useEffect } from "react";

import { createSolicitudRequest, getSolicitudesRequest } from "../api/contactarnos";

const InsoelContext = createContext();

export const useInsoel = () => {
  const context = useContext(InsoelContext);
  if (!context) {
    throw new Error("useInsoel must be used with, a Insoelprovider");
  }
  return context;
};

export function InsoelProvider({ children }) {
  const [logoColor, setLogoColor] = useState("amarilloNegro");
  const [txtColor, setTxtColor] = useState("white");
  const [proyectColor, setProyectColor] = useState("bg-tertiary bg-opacity-75");
  const [opacidadColor, setOpacidadColor] = useState(
    "bg-opacity-75 bg-gradient-to-b from-secondary bottom-96"
  );

  // Funciones para la seccion de contactarnos

  const createSolicitud = async (solicitud) => {
    const res = await createSolicitudRequest(solicitud);
    console.log(res);
  };

  return (
    <InsoelContext.Provider
      value={{
        logoColor,
        setLogoColor,
        txtColor,
        setTxtColor,
        proyectColor,
        setProyectColor,
        opacidadColor,
        setOpacidadColor,
        createSolicitud
      }}
    >
      {children}
    </InsoelContext.Provider>
  );
}
