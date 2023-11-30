import React from "react";
import Header from "../Complements/Header";
import Footer from "../Complements/Footer";

import img1 from '../Imagenes/imgVentas/imagen1.jpg'
import img2 from '../Imagenes/imgVentas/imagen2.jpg'


function ProductServ() {
    return (
        <div className="bg-Fondo">
            <header>
                <Header />
            </header>

            <div className="container mx-auto p-4 mt-20 ">
                <div className="bg-WhiteSuave rounded border border-Cafe p-4" style={{fontFamily:"Contenido"}}>
                    <h1 className="text-center mt-4 text-lg font-bold" style={{fontFamily: "Titulo"}}>Productos más vendidos del mes</h1>

                    <div className="mt-4 flex flex-wrap justify-around">
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
                            <div className="bg-white rounded border p-2 hover:border-Cafe duration-200">
                                <img className="mt-4 w-60 mx-auto mb-2 hover:scale-105 duration-300 rounded-sm" src={img1} alt="Imagen 2" />
                                <p className="text-center">Nombre del producto</p>
                                <p className="text-center">$000.00</p>
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
                            <div className="bg-white rounded border p-2 hover:border-Cafe duration-200">
                                <img className="mt-4 w-60 mx-auto mb-2 hover:scale-105 duration-300 rounded-sm" src={img2} alt="Imagen 2" />
                                <p className="text-center">Nombre del producto</p>
                                <p className="text-center">$000.00</p>
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
                            <div className="bg-white rounded border p-2 hover:border-Cafe duration-200">
                                <img className="mt-4 w-60 mx-auto mb-2 hover:scale-105 duration-300 rounded-sm" src={img1} alt="Imagen 2" />
                                <p className="text-center">Nombre del producto</p>
                                <p className="text-center">$000.00</p>
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
                            <div className="bg-white rounded border p-2 hover:border-Cafe duration-200">
                                <img className="mt-4 w-60 mx-auto mb-2 hover:scale-105 duration-300 rounded-sm" src={img2} alt="Imagen 2" />
                                <p className="text-center">Nombre del producto</p>
                                <p className="text-center">$000.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-4 mt-14 bg-Containers rounded border border-red-600">
                <div className="mx-4">
                    <div className="p-1">
                        <h1 className="text-center mt-4" style={{fontFamily: "Titulo"}}>Metodo de envio</h1>
                    </div>
                    <div className="mt-8 flex flex-wrap justify-between" style={{fontFamily: "Contenido"}}>
                        <p>Una vez efectuado el pago, los productos comprados son cuidadoseame empaquetados con los datos del usuario,
                            luego son enviados por nuestra misma empresa a traves de "Oasis Express" hacia todo el país, el usuario
                            recibira un numero unico que será utilizado para el rastreo de su pedido desde que sale del local hasta
                            que llega a su hogar.</p><br />
                    </div>
                </div>
            </div>

            <footer>
                <Footer />
            </footer>

        </div>
    )
}

export default ProductServ;