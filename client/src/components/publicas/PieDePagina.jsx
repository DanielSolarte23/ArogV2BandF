import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./Footer-icons";

export default function PieDePagina() {
  return (
    <div className="bg-Cafe-Footer h-40 flex px-5">
      <article className="w-1/2  h-full">
        <ul className="flex flex-col py-3 gap-2">
          <li className="">
            <div className="flex gap-3">
              <i className="text-white text-3xl p-1 fa-solid fa-location-dot"></i>
              <div className="ml-2">
                <p className="text-white font-semibold text-sm">
                  calle 55 #25-26
                </p>
                <p className="text-white font-semibold text-sm">
                  Popayán Cauca
                </p>
              </div>
            </div>
          </li>
          <li className="">
            <div className="flex gap-3">
              <i className="text-white  text-3xl p-1 fa-solid fa-phone"></i>
              <div>
                <p className="text-white font-semibold text-sm">
                  +57 3145688996
                </p>
                <p className="text-white font-semibold text-sm">018005644556</p>
              </div>
            </div>
          </li>
          <li className="">
            <div className="flex gap-2 items-center">
              <i className="text-white  text-3xl p-1 fa-solid fa-envelope"></i>
              <div>
                <p className="text-white font-semibold text-sm">
                  Asogoleros@gmail.com
                </p>
              </div>
            </div>
          </li>
        </ul>
      </article>
      <aside className="w-1/2 h-full px-20 py-3 hidden md:block">
        <div className="text-white flex flex-col justify-center gap-3">
          <h2 className="text-center font-bold text-2xl">Sobre la Empresa</h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            neque illum eius ratione nisi libero?
          </p>
          <div className="flex gap-5  justify-start text-2xl">
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-brands fa-tiktok"></i>
          </div>
        </div>
      </aside>
    </div>
  );
}
