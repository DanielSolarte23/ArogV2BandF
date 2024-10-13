

import Bienvenida from "../../components/publicas/Bienvenida-img"
import Footer from "../../components/publicas/Footer-icons"
import SobreNosotros from "../../components/publicas/SobreNosotrosComponente"
import "../../styles/homePage.css"
import Pagina from "../../components/publicas/Card-Recoleccioncomponent"
import PieDePagina  from "../../components/publicas/PieDePagina";

export default function HomePagina (){
    return (
        <div className="h-screen w-full">   
        <Bienvenida />
        <Footer />
        <Pagina />
        <SobreNosotros />
        <PieDePagina />
        </div>
    )
}
