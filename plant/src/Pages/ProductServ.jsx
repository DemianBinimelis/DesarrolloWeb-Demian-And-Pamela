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

            <div className=" mt-14 mx-4 bg-Containers rounded border border-red-600">
                <div className="p-1">
                    <h1 className="text-center mt-4" style={{fontFamily: "Titulo"}}>Productos mas vendidos del mes</h1>
                </div>

                <div className="mt-8 flex flex-wrap justify-between" style={{fontFamily: "Contenido"}}>
                    <div className="w-1/4">
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-40" src={img1} alt="Imagen 1" />
                            <p className="text-center">Nombre del producto</p>
                            <p className="text-center">$000.00</p>
                        </div>
                    </div>
                    <div className="w-1/4">
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-40" src={img2} alt="Imagen 2" />
                            <p className="text-center">Nombre del producto</p>
                            <p className="text-center">$000.00</p>
                        </div>
                    </div>
                    <div className="w-1/4">
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-40 h-40" src={img3} alt="Imagen 3" />
                            <p className="text-center">Nombre del producto</p>
                            <p className="text-center">$000.00</p>
                        </div>
                    </div>
                    <div className="w-1/4">
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-40" src={img4} alt="Imagen 1" />
                            <p className="text-center">Nombre del producto</p>
                            <p className="text-center">$000.00</p>
                        </div>
                    </div>
                </div><br />
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