import { useEffect, useState } from "react";
import ProductList from "../Components/ProductList";
import ProductDetail from "../Components/ProductoDetail";
import Footer from "../Components/Footer";

function TiendaPage() {
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    document.title = "Tienda | INSOEL";
    return () => {
      document.title = "INSOEL";
    };
  }, []);

  const products = [
    {
      id: 1,
      name: "Producto 1",
      image: "ss",
      price: 50,
      features: "Características del Producto 1",
    },
    {
      id: 2,
      name: "Producto 2",
      image: "url_imagen_2",
      price: 75,
      features: "Características del Producto 2",
    },
    {
      id: 3,
      name: "Producto 3",
      image: "url_imagen_2",
      price: 75,
      features: "Características del Producto 3",
    },
    {
      id: 4,
      name: "Producto 4",
      image: "url_imagen_2",
      price: 75,
      features: "Características del Producto 4",
    },
    {
      id: 5,
      name: "Producto 5",
      image: "url_imagen_2",
      price: 75,
      features: "Características del Producto 5",
    },
    // Agrega más productos según sea necesario
  ];

  const selectedProduct = products.find(
    (product) => product.id === selectedProductId
  );

  return (
    <>
      <div className="min-h-screen p-5 mt-24 bg-gradient-to-b from-white to-quaternary">
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
