import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import AgregarEstudiante from "./agregarEstudiante.jsx";
import Ver from "./Ver.jsx";
import EditarEstudiante from "./editarEstudiante.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/agregarEstudiante" element={<AgregarEstudiante/>}  />
        <Route path="/ver/:id" element={<Ver/>}  />
        <Route path="/editar/:id" element={<EditarEstudiante/>}  />
      </Routes>
    </BrowserRouter>
  )
}

export default App
