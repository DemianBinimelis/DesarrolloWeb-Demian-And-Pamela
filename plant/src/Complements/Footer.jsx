// Importa la bibioteca React y las imagenes necesarias
import React from 'react';
import fbk from "../Imagenes/fbk.png"
import ig from "../Imagenes/ig.png"
import twt from "../Imagenes/twt.png"

export function Footer() {
    return (
        <div>
            {/* m= margen, bg= color, h= altura, p= padding */}
            <footer className="mt-32 flex bg-Footer flex-col border justify-centershadow">
                <div className="flex justify-between mt-2 p-4 mx-4 ">
                    {/* Parrafo que indica un titulo */}
                    <p className="mx-2 text-xl text-white font-semibold"> Plant Oasis</p>

                    {/* Enlaces a las diferentes redes sociales */}
                    <div className="flex flex-wrap">
                        <a href="https://www.facebook.com/"><img className="h-8 mx-2" src={fbk} alt=""/></a>
                        <a href="https://www.instagram.com"><img className="h-8 mx-2" src={ig} alt=""/></a>
                        <a href="https://www.twitter.com"><img className="h-8 mx-2" src={twt} alt=""/></a>
                    </div>
                </div>

                {/* Se hace una linea de color blanco */}
                <hr className="border-white"/>
                
                {/* Parrafos centados */}
                <div className="flex justify-center mt-2 p-4 mx-4">
                    <p className="text-white mx-2">adipiscing</p>
                    <p className="text-white mx-2">adipiscing</p>
                    <p className="text-white mx-2">adipiscing</p>
                    <p className="text-white mx-2">adipiscing</p>
                    <p className="text-white mx-2">adipiscing</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;