// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TecnologiasPage from "./pages/TecnologiasPage";
import Navbar_Context from "./Components/Navbar_Context";
import Carrusel from "./Components/Carrusel";
import InvernaderoPage from "./pages/InvernaderoPage";
import { InsoelProvider } from "./Context/InsoelContext";
import ClientesPage from "./pages/ClientesPage";
import NosotrosPage from "./pages/NosotrosPage";
import ContactanosPage from "./pages/ContactanosPage";
import BiorreactorPage from "./pages/Proyectos/BiorreactorPage";
import BancoUatPage from "./pages/Proyectos/BancoUatPage";
import SistemaDeConsultasPage from "./pages/Proyectos/SistemaDeConsultasPage";
import ApkLectoraQrPage from "./pages/Proyectos/ApkLectoraQrPage";
import HomePage from "./pages/HomePage";
import Footer from "./Components/Footer";
import TiendaPage from "./pages/TiendaPage";
import ProductDetail from "./Components/ProductoDetail";
import DetalleProducto from "./Components/DetalleProducto";
import MapaPage from "./pages/MapaPage";

function App() {
  return (
    <InsoelProvider>
      <BrowserRouter>
        <main>
          <Navbar_Context />
          <Routes>
            <Route path="/web-insol" element={<HomePage/>} />
            <Route path="/web-insol/tecnologias" element={<TecnologiasPage />} />
            <Route path="/web-insol/invernadero" element={<InvernaderoPage />} />
            <Route path="/web-insol/clientes" element={<ClientesPage />} />
            <Route path="/web-insol/nosotros" element={<NosotrosPage />} />
            <Route path="/web-insol/contactanos" element={<ContactanosPage />} />
            <Route path="/proyectos/Biorreactor" element={<BiorreactorPage />} />
            <Route path="/proyectos/BancoUAT" element={<BancoUatPage />} />
            <Route path="/proyectos/Consultas" element={<SistemaDeConsultasPage />} />
            <Route path="/proyectos/ApkLectora" element={<ApkLectoraQrPage />} />
            <Route path="/web-insol/tienda" element={<TiendaPage />} />
            <Route path="/web-insol/tienda/DetalleProducto" element={<DetalleProducto />} />
            <Route path="/web-insol/tienda/:productId" element={<ProductDetail/>} />
            <Route path="/web-insol/mapa" element={<MapaPage/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </InsoelProvider>
  );
}

export default App;
