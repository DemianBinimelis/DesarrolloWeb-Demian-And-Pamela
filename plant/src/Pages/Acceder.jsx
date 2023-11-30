import React from 'react';
import Header from '../Complements/Header';
import Footer from '../Complements/Footer';

function Acceder(){
    return(
        <div className="bg-Fondo">
            <header>
                <Header />
            </header>
            
            <div className="mt-20 flex flex-wrap justify-center">
                <div className="mx-auto w-1/5 h-1/4 border border-Cafe rounded-md bg-Containers">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className='mt-4' style={{fontFamily: "Titulo"}}>Iniciar Sesion</h1>
                        <br/>
                        <form action="" style={{fontFamily: "Container"}}>
                            <div className='mt-2 flex flex-col'> 
                                <label htmlFor="">Correo:</label>
                                <input className='bg-transparent border-0 border-b outline-none border-Cafe text-black px-4 rounded-md' type="text" />
                            </div>
                            
                            <div className='mt-8 flex flex-col'>
                                <label htmlFor="">Contraseña:</label>
                                <input className='bg-transparent border-0 border-b outline-none border-Cafe text-black px-4 rounded-md' type="text"/>

                                <input className='mt-4 px-4 py-1 w-24 text-center rounded text-black duration-300 hover:text-white hover:bg-Cafe'  type="submit"/>
                            </div>

                        </form>
                        <br/>
                    </div>
                </div>

                <div className="mx-auto w-1/5 border border-Cafe rounded-md bg-Containers">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className='mt-4' style={{fontFamily: "Titulo"}}>Registrarse</h1>
                        <br/>
                        <form action="" style={{fontFamily: "Container"}}>
                            <div className='mt-2 flex flex-col'> 
                                <label htmlFor="">Nombre de usuario:</label>
                                <input className='bg-transparent border-0 border-b outline-none border-Cafe text-black px-4 rounded-md' type="text" />
                            </div>
                            
                            <div className='mt-8 flex flex-col'>
                                <label htmlFor="">Rut de usuario:</label>
                                <input className='bg-transparent border-0 border-b outline-none border-Cafe text-black px-4 rounded-md' type="text"/>
                            </div>

                            <div className='mt-8 flex flex-col'>
                                <label htmlFor="">Correo electronico:</label>
                                <input className='bg-transparent border-0 border-b outline-none border-Cafe text-black px-4 rounded-md' type="text"/>
                            </div>

                            <div className='mt-8 flex flex-col'>
                                <label htmlFor="">Contraseña:</label>
                                <input className='bg-transparent border-0 border-b outline-none border-Cafe text-black px-4 rounded-md' type="text"/>
                            </div>

                            <div className='mt-8 flex flex-col'>
                                <label htmlFor="">Direccion</label>
                                <input className='bg-transparent border-0 border-b outline-none border-Cafe text-black px-4 rounded-md' type="text"/>

                                <input className='mt-4 px-4 py-1 w-24 text-center rounded text-black duration-300 hover:text-white hover:bg-Cafe'  type="submit"/>
                            </div>
                        </form>
                        <br/>
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