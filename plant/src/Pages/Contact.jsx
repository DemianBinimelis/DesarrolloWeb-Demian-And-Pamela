import React from "react";
// Importa los componentes header, footer y tabla de la carpeta complements
import Header from "../Complements/Header";
import Footer from "../Complements/Footer";
import Tabla from "../Complements/Tabla";

// Importa las imagenes necesarias
import facebook from '../Imagenes/fbk.png'
import instagram from '../Imagenes/ig.png'
import twitter from '../Imagenes/twt.png'

function Contact() {
    return (
        // Crea un div con un color especifico
        <div className="bg-Fondo">
            {/* Implementa el componente Header */}
            <header>
                <Header />
            </header>

            {/* Indica el titulo de la pagina */}
            <h1 className="mt-12 text-center text-2xl animate-slide-top" style={{ fontFamily: "Titulo" }}>Contactos - Plant Oasis </h1>

            {/* Contenedor con margen superior, alineacion */}
            <div className="mt-12 flex flex-wrap justify-center animate-slide-top2" style={{ fontFamily: "Contenido" }}>
                {/* Contenedor con margen automatico, borde, redondeo, y un fondo especifico */}
                <div className="mx-auto border border-Cafe rounded-md bg-Containers">
                    {/* Contenedor del formulario */}
                    <div className="flex flex-col justify-center items-center">
                        <br /> {/* Salto en linea */}
                        <form action="">
                            <div className="mt-4 animate-slide-top3">
                                {/* Nombre del campo */}
                                <label htmlFor="">Razon de contacto: </label>
                                {/* Menu desplegable */}
                                <select name="" id="">
                                    {/* Opcion por defecto */}
                                    <option value="">...</option>
                                    {/* Demas opciones */}
                                    <option value="">Sugerencias</option>
                                    <option value="">Reclamos</option>
                                    <option value="">Agradecimientos</option>
                                </select>
                            </div>

                            <div className="mt-4 animate-slide-top4">
                                {/* Nombre del campo */}
                                <label htmlFor="">Escriba su mensaje: </label>
                                {/* Espacio de la respuesta */}
                                <textarea name="" id="" cols="30" rows="4"></textarea>
                            </div>

                            <div className="mt-4 animate-slide-top5">
                                {/* Nombre del campo */}
                                <label htmlFor="">Ingrese su nombre: </label>
                                {/* Espacio de la respuesta */}
                                <input type="text" />
                            </div>
                        </form>
                        <br />
                    </div>

                    {/* Contenedor de mas informacion */}
                    <div className="mx-4 borderrounded-md animate-slide-top5">
                        {/* Titulo del nuevo div */}
                        <h1 className="mt-8 mx-auto">
                            También puedes contactarnos mediante nuestras redes sociales:
                        </h1>
                        {/* Enlaces con imagenes de redes sociales */}
                        <div className="flex">
                            <a href="https://www.facebook.com/"><img className="w-8" src={facebook} alt="icono defacebook" /></a>
                            <a href="https://www.instagram.com"><img className="w-8" src={instagram} alt="icono de instagram" /></a>
                            <a href="https://www.twitter.com"><img className="w-8" src={twitter} alt="i" /></a>
                        </div>
                    </div>
                    <br />
                </div>
            </div>

            {/* Implementa el componente Footer */}
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Contact;