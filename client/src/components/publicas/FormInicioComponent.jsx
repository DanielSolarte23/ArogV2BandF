import "../../styles/publicas/inicioSesion.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function FormInicio() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/PPage");
  }, [isAuthenticated]);
  return (
    <div className="w-full p-5 sm:w-full sm:h-screen md:h-screen h-screen lg:w-2/4 flex flex-col sm:justify-center xl:px-14 md:w-full">
      <div className="md:h-5/6 h-full px-8  rounded-2xl form-filter">
        <div className="h-1/6 flex flex-col justify-center items-center ">
          {signErrors.map((error, i) => (
            <div
              className="bg-red-500 p-2 text-white text-center w-5/6 h-10"
              key={i}
            >
              {error}
            </div>
          ))}
          <h1 className="bienv text-2xl xl:text-2xl sm:text-3xl">BIENVENIDO</h1>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col w-full h-full items-center xl:h-5/6"
        >
          <div className="h-2/5 w-full px-4 sm:h-2/5  xl:h-2/5">
            <div className=" h-1/2 p-1">
              <div className="h-5/6 sm:h-5/6 relative ">
                <input
                  className="pl-12 border-b-4 w-full h-full focus:border-b-4  focus:border-verde-principal focus:outline-none text-xl  hover:border-verde-principal bt2 md:text-base xl:text-lg sm:h-full"
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Correo"
                />
                <i className="fa-solid fa-user absolute left-3 top-1/2 transform -translate-y-2/3 text-2xl text-verde-principal " />
              </div>
              {errors.email && (
                <p className="text-red-500">El correo es requerido </p>
              )}
            </div>
            <div className="relative  h-1/2 -mb-5 p-1">
              <div className="h-5/6 sm:h-5/6 relative">
                <input
                  className=" pl-12 border-b-4 w-full h-full focus:border-b-4  focus:border-verde-principal focus:outline-none text-xl  hover:border-verde-principal bt2 md:text-base xl:text-lg sm:h-full"
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Contraseña"
                />
                <i className="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-2xl text-verde-principal" />
              </div>
              {errors.password && (
                <p className="text-red-500">la contraseña es requerida </p>
              )}
            </div>
          </div>
          <div className="h-1/5 w-full flex flex-col justify-center px-4 xl:h-1/5">
            <p className="md:text-xl text-sm  lg:text-base gap-3 flex   whitespace-nowrap sm:text-xl sm:w-full sm:justify-between flex-wrap">
              ¿Olvido su contraseña?
              <strong className="text-verde-principal font-medium">
                {" "}
                Recuperar
              </strong>
            </p>
            <p className=" flex text-sm gap-3 sm:text-xl sm:w-full sm:justify-between lg:text-base flex-wrap">
              ¿No tiene una cuenta?
              <strong className="text-verde-principal font-medium">
                {" "}
                Crear cuenta
              </strong>
            </p>
          </div>
          <div className="h-1/5 md:h-1/5 sm:h-1/5 w-full flex flex-col justify-evenly items-center  xl:h-2/5">
            <div className="w-full h-1/2 flex justify-center items-center">
              <button className="bg-verde-principal w-2/3 h-2/3 sm:h-2/3 flex items-center justify-center sm:w-2/3 p-2 text-white rounded-xl  hover:bg-gray-200 hover:text-verde-principal transition sm:text-lg xl:h-1/2">
                Iniciar sesión
              </button>
            </div>
            <div className="w-full h-1/2 flex justify-center items-center xl:items-start">
              <button className="bg-gray-200 w-2/3 p-2 h-2/3 py-3 text-sm transition-opacity text-black whitespace-nowrap rounded-xl flex items-center gap-1 md:text-base justify-between sm:h-2/3 sm:w-2/3 xl:h-1/2">
                <img
                  className=" w-5"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII="
                />
                <p className="sm:text-lg ">Continuar con google</p>
                <div className="w-5" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
