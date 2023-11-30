import React from "react";
// Importa los componentes header y footer de la carpeta complements
import Header from "../Complements/Header";
import Footer from "../Complements/Footer";

// Importa las imagenes necesarias
import img1 from '../Imagenes/imgVentas/imagen1.jpg'
import img2 from '../Imagenes/imgVentas/imagen2.jpg'

function ProductServ() {
    return (
        // Crea un div con un color especifico
        <div className="bg-Fondo">
            {/* Implementa el componente Header */}
            <header>
                <Header />
            </header>

            {/* Contenedor general */}
            <div className="container mx-auto p-4 mt-20 animate-slide-top">
                <div className="bg-WhiteSuave rounded border border-Cafe p-4" style={{fontFamily:"Contenido"}}>
                    {/* Titulo del contenedor */}
                    <h1 className="text-center mt-4 text-lg font-bold animate-slide-top" style={{fontFamily: "Titulo"}}>Productos más vendidos del mes</h1>

                    {/* Contenedor de algunos productos */}
                    <div className="mt-4 flex flex-wrap justify-around animate-slide-top">
                        {/* Contenedor de un producto que ayuda al responsive */}
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
                            <div className="bg-white rounded border p-2 hover:border-Cafe duration-200">
                                {/* Imagen del producto */}
                                <img className="mt-4 w-60 mx-auto mb-2 hover:scale-105 duration-300 rounded-sm" src={img1} alt="Imagen 2" />
                                {/* Nombre del producto */}
                                <p className="text-center">Macetero pequeno</p>
                                {/* Valor del producto */}
                                <p className="text-center">CLP 5.000</p>
                            </div>
                        </div>
                        {/* Contenedor de un producto que ayuda al responsive */}
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 animate-slide-top2">
                            <div className="bg-white rounded border p-2 hover:border-Cafe duration-200"> {/* Contenedor de un producto */}
                                {/* Imagen del producto */}
                                <img className="mt-4 w-60 mx-auto mb-2 hover:scale-105 duration-300 rounded-sm" src={img2} alt="Imagen 2" /> 
                                <p className="text-center">Maceta pequena gris</p> {/* Nombre del producto */}
                                <p className="text-center">CLP 5.000</p> {/* Valor del producto */}
                            </div>
                        </div>
                        {/* Contenedor de un producto que ayuda al responsive */}
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 animate-slide-top3">
                            <div className="bg-white rounded border p-2 hover:border-Cafe duration-200"> {/* Contenedor de un producto */}
                                {/* Imagen del producto */}
                                <img className="mt-4 w-60 mx-auto mb-2 hover:scale-105 duration-300 rounded-sm" src={img1} alt="Imagen 2" />
                                <p className="text-center">Macetero pequeno</p> {/* Nombre del producto */}
                                <p className="text-center">CLP 5.000</p> {/* Valor del producto */}
                            </div>
                        </div>
                        {/* Contenedor de un producto que ayuda al responsive */}
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 animate-slide-top4">
                            <div className="bg-white rounded border p-2 hover:border-Cafe duration-200"> {/* Contenedor de un producto */}
                                {/* Imagen del producto */}
                                <img className="mt-4 w-60 mx-auto mb-2 hover:scale-105 duration-300 rounded-sm" src={img2} alt="Imagen 2" />
                                <p className="text-center">Maceta pequena gris</p> {/* Nombre del producto */}
                                <p className="text-center">CLP 5.000</p>{/* Valor del producto */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Otro div para nuevo contenido */}
            <div className="mx-4 mt-14 bg-Containers rounded border border-red-600 animate-slide-top">
                <div className="mx-4">
                    {/* Titulo del contenido */}
                    <div className="p-1">
                        <h1 className="text-center mt-4 animate-slide-top2" style={{fontFamily: "Titulo"}}>Metodo de envio</h1>
                    </div>
                    {/* Contenido informativo */}
                    <div className="mt-8 flex flex-wrap justify-between animate-slide-top3" style={{fontFamily: "Contenido"}}>
                        <p>Una vez efectuado el pago, los productos comprados son cuidadoseame empaquetados con los datos del usuario,
                            luego son enviados por nuestra misma empresa a traves de "Oasis Express" hacia todo el país, el usuario
                            recibira un numero unico que será utilizado para el rastreo de su pedido desde que sale del local hasta
                            que llega a su hogar.</p><br />
                    </div>
                </div>
            </div>

            {/* Implementa el componente Footer */}
            <footer>
                <Footer />
            </footer>

        </div>
    )
}

export default ProductServ;