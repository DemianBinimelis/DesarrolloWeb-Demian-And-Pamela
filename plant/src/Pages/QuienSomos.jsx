import React from "react";
import Header from "../Complements/Header";
import Footer from "../Complements/Footer";

import Demian from '../Imagenes/imgFotos/Demian.jpeg'
import Pamela from '../Imagenes/imgFotos/Pamela.jpeg'

function QuienSomos() {
    return (
        <div className="bg-Fondo">
            <header>
                <Header /> 
            </header>
            <div className=" mt-14 mx-4 bg-Containers rounded items-center">
                <br/>
                <div>
                    <h1 className="text-center mt-4">¿Quienes somos? - Plant Oasis</h1>
                </div>
                <div className="mt-4">
                    <p 
                    className="text-justify mx-4">Plant Oasis es una empresa que se encarga de la venta de una amplia selección de plantas de interior, cuidadosamente elegidas para agregar frescura y serenidad a tu vida diaria. Nuestro compromiso con la calidad y la pasión por las plantas garantizan que encontrarás la variedad perfecta para decorar tu hogar, purificar el aire y crear un ambiente tranquilo y rejuvenecedor.
                    </p>
                </div>

                <div className="p-1">
                    <h1 className="text-center mt-4">¿Quienes somos? - Plant Oasis</h1>
                </div>
                <div className="mt-4">
                    <p 
                    className="text-justify mx-4">Plant Oasis es una empresa que se encarga de la venta de una amplia selección de plantas de interior, cuidadosamente elegidas para agregar frescura y serenidad a tu vida diaria. Nuestro compromiso con la calidad y la pasión por las plantas garantizan que encontrarás la variedad perfecta para decorar tu hogar, purificar el aire y crear un ambiente tranquilo y rejuvenecedor.
                    </p>
                </div>
                <br/>
            </div>

            <div className="mt-12 flex flex-wrap justify-center">
                <div className="w-1/5 mx-auto border border-Cafe rounded-md bg-Containers">
                    <div className="flex flex-col justify-center items-center">
                        <br/>
                        <h1>Demian Binimelis</h1>
                        <img className="w-32 mt-4 border border-Cafe rounded-md" src={Demian} alt="Imagen 1"/>
                        <p className="mt-2 text-center text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus pulvinar leo. Maecenas elementum consectetur semper
                        </p>
                        <br/>
                    </div>
                </div>
                <div className="w-1/5 mx-auto border border-Cafe rounded-md bg-Containers">
                    <div className="flex flex-col justify-center items-center">
                        <br/>
                        <h1>Pamela Vielma</h1>
                        <img className="w-32 mt-4 border border-Cafe rounded-md" src={Pamela} alt="Imagen 1"/>
                        <p className="mt-2 text-center text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus pulvinar leo. Maecenas elementum consectetur semper
                        </p>
                        <br/>
                    </div>
                </div>
            </div>

            <footer>
                <Footer/>
            </footer>
           
        </div>
    );
}

export default QuienSomos;