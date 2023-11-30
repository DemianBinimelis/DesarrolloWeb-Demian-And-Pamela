// Componentes necesarios para las rutas
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importacion de paginas 
import Home from "./Pages/Home.jsx";
import Productos from "./Pages/ProductServ.jsx";
import QuienesSomos from "./Pages/QuienSomos.jsx";
import Contacto from "./Pages/Contact.jsx";
import Acceder from './Pages/Acceder.jsx';


function App() {
  return (
    // Proporciona funcionalidad de enrutamiento
    <BrowserRouter>
      <Routes> {/* definicion de rutas a utilizarse */}
        {/* Route define cada ruta a utilizarse  */}
        <Route path='/' element={<Home />} />
        <Route path='/ProductServ' element={<Productos/>} />
        <Route path='/QuienSomos' element={<QuienesSomos/>} />
        <Route path='/Contact' element={<Contacto/>} />
        <Route path='/Acceder' element={<Acceder/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
