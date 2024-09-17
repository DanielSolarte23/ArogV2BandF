import imagen from '../../images/imagenVenta.jpg';
import foto from '../../images/imagenRecoleccion.jpg';
import fotis from '../../images/imagenEstudioi.jpg';

export default function Pagina () {
  return (
    <div className="m-auto h-screen  py-12">
      <section id="Servicios" className=" flex-col flex items-center h-full">
        <div className="h-[12%]" />
        <article className=" w-full h-[12%] flex justify-center items-center">
          <h1 className="text-center text-3xl font-semibold">
            NUESTROS SERVICIOS
          </h1>
        </article>
        <section className=" md:grid md:grid-cols-3 w-full h-fit md:h-[86%] px-5 flex flex-col gap-5">
          <article className="flex md:flex-col justify-evenly items-center md:py-5 md:px-5 ">
            <div className='flex flex-col justify-center  items-center'>
              <div className="md:w-48 md:h-48 w-36 h-36 flex-shrink-0 rounded-full border-4 border-lime-600 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={imagen}
                  alt="imagen"
                />
              </div>
              <h2 className="font-semibold text-xl md:text-2xl">Recolección</h2>
            </div>
            <p className="md:text-justify  px-5  ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              fugit possimus reiciendis at deleniti quia nihil ut? Nesciunt
              delectus.
            </p>
          </article>
          <article className="flex md:flex-col justify-evenly items-center md:py-5 md:px-5">
            <div className='flex flex-col justify-center  items-center'>
              <div className="md:w-48 md:h-48 w-36 h-36 flex-shrink-0 rounded-full border-4 border-lime-600 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={imagen}
                  alt="imagen"
                />
              </div>
              <h2 className="font-semibold text-xl md:text-2xl">Recolección</h2>
            </div>
            <p className="md:text-justify  px-10  ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              fugit possimus reiciendis at deleniti quia nihil ut? Nesciunt
              delectus.
            </p>
          </article>
          <article className="flex md:flex-col justify-evenly items-center md:py-5 md:px-5">
            <div className='flex flex-col justify-center items-center'>
              <div className="md:w-48 md:h-48 w-36 h-36 flex-shrink-0 rounded-full border-4 border-lime-600 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={imagen}
                  alt="imagen"
                />
              </div>
              <h2 className="font-semibold text-xl md:text-2xl">Recolección</h2>
            </div>
            <p className="md:text-justify  px-10  ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              fugit possimus reiciendis at deleniti quia nihil ut? Nesciunt
              delectus.
            </p>
          </article>
        </section>
      </section>
    </div>
  );
}
