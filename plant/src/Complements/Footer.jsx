import React from 'react';
import fbk from "../Imagenes/fbk.png"
import ig from "../Imagenes/ig.png"
import twt from "../Imagenes/twt.png"

export function Footer() {
    return (
        <div>
            <footer className="mt-32 flex bg-Footer flex-col border justify-center bg-teal-500 shadow">
                <div className="flex justify-between mt-2 p-4 mx-4 ">

                    <p className="mx-2 text-xl text-white font-semibold"> ipsum dolor sit</p>

                    <div className="flex flex-wrap">
                        <a href="https://www.facebook.com/"><img className="h-8 mx-2" src={fbk} alt=""/></a>
                        <a href="https://www.instagram.com"><img className="h-8 mx-2" src={ig} alt=""/></a>
                        <a href="https://www.twitter.com"><img className="h-8 mx-2" src={twt} alt=""/></a>
                    </div>
                </div>

                <hr className="border-white"/>
                
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