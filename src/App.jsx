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
import HomePage from "./pages/HomePage";
import Footer from './Components/Footer';

function App() {
  return (
    <InsoelProvider>
      <BrowserRouter>
        <main>
          <Navbar_Context />
          <Routes>
            <Route path="/web-insol/" element={<Carrusel />} />
            <Route path="/tecnologias" element={<TecnologiasPage />} />
            <Route path="/invernadero" element={<InvernaderoPage />} />
            <Route path="/clientes" element={<ClientesPage />} />
            <Route path="/nosotros" element={<NosotrosPage/>} />
            <Route path="/contactanos" element={<ContactanosPage/>} />
            <Route path="/proyectos/biorreactor" element={<BiorreactorPage/>} />
          </Routes>
        <Footer />
        </main>
      </BrowserRouter>
    </InsoelProvider>
  );
}

export default App;
