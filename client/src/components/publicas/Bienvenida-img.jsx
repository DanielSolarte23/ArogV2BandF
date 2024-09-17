import React from "react";
import "../../styles/homePage.css";

export default function imgFondo() {
  return (
    <div
      id="Inicio"
      className="w-full contenedor-bienvenida px-8 h-[90%] md:px-28 "
    >
      {/* Contenedor de la imagen y texto */}
      <div className="h-[21%] w-full"></div>
      <section className="w-full h-3/4 flex  rounded-2xl bg-cover bg-center  bg-no-repeat bg-[url('src/images/textura-hoja-verde.jpg')]">
        <img
          className="hidden lg:block absolute top-[70px] right-1  h-[87%]"
          src="src/images/gif-cell-phone.gif"
          alt="cell phone"
        />
        <article className=" h-full flex flex-col justify-center w-full md:items-start items-center md:pl-14  p-2   text-white border">
          <div className="sm:w-1/2">
            <p className="text-xl sm:text-3xl text-shadow-2xl">
              Asociasion de <br />
            </p>
            <p className=" text-shadow-2xl -mt-3 text-xl sm:text-3xl text-nowrap">Recicladores de oficio</p>
            <h1 className="text-shadow-2xl -mt-5 text-[2.8rem] sm:text-[4rem] font-bold">GOLEROS</h1>
          </div>
        </article>
      </section>
    </div>
  );
}
