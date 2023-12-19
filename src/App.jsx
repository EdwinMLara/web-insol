// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TecnologiasPage from "./pages/TecnologiasPage";
import Navbar_Context from "./components/Navbar_Context";
import InvernaderoPage from "./pages/InvernaderoPage";
import { InsoelProvider } from "./Context/InsoelContext";
import ClientesPage from "./pages/ClientesPage";
import Nosotros from "./components/Nosotros";
import NosotrosPage from "./pages/NosotrosPage";
import ContactanosPage from "./pages/ContactanosPage";
import BiorreactorPage from "./pages/Proyectos/BiorreactorPage";
import HomePage from "./pages/HomePage";
import Carrusel from "./components/Carrusel";

function App() {
  return (
    <InsoelProvider>
      <BrowserRouter>
        <main>
          <Navbar_Context />
          <Routes>
            <Route path="/" element={<Carrusel/>} />
            <Route path="/tecnologias" element={<TecnologiasPage />} />
            <Route path="/invernadero" element={<InvernaderoPage />} />
            <Route path="/clientes" element={<ClientesPage />} />
            <Route path="/nosotros" element={<NosotrosPage/>} />
            <Route path="/contactanos" element={<ContactanosPage/>} />
            <Route path="/proyectos/biorreactor" element={<BiorreactorPage/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </InsoelProvider>
  );
}

export default App;
