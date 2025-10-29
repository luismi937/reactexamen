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
        {personajes.map(eq => (
          <div className="col-md-4 mb-3" key={eq.id || eq.IdPersonaje || eq.Id}>
            <div className="card">
              { (eq.foto || eq.Imagen) && <img src={eq.foto || eq.Imagen} className="card-img-top" alt=""/> }
              <div className="card-body">
                <h5 className="card-title">{eq.nombre || eq.Nombre || eq.Descripcion}</h5>
                <Link className="btn btn-primary me-2" to={`/personajes/${eq.id || eq.IdPersonajes || eq.Id}`}>Ver Personaje</Link>
                <Link className="btn btn-secondary" to={`/personajes/${eq.id || eq.IdPersonaje || eq.Id}/series`}>personajes</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}