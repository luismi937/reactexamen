import { BrowserRouter as BrowseRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import InsertarPersonaje from './components/insertarPersonaje';
import ModificarPersonaje from './components/ModificarPersonaje';
import Series from './components/Series';
import Personajes from './components/Personajes';

export default  function Router(){
    return(

    <BrowseRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/insertarPersonaje' element={<InsertarPersonaje/>}/>
            <Route path='/modificarPersonaje/:id' element={<ModificarPersonaje/>}/>
            <Route path="/series" element={<Series/>}/>
            <Route path='/personajes' element={<Personajes/>}/>
        </Routes>
    </BrowseRouter>
);
}