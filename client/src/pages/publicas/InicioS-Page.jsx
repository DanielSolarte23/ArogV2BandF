import LogoIS from "../../components/publicas/logoIS-Component"
import FormInicio from "../../components/publicas/FormInicioComponent"
import {  } from "../../styles/publicas/inicioSesion.css";

export default function Login (){
    return (
        <div className="sm:px-10 h-screen w-full md:justify-end flex pagIn ">
        <LogoIS />  
        <FormInicio />
        </div>



    )
}