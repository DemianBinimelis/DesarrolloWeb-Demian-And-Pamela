import React from 'react';
import Header from '../Complements/Header';
import Footer from '../Complements/Footer';

function Acceder(){
    return(
        <div className="bg-Fondo">
            <header>
                <Header />
            </header>
            
            <div className="mt-20 flex flex-wrap justify-center" style={{fontFamily:"Contenido"}}>
                <div className="mx-auto w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 animate-slide-right" >
                    <div className="border border-Cafe rounded-md bg-Containers p-4" >
                        <h1 className='text-lg font-bold mt-4' style={{fontFamily:"Titulo"}}>
                            Iniciar Sesión
                        </h1>
                        <form action="" className='mt-2'>
                            <div className='mt-2 flex flex-col'>
                                <label htmlFor="">Correo:</label>
                                <input className='bg-transparent border-0 border-b outline-none border-Cafe text-black px-4 rounded-md' type="text" />
                            </div>

                            <div className='mt-4 flex flex-col'>
                                <label htmlFor="">Contraseña:</label>
                                <input className='bg-transparent border-0 border-b outline-none border-Cafe text-black px-4 rounded-md' type="text" />

                                <input className='mt-4 px-4 py-1 w-full sm:w-24 text-center rounded     text-black duration-300 hover:text-white hover:bg-Cafe' type="submit" />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mx-auto w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 animate-slide-left" >
                    <div className="border border-Cafe rounded-md bg-Containers p-4">
                        <h1 className='text-lg font-bold mt-4' style={{ fontFamily: "Titulo" }}>Registrarse</h1>
                        <form action="" className='mt-2'>
                            <div className='mt-2 flex flex-col'>
                                <label htmlFor="">Nombre de usuario:</label>
                                <input className='bg-transparent border-0 border-b outline-none border-Cafe text-black px-4 rounded-md' type="text" />
                            </div>

                            <div className='mt-8 flex flex-col'>
                                <label htmlFor="">Rut de usuario:</label>
                                <input className='bg-transparent border-0 border-b outline-none border-Cafe text-black px-4 rounded-md' type="text" />
                            </div>

                            <div className='mt-8 flex flex-col'>
                                <label htmlFor="">Correo electrónico:</label>
                                <input className='bg-transparent border-0 border-b outline-none border-Cafe text-black px-4 rounded-md' type="text" />
                            </div>

                            <div className='mt-8 flex flex-col'>
                                <label htmlFor="">Contraseña:</label>
                                <input className='bg-transparent border-0 border-b outline-none border-Cafe text-black px-4 rounded-md' type="text" />
                            </div>

                            <div className='mt-8 flex flex-col'>
                                <label htmlFor="">Dirección:</label>
                                <input className='bg-transparent border-0 border-b outline-none border-Cafe text-black px-4 rounded-md' type="text" />

                                <input className='mt-4 px-4 py-1 w-full sm:w-24 text-center rounded text-black duration-300 hover:text-white hover:bg-Cafe' type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Acceder;