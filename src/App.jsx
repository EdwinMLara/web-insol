// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Animaciones from "./components/Animaciones";
import TecnologiasPage from "./pages/TecnologiasPage";

import Carrusel from "./Components/Carrusel"
import LogoVerde from "./Components/LogoVerde"
import Navbar from "./Components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <main>
      <LogoVerde />
      <div>
      <p className="text-9xl"></p>
     
     </div>  
        <Routes>
          <Route path="/tecnologias" element={<TecnologiasPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
