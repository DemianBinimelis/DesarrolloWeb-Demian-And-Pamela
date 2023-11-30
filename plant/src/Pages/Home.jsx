import React from "react";
import Header from "../Complements/Header";
import Footer from "../Complements/Footer";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


import img1 from '../Imagenes/imgCarrusel/carruselimagen1.png'
import img2 from '../Imagenes/imgCarrusel/carruselimagen2.jpg'
import img3 from '../Imagenes/imgCarrusel/carruselimagen3.png'

import img3Venta from '../Imagenes/imgVentas/imagen3.png'
import img4Venta from '../Imagenes/imgVentas/imagen4.jpg'

function Home() {
    const SliderStyles = {
        '--slider-height-percentage': '40%',
        '--slider-transition-duration': '200ms',
        '--orgánico-flecha-espesor': '4px',
        '--organic-arrow-border-radius': '0px',
        '--orgánico-flecha-altura': '40px',
        '--orgánico-flecha-color': '#538bd5',
        '--control-botón-ancho': '10%',
        '--control-botón-altura': '20%',
        '--control-botón-fondo': 'transparente',
        '--control-bala-color': '#2d5182',
        '--control-bala-color-activo': '#26456f',
        '--cargador-bar-color': '#851515',
        '--cargador-bar-altura': '6px',
    };

    return (
        <div className="bg-Fondo">
            <header>
                <Header />
            </header>

            <div className="Container animate-slide-top">
                <AwesomeSlider style={SliderStyles}>
                    <div>
                        <img className="w-94" src={img1} alt="Imagen 1"/>
                    </div>
                    <div>
                        <img src={img2} alt="Imagen 2"/>
                    </div>
                    <div>
                        <img src={img3} alt="Imagen 3"/>
                    </div>
                </AwesomeSlider>
            </div>

            <div className="container mx-auto p-4 mt-20 animate-slide-top">
                <div className="bg-WhiteSuave rounded border border-Cafe p-4" style={{fontFamily:"Contenido"}}>
                    <h1 className="text-center mt-4 text-lg font-bold animate-slide-top" style={{fontFamily: "Titulo"}}>Productos más vendidos del mes</h1>

                    <div className="mt-4 flex flex-wrap justify-around animate-slide-top">
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
                            <div className="bg-white rounded border p-2 hover:border-Cafe duration-200">
                                <img className="mt-4 w-60 mx-auto mb-2 hover:scale-105 duration-300 rounded-sm" src={img4Venta} alt="Imagen 2" />
                                <p className="text-center">Maceta de adorno</p>
                                <p className="text-center">CLP 20.000</p>
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 animate-slide-top2">
                            <div className="bg-white rounded border p-2 hover:border-Cafe duration-200">
                                <img className="mt-4 w-60 mx-auto mb-2 hover:scale-105 duration-300 rounded-sm" src={img3Venta} alt="Imagen 2" />
                                <p className="text-center">Nombre del producto</p>
                                <p className="text-center">$000.00</p>
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 animate-slide-top3">
                            <div className="bg-white rounded border p-2 hover:border-Cafe duration-200">
                                <img className="mt-4 w-60 mx-auto mb-2 hover:scale-105 duration-300 rounded-sm" src={img4Venta} alt="Imagen 2" />
                                <p className="text-center">Nombre del producto</p>
                                <p className="text-center">$000.00</p>
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 animate-slide-top4">
                            <div className="bg-white rounded border p-2 hover:border-Cafe duration-200">
                                <img className="mt-4 w-60 mx-auto mb-2 hover:scale-105 duration-300 rounded-sm" src={img3Venta} alt="Imagen 2" />
                                <p className="text-center">Nombre del producto</p>
                                <p className="text-center">$000.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Home;