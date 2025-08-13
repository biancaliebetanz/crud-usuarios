import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/login.tsx";
import Usuarios from "./pages/Usuarios/usuarios.tsx";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login></Login>} />
      <Route path='/usuarios' element={<Usuarios></Usuarios>} />
      </Routes>
  </BrowserRouter>
)}