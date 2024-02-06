import { useEffect, useState } from "react";
import { useInsoel } from "../Context/InsoelContext";
import ProductList from "../Components/ProductList";
import ProductDetail from "../Components/ProductoDetail";
import Footer from "../Components/Footer";


function TiendaPage() {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const { setLogoColor } = useInsoel();
  setLogoColor("AmarilloBlanco");

  useEffect(() => {
    document.title = "Tienda | INSOEL";
    return () => {
      document.title = "INSOEL";
    };
  }, []);

  const products = [
    {
      id: 1,
      name: "Electrónica",
      image: "ss",
      descripcion: "Tecnología innovadora para una vida digital avanzada. Explora diferentes componentes; resistencias, placas, entre otros para potenciar tus proyectos electrónicos.",
    },
    {
      id: 2,
      name: "Herramientas",
      image: "../",
      descripcion: "Descubre herramientas de primera calidad para bricolaje y proyectos, todo en un solo lugar. Desde manuales hasta eléctricas, ofrecemos variedad, calidad y conveniencia para llevar tus ideas a la realidad. ¡Explora ahora!",
    },
    {
      id: 3,
      name: "Equipo de Integración",
      image: "url_imagen_2",
      descripcion: "Soluciones avanzadas para una integración eficiente de sistemas, Conectores, cables, placas de circuito, herramientas de soldadura, etc. para simplificar la integración de sistemas electrónicos.",
    },
    // Agrega más productos según sea necesario
  ];

  const selectedProduct = products.find(
    (product) => product.id === selectedProductId
  );

  return (
    <>
      <div className="min-h-screen p-5 mt-24 bg-gradient-to-b from-white to-quaternary  ">
        <ProductList
          products={products}
          onSelectProduct={setSelectedProductId}
        />
      </div>
      <div>
      <Footer/>
      </div>
    </>
  );
}

export default TiendaPage;
