// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Animaciones from "./components/Animaciones";
import TecnologiasPage from "./pages/TecnologiasPage";

function App() {
  const notify = () => toast("Wow so easy !");
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/tecnologias" element={<TecnologiasPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
