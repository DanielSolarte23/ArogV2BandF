import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../styles/homePage.css";
import { Link } from "react-router-dom";
import LogoArog from "../../images/ArogV2.png";
import { useAuth } from "../../context/AuthContext";

export default function Encabezado() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <header
      id="header1"
      className="w-full h-[12%] shadow-lg z-50 flex items-center bg-white fixed px-8 justify-between"
    >
      {/* Contenedor de logo y texto */}
      <a href="#Inicio" className="flex">
        <section className="flex w-5/6 flex-shrink-0">
          {/* Contenedor del logo */}
          <img className="w-16 h-full" src={LogoArog} alt="AROG" />
        </section>
      </a>

      {/* Contenedor del menú */}
      <nav className="flex items-center navegacion">
        <ul className="flex w-full justify-between gap-14 md:px-8 font-semibold text-lg">
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              {/* Nombre del usuario dinámico */}
              <p className="text-lg font-medium text-gray-600">
                {user?.nombre || "Usuario"}
              </p>
              <i className="fa-solid fa-user-large text-white bg-verde-principal p-4 rounded-full"></i>

              {/* Botón de cierre de sesión */}
              <button
                onClick={logout}
                className="ml-4 bg-red-500 text-white px-3 py-1 rounded-md"
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <div className="md:flex hidden">
                <li>
                  <a className="font-light" href="#Servicios">
                    Servicios <span className="p-2">|</span>
                  </a>
                </li>
                <li>
                  <a className="font-light" href="#SobreNosotros">
                    Nosotros
                  </a>
                </li>
              </div>

              <li>
                <Link
                  className="bg-lime-600 px-3 py-1 rounded-md text-white whitespace-nowrap"
                  to="/login"
                >
                  Iniciar sesión
                </Link>
              </li>
              <li>
                <Link
                  className="px-3 py-1 border border-lime-600 rounded-md text-lime-600 whitespace-nowrap"
                  to="/register"
                >
                  Crear cuenta
                </Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
}

