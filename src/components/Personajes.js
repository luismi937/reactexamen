import React, { useEffect, useState } from 'react';
import API from '../services/API';
import { Link } from 'react-router-dom';

export default class Personajes extends Component {
    const [personajes, setPersonajes] = useState([]);
    useEffect(()=>{
        API.getPersonajes().then(r=>setPersonajes(r.data)).catch(()=>setPersonajes([]));
    },[]);
  return (
    <div>
      <h2>Personajes</h2>
      <div className="row">
        {personajes.map(pe => (
          <div className="col-md-4 mb-3" key={pe.id || pe.IdPersonaje || pe.Id}>
            <div className="card">
              { (pe.foto || pe.Imagen) && <img src={pe.foto || pe.Imagen} className="card-img-top" alt=""/> }
              <div className="card-body">
                <h5 className="card-title">{pe.nombre || pe.Nombre || pe.Descripcion}</h5>
                <Link className="btn btn-primary me-2" to={`/personajes/${pe.id || pe.IdPersonajes || pe.Id}`}>Ver Personaje</Link>
                <Link className="btn btn-secondary" to={`/personajes/${pe.id || pe.IdPersonaje || pe.Id}/series`}>personajes</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}