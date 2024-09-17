import "@fortawesome/fontawesome-free/css/all.min.css";
import LogoArog from "../../images/logoArogText.svg";
import BarraLateral from "../../components/admins/BarraLateral";
import { Outlet } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function PPage() {
  const { user } = useAuth();
  console.log(user);
  return (
    <main className="w-full h-screen box-border m-0 flex flex-col">
      <header className="w-full h-[12%] shadow-lg flex items-center justify-between px-6 py-1">
        <img className="h-full" src={LogoArog} alt="Logo Arog" />
        <Link to="."><div className="flex h-1/3 items-center gap-2">
          <p className="text-lg font-medium text-gray-600">{user.nombre}</p>
          <i className="fa-solid fa-user-large text-white bg-verde-principal p-4 rounded-full"></i>
        </div></Link>
      </header>
      <div className="flex h-[88%]">
        <BarraLateral />
        <div className="flex-1 overflow-auto py-2 pr-2 h-full w-4/5">
        <Outlet />
        </div>
      </div>
    </main>
  );
}
