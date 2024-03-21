import { createContext, useState, useContext, useEffect } from "react";

import {
  createSolicitudRequest,
  getSolicitudesRequest,
} from "../api/contactarnos";
import {
  crearProyectoRequest,
  getProyectoRequest,
  getProyectosRequest,
} from "../api/proyectos";

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

  //----------------Proyectos--------------
  const [proyectos, setProyectos] = useState([]);
  const [proyecto, setProyecto] = useState([]);


  // Funciones para la seccion de contactarnos

  const createSolicitud = async (solicitud) => {
    const res = await createSolicitudRequest(solicitud);
    console.log(res);
  };

  /** ------------------Proyectos----------------------- */
  const crearProyecto = async (proyecto) => {
    const res = await crearProyectoRequest(proyecto);
    console.log(res);
  };
  const obtenerProyectos = async () => {
    const proyectos = await getProyectosRequest();
    setProyectos(proyectos.data);
  };
  const getProyecto = async (id) => {
    //console.log(id)
    try {
      const proyecto = await getProyectoRequest(id);
      setProyecto(proyecto.data)
      //console.log(proyecto.data)
      return proyecto.data
    } catch (error) {
      console.error(error)
    }
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
        createSolicitud,// Proyectos
        crearProyecto,
        obtenerProyectos,
        getProyecto,
        proyectos,
        proyecto,
      }}
    >
      {children}
    </InsoelContext.Provider>
  );
}
