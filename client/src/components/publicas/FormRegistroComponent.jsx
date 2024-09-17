import "../../styles/publicas/inicioSesion.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FormRegistro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/PPage");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });
  // useEffect(() => {
  //   if (isAuthenticated) navigate("/tasks");
  // }, [isAuthenticated]);
  return (
    <div className="w-full lg:w-1/2 h-full  flex flex-col p-10 ">
      <div className="h-full px-10 rounded-2xl form-filter">
        {RegisterErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))}
        <h1 className="bienv flex items-center justify-center text-4xl h-1/6">
          Registro
        </h1>
        <form
          onSubmit={onSubmit}
          className="flex flex-col w-full h-5/6  justify-evenly items-center "
        >
          <div className="w-full h-2/5 sm:h-3/5">
            <div className=" w-full h-1/3">
              <div className="w-full h-4/6 relative">
                <input
                  className="pl-12 border-b-4 w-full h-full focus:border-b-4  focus:border-verde-principal focus:outline-none text-xl  hover:border-verde-principal bt2"
                  type="text"
                  {...register("nombre", { required: true })}
                  placeholder="Nombre Completo"
                />
                <i className="fa-solid fa-signature absolute left-3 top-1/2  transform -translate-y-1/2 text-2xl text-verde-principal" />
              </div>
              {errors.nombre && (
                <p className="text-red-500 text-sm">
                  El nombre de usuario es requerido{" "}
                </p>
              )}
            </div>
            <div className="relative w-full h-1/3">
              <div className="w-full h-4/6 relative">
                <input
                  className="pl-12 border-b-4 w-full h-full focus:border-b-4  focus:border-verde-principal focus:outline-none text-xl  hover:border-verde-principal bt2"
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Correo"
                />
                <i className="fa-solid fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-2xl text-verde-principal" />
              </div>
              {errors.email && (
                <p className="text-red-500">El Correo es requerido </p>
              )}
            </div>
            <div className="relative w-full h-1/3">
              <div className="w-full h-4/6 relative">
                <input
                  className="pl-12 border-b-4 w-full h-full focus:border-b-4  focus:border-verde-principal focus:outline-none text-xl  hover:border-verde-principal bt2"
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Contraseña"
                />
                <i className="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-2xl text-verde-principal" />
              </div>
              {errors.password && (
                <p className="text-red-500">La contraseña es requerida </p>
              )}
            </div>
          </div>
          <div className="w-full h- px-5 flex items-center flex-col sm:flex-row-reverse gap-3 h-2/5 sm:h-1/5">
            <div className="h-1/2 w-full flex items-center sm:h-full">
              <button
                className="bg-verde-principal w-full h-3/5 p-3 text-lg whitespace-nowrap font-semibold text-white rounded-full -mb-1 hover:bg-gray-200 hover:text-verde-principal bt "
                type="submit"
              >
                Iniciar sesión
              </button>
            </div>
            <div className="h-1/2 w-full sm:flex sm:items-center sm:h-full">
              <button className="bg-gray-300 w-full h-3/5 text-lg font-semibold text-verde-principal rounded-full -mb-1 hover:bg-red-200 bt sm:h-3/5">
                Cancelar
              </button>
            </div>
          </div>
          <div className="w-full h-1/5 px-5 flex sm:h-1/5">
            <button className="bg-gray-200 w-full h-3/5  p-2 text-lg transition-opacity text-black rounded-full flex items-center justify-between gap-2">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII="
                className="w-12"
              />
              <p className="text-xl">Continuar con google</p>
              <div className="w-12" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
