import React from "react";
// Link es un componente de react-router-dom, sirve para navegar entre paginas
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
        <section>
            {/* Indica un encabezado color blanco suave con una altura especifica */}
            <header className="flex flex-wrap bg-WhiteSuave h-24 justify-between items-center shadow-md">
                {/* Inicia la barra de navegacion */}
                <nav className="px-8 text-xl justify-between" style={{fontFamily:"Titulo"}}>
                    {/* Se crean los link que llevan a distintas paginas del nav */}
                    <Link to="/" className="mx-4 px-4 py-1 text-center rounded text-Cafe duration-300 hover:text-white hover:bg-Cafe">
                        Home
                    </Link>

                    <Link to="/ProductServ" className="mx-4 px-4 py-1 text-center rounded text-Cafe duration-300 hover:text-white hover:bg-Cafe">
                        Productos y servicios
                    </Link>

                    <Link to="/QuienSomos" className="mx-4 px-4 py-1 text-center rounded text-Cafe duration-300 hover:text-white hover:bg-Cafe">
                        ¿Quienes somos?
                    </Link>

                    <Link to="/Contact" className="mx-4 px-4 py-1 text-center rounded text-Cafe duration-300 hover:text-white hover:bg-Cafe">
                        Contacto
                    </Link>

                    <Link to="/Acceder" className="mx-4 px-4 py-1 text-center rounded text-Cafe duration-300 hover:text-white hover:bg-Cafe">
                        Acceder
                    </Link>
                </nav>
            </header>
        </section>
    </div>
  );
}

export default Header;