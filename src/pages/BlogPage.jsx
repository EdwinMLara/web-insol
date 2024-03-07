import React, { useEffect } from "react";
import { useInsoel } from "../../src/Context/InsoelContext";
import ListNoticia from "../Components/ListNoticia";

import Automa from "../img/Noticias/automatizacion.jpg";
import Puntoven from "../img/Noticias/puntovent.jpg";
import Herra from "../img/Noticias/herra.jpg";
import Web from "../img/Noticias/web.jpg";
import Footer from "../Components/Footer";

function BlogPage() {
  const { setLogoColor, setTxtColor, setOpacidadColor } = useInsoel();

  setLogoColor("amarilloBlanco");
  setTxtColor("black");
  setOpacidadColor("bg-secondary h-24 ");

  useEffect(() => {
    document.title = "BLOG | INSOEL";
    return () => {
      document.title = "INSOEL";
    };
  }, []);

  const noticias = [
    {
      id: 1,
      titulo: "Automatización",
      descripcion:
        "Desbloqueando el Potencial Empresarial: Las Ventajas Estratégicas de la Automatización en Tu Negocio",
      imagen: Automa,
      //enlace: "https://ejemplo.com/noticia1"
    },
    {
      id: 2,
      titulo: "Vitalidad",
      descripcion:
        "Maximiza tus Oportunidades: Los Beneficios Estratégicos de un Punto de Venta en tu Negocio",
      imagen: Puntoven,
      //enlace: "https://ejemplo.com/noticia2"
    },
    {
      id: 3,
      titulo: "Esenciales",
      descripcion:
        "Las 10 Herramientas Esenciales para el Hogar: ¡Imprescindibles para Cualquier Proyecto!",
      imagen: Herra,
      //enlace: "https://ejemplo.com/noticia2"
    },
    {
      id: 4,
      titulo: "Presencia",
      descripcion:
        "Construyendo tu Presencia en Línea: La Crítica Importancia de una Página Web para Empresas",
      imagen: Web,
      //enlace: "https://ejemplo.com/noticia2"
    },
    // Agregar más noticias según sea necesario
  ];

  return (
    <div className="mt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Novedades informativas</h1>
        <ListNoticia noticias={noticias} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default BlogPage;
