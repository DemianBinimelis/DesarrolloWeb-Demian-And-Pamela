import React from "react";
import Header from "../Complements/Header";
import Footer from "../Complements/Footer";

import facebook from '../Imagenes/fbk.png'
import instagram from '../Imagenes/ig.png'
import twitter from '../Imagenes/twt.png'

function Contact() {
    return (

        <div className="bg-Fondo">
            <header>
                <Header />
            </header>
            
            <h1 className="mt-12 text-center" style={{fontFamily:"Titulo"}}>Contactos - Plant Oasis </h1>

            <div className="mt-12 flex flex-wrap justify-center">
                <div className="mx-auto border border-Cafe rounded-md bg-Containers">
                    <div className="flex flex-col justify-center items-center">
                        <br/>
                        <form action="">
                            <div>
                                <label htmlFor="">Razon de contacto: </label>
                                <select name="" id="">
                                    <option value="">...</option>
                                    <option value="">Sugerencias</option>
                                    <option value="">Reclamos</option>
                                    <option value="">Agradecimientos</option>
                                </select> 
                            </div>
                            
                            <div>
                                <label htmlFor="">Escriba su mensaje:</label>
                                <textarea name="" id="" cols="30" rows="4"></textarea>
                            </div>
                            
                            <div>
                                <label htmlFor="">Ingrese su nombre:</label>
                                <input type="text" />
                            </div>
                        </form>
                        <br/>
                    </div>

                    <div className="mx-auto borderrounded-md">

                        <h1 className="mt-8 mx-auto">
                            También puedes contactarnos mediante nuestras redes sociales:
                        </h1>
                        <div className="flex">
                            <img className="w-8" src={facebook} alt="" />
                            <img className="w-8" src={instagram} alt="" />
                            <img className="w-8" src={twitter} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default Contact;