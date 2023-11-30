import React from "react"; // Importa React
import Header from "../Complements/Header"; // Importa el Header
import Footer from "../Complements/Footer"; // Importa el Footer

import Demian from '../Imagenes/imgFotos/Demian.jpeg' // Importa la imagen de Demian
import Pamela from '../Imagenes/imgFotos/Pamela.jpeg' // Importa la imagen de Pamela

function QuienSomos() {
    return (
        <div className="bg-Fondo"> {/*div con el fondo de la página*/}
            <header> 
                <Header /> {/*header de la pagina*/}
            </header>
            
            <div className="mt-14 mx-4 bg-Containers rounded items-center border border-red-600 animate-slide-top"> {/*div contenedor*/}
                <br/>
                <div>
                    <h1 className="text-center mt-4 text-lg animate-slide-top2" style={{fontFamily: "Titulo"}}>¿Quienes somos? - Plant Oasis</h1> {/*titulo*/}
                </div>
                <div className="mt-4"> {/*div con texto*/}
                    <p 
                    className="text-justify mx-4 animate-slide-top3" style={{fontFamily: "Contenido"}}>Plant Oasis es una empresa que se encarga de la venta de una amplia selección de plantas de interior, cuidadosamente elegidas para agregar frescura y serenidad a tu vida diaria. Nuestro compromiso con la calidad y la pasión por las plantas garantizan que encontrarás la variedad perfecta para decorar tu hogar, purificar el aire y crear un ambiente tranquilo y rejuvenecedor.
                    </p>
                </div>

                <div className="p-1"> {/*div con titulo*/}
                    <h1 className="text-center mt-4 animate-slide-top4" style={{fontFamily: "Titulo"}}>¿Quienes somos? - Plant Oasis</h1>
                </div>
                <div className="mt-4">  {/*div con texto*/}
                    <p 
                    className="text-justify mx-4 animate-slide-top5" style={{fontFamily: "Contenido"}}>Plant Oasis es una empresa que se encarga de la venta de una amplia selección de plantas de interior, cuidadosamente elegidas para agregar frescura y serenidad a tu vida diaria. Nuestro compromiso con la calidad y la pasión por las plantas garantizan que encontrarás la variedad perfecta para decorar tu hogar, purificar el aire y crear un ambiente tranquilo y rejuvenecedor.
                    </p>
                </div>
                <br/>
            </div>

            <div className="mt-12 flex flex-wrap justify-center"> {/*div con las imagenes de los trabajadores*/}
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5 mx-24 my-4 animate-slide-right"> {/*div que ayuda al responsive*/}
                    <div className="border border-Cafe rounded-md bg-Containers p-4"> {/*div contenedor con ajustes de bordes*/}
                        <div className="flex flex-col justify-center items-center"> {/*div con flexbox*/}
                            <h1 className="font-bold mt-2" style={{ fontFamily: "Titulo" }}>Demian Binimelis</h1> {/*nombre Demian*/}
                            <img className="w-32 h-48 mt-4 border border-Cafe rounded-md" src={Demian} alt="Imagen 1" /> {/*imagen de Demian*/}
                            <p className="mx-4 mt-2 text-center text-sm" style={{ fontFamily: "Contenido" }}> {/*texto contenido*/}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus pulvinar leo.Maecenas elementum consectetur semper
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5 mx-24 my-4 animate-slide-left"> {/*div que ayuda al responsive*/}
                    <div className="border border-Cafe rounded-md bg-Containers p-4"> {/*div contenedor con ajustes de bordes*/}
                        <div className="flex flex-col justify-center items-center"> {/*div con flexbox*/}
                            <h1 className="text-lg font-bold mt-2" style={{ fontFamily: "Titulo" }}>Pamela Vielma</h1> {/*nombre Pamela*/}
                            <img className="w-32 h-48 mt-4 border border-Cafe rounded-md" src={Pamela} alt="Imagen 1" /> {/*imagen de Pamela*/}
                            <p className="mx-4 mt-2 text-center text-sm" style={{ fontFamily: "Contenido" }}> {/*texto contenido*/}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus pulvinar leo.Maecenas elementum consectetur semper
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <Footer/> {/*footer de la pagina*/}
            </footer>
           
        </div>
    );
}

export default QuienSomos;