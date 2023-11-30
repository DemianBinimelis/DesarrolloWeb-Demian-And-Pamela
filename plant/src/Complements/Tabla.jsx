import React from 'react';

// Imagenes para la tabla
import Agapanto from "../Imagenes/imgTabla/Agapanto.png";
import Albahaca from "../Imagenes/imgTabla/Albahaca.JPG";
import BocaDragon from "../Imagenes/imgTabla/Boca_De_Dragon.jpg";
import DienteLeon from "../Imagenes/imgTabla/Diente_De_Leon.JPG";
import NidoAve from "../Imagenes/imgTabla/Helecho_Nido_De_Ave.JPG";
import Nardo from "../Imagenes/imgTabla/Nardo.jpg";
import PaloAgua from "../Imagenes/imgTabla/Palo_De_Agua.jpg";
import PlantaDinero from "../Imagenes/imgTabla/Planta_Del_Dinero.JPG";

function PlantTable() {
    return (
        // Se crea una seccion con un padding
        <section className="p-4">
            <table className="table-auto ">
                <tr className="border-b border-Cafe">
                    <th className="px-4 py-2"> Plantas </th>
                    <td className="px-4 py-2"> Nardo </td>
                    <td className="px-4 py-2"> Agapanto </td>
                    <td className="px-4 py-2"> Palo de Agua </td>
                    <td className="px-4 py-2"> Planta del Dinero </td>
                    <td className="px-4 py-2"> Diente de León </td>
                    <td className="px-4 py-2"> Albahaca </td>
                    <td className="px-4 py-2"> Boca de Dragón </td>
                    <td className="px-4 py-2"> Nido de Ave </td>
                </tr>
                <tr className="border-b border-Cafe">
                    <th className="px-4 py-2"> Precios </th>
                    <td className="px-4 py-2"> 25.000 </td>
                    <td className="px-4 py-2"> 20.000 </td>
                    <td className="px-4 py-2"> 28.000 </td>
                    <td className="px-4 py-2"> 23.000 </td>
                    <td className="px-4 py-2"> 15.000 </td>
                    <td className="px-4 py-2"> 20.000 </td>
                    <td className="px-4 py-2"> 30.000 </td>
                    <td className="px-4 py-2"> 35.000 </td>
                </tr>
                <tr className="border-b border-Cafe">
                    <th className="px-4 py-2"> Imagenes </th>
                    <td className="px-4 py-2">
                        <img alt="" src={Agapanto} width="50" height="50"/>
                    </td>
                    
                    <td className="px-4 py-2">
                        <img alt="" src={Albahaca} width="50" height="50"/>
                    </td>
                    
                    <td className="px-4 py-2">
                        <img alt="" src={BocaDragon} width="50" height="50"/>    
                    </td>
                    
                    <td className="px-4 py-2">
                        <img alt="" src={DienteLeon} width="50" height="50"/>    
                    </td>
                    
                    <td className="px-4 py-2">
                        <img alt="" src={NidoAve} width="50" height="50"/>
                    </td>
                    
                    <td className="px-4 py-2">
                        <img alt="" src={Nardo} width="50" height="50"/>
                    </td>
                    
                    <td className="px-4 py-2">
                        <img alt="" src={PaloAgua} width="50" height="50"/>
                    </td>
                    
                    <td className="px-4 py-2">
                        <img alt="" src={PlantaDinero} width="50" height="50"/>
                    </td>
                </tr>
            </table>
            <br className="my-4" /><br className="my-4" />
        </section>
    );
}

export default PlantTable;
