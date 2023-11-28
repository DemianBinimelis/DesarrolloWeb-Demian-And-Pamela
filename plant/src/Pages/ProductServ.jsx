import React from "react";
import Header from "../Complements/Header";
import Footer from "../Complements/Footer";

import img1 from '../Imagenes/imgVentas/imagen1.jpg'
import img2 from '../Imagenes/imgVentas/imagen2.jpg'
import img3 from '../Imagenes/imgVentas/imagen3.jpg'
import img4 from '../Imagenes/imgVentas/imagen4.jpg'

function ProductServ() {
    return (
        <div className="bg-Fondo">
            <header>
                <Header />
            </header>

            <div className=" mt-14 mx-4 bg-Containers rounded ">
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
                            <img className="w-40 h-40" src={img3}  alt="Imagen 3"/>
                            <p className="text-center">Nombre del producto</p>
                            <p className="text-center">$000.00</p>
                        </div>
                    </div>
                    <div className="w-1/4">
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-40" src={img4} alt="Imagen 1"/>
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

export default ProductServ;