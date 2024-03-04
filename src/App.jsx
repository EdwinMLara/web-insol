// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TecnologiasPage from "./pages/TecnologiasPage";
import Navbar_Context from "./Components/Navbar_Context";
import Navbar_Tienda from "./Components/Navbar_Tienda";
import Carrusel from "./Components/Carrusel";
import InvernaderoPage from "./pages/InvernaderoPage";
import { InsoelProvider } from "./Context/InsoelContext";
import { AuthProvider } from "./Context/AuthContext";
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
import Login from "./Components_Panel/Login";
import Registrarse from "./Components_Panel/Registrarse";

function App() {
  return (
    <AuthProvider>
      <InsoelProvider>
        <BrowserRouter>
          <main>
            {/* Ruta para la tienda */}
            <Routes>
              <Route
                path="/web-insol/tienda/*"
                element={
                  <>
                    <Navbar_Tienda />
                    <TiendaRoutes />
                  </>
                }
              />
              {/* Otras rutas */}
              <Route
                path="/*"
                element={
                  <>
                    <Navbar_Context />
                    <MainRoutes />
                  </>
                }
              />
              <Route path="/web-insol/login" element={<Login />} />
              <Route path="/web-insol/registrarse" element={<Registrarse />} />
              <Route
                path="/web-insol/panelControl"
                element={<PanelControlPage />}
              />

              <Route element={<ProtectedRoute />}></Route>
            </Routes>
          </main>
        </BrowserRouter>
      </InsoelProvider>
    </AuthProvider>
  );
}

// Componente para las rutas dentro de la tienda
function TiendaRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TiendaPage />} />
      <Route path="/DetalleProducto" element={<DetalleProducto />} />
      <Route path="/:productId" element={<ProductDetail />} />
    </Routes>
  );
}

// Componente para las rutas principales
function MainRoutes() {
  return (
    <Routes>
      <Route path="/web-insol" element={<HomePage />} />
      <Route path="/web-insol/tecnologias" element={<TecnologiasPage />} />
      <Route path="/web-insol/invernadero" element={<InvernaderoPage />} />
      <Route path="/web-insol/clientes" element={<ClientesPage />} />
      <Route path="/web-insol/nosotros" element={<NosotrosPage />} />
      <Route path="/web-insol/contactanos" element={<ContactanosPage />} />
      <Route path="/proyectos/Biorreactor" element={<BiorreactorPage />} />
      <Route path="/proyectos/BancoUAT" element={<BancoUatPage />} />
      <Route path="/proyectos/Consultas" element={<SistemaDeConsultasPage />} />
      <Route path="/proyectos/ApkLectora" element={<ApkLectoraQrPage />} />
      <Route path="/web-insol/mapa" element={<MapaPage />} />
     
      
    </Routes>
  );
}

export default App;
/*
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
*/
