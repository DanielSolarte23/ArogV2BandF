import { Routes, Route, useLocation } from "react-router-dom";
import HomePagina from "../pages/publicas/Home-Page";
import Login from "../pages/publicas/InicioS-Page";
import Registro from "../pages/publicas/Registro-Page";
import PPage from "../pages/Admin/PPComponent";
// import BarraLateral from '../components/admins/BarraLateral';
import Rutas from "../components/admins/Rutas";
import Perfil from "../components/admins/Perfil";
import AsignacionTareas from "../pages/Admin/AsignacionTareas";
import GestionUsuarios from "../components/admins/GestionUsuarios";
import Tabla from "../components/admins/Tabla";
import RegistroIncidentes from "../components/admins/Regisincidencia";
import Pagos from "../components/admins/Pagos";
import Estadisticas from "../components/admins/Estadisticas";
import ImageGallery from "../components/admins/ImgGaleria";
// import {AuthProvider} from '../context/AuthContext';
import ProtectedRoute from "../ProtectedRouter";
import Encabezado from "../components/publicas/Encabezado";
// import { TaskProvider } from "../context/";
// import ProtectedRoute from "../ProtectedRouter";
// Crea un componente que maneje la lógica del encabezado



export default function RutasPublics() {
  const location = useLocation();

  // Normalizar la ruta actual y las rutas excluidas para evitar problemas de comparación
  const currentPath = location.pathname.toLowerCase();
  const noEncabezadoRutas = ["/login", "/register"];

  return (
    <>
      {/* Solo renderiza Encabezado si no estás en Login o Register */}
      {!noEncabezadoRutas.includes(currentPath) && <Encabezado />}
      
      <Routes>
        <Route path="/" element={<HomePagina />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registro />} />
        <Route element={<ProtectedRoute />}>
          <Route path='PPage' element={<PPage />}>
            <Route index element={<Perfil />} />
            <Route path="Rutas" element={<Rutas />} />
            <Route path="Tareas" element={<AsignacionTareas />} />
            <Route path="Usuarios" element={<GestionUsuarios />} />
            <Route path="Pagos" element={<Pagos />} />
            <Route path="Formulario1" element={<Tabla />} />
            <Route path="Incidentes" element={<RegistroIncidentes />} />
            <Route path="Estadisticas" element={<Estadisticas />} />
            <Route path="Galeria" element={<ImageGallery />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}