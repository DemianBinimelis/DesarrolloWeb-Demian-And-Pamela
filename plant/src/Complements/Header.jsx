import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
        <section>
            <header className="flex flex-wrap bg-WhiteSuave h-24 justify-between items-center shadow-md">
                
                <nav className="px-8 text-xl justify-between" style={{fontFamily:"Titulo"}}>
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