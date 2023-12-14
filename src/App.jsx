// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Animaciones from "./components/Animaciones";
import TecnologiasPage from "./pages/TecnologiasPage";

import Carrusel from "./Components/Carrusel";
import LogoVerde from "./Components/LogoVerde";
import Navbar from "./Components/Navbar";
import Navbar_Context from "./components/Navbar_Context";
import InvernaderoPage from "./pages/InvernaderoPage";
import { InsoelProvider } from "./Context/InsoelContext";
import ClientesPage from "./pages/ClientesPage";
import Nosotros from "./components/Nosotros";
import NosotrosPage from "./pages/NosotrosPage";
import ContactanosPage from "./pages/ContactanosPage";

function App() {
  return (
    <InsoelProvider>
      <BrowserRouter>
        <main>
          <Navbar_Context />
          <Routes>
            <Route path="/" element={<LogoVerde />} />
            <Route path="/tecnologias" element={<TecnologiasPage />} />
            <Route path="/invernadero" element={<InvernaderoPage />} />
            <Route path="/clientes" element={<ClientesPage />} />
            <Route path="/nosotros" element={<NosotrosPage/>} />
            <Route path="/contactanos" element={<ContactanosPage/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </InsoelProvider>
  );
}

export default App;
