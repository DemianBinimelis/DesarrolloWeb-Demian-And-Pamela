import React from "react";
import Header from "../Complements/Header";
import Footer from "../Complements/Footer";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


import img1 from '../Imagenes/imgCarrusel/carruselimagen1.jpg'
import img2 from '../Imagenes/imgCarrusel/carruselimagen2.jpg'
import img3 from '../Imagenes/imgCarrusel/carruselimagen3.jpg'

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

            <div className="Container">
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

            <div className=" mt-14 mx-4 bg-WhiteSuave rounded border border-Cafe">
                <div className="p-1">
                    <h1 className="text-center mt-4">Productos mas vendidos del mes</h1>
                </div>
                
                <div className="mt-8 flex flex-wrap justify-between">
                    <div className="w-1/4">
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-40" src={img1} alt="Imagen 1"/>
                            <p className="text-center">Nombre del producto</p>
                            <p className="text-center">$000.00</p>
                        </div>
                    </div>
                    <div className="w-1/4">
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-40" src={img2} alt="Imagen 2"/>
                            <p className="text-center">Nombre del producto</p>
                            <p className="text-center">$000.00</p>
                        </div>
                    </div>
                    <div className="w-1/4">
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-40" src={img3} alt="Imagen 3"/>
                            <p className="text-center">Nombre del producto</p>
                            <p className="text-center">$000.00</p>
                        </div>
                    </div>
                    <div className="w-1/4">
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-40" src={img1} alt="Imagen 1"/>
                            <p className="text-center">Nombre del producto</p>
                            <p className="text-center">$000.00</p>
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