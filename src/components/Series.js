import React, { useEffect, useState } from 'react';
import API from '../services/API';
import { Link } from 'react-router-dom';

export default function PaginaSeries(){
  const [series, setSeries] = useState(null);
  const [error, setError] = useState(null);

  function load(){
    API.getSeries().then(r=>setSeries(r.data)).catch(()=>setError('No se pudieron cargar las Series'));
  }

  useEffect(()=>{ load(); },[]);

  function handleDelete(id){
    if(!window.confirm('¿Borrar Serie?')) return;
    API.deleteSerie(id).then(()=>load()).catch(()=>alert('Error al borrar'));
  }

  if(error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div>
      <h2>Series</h2>
      <Link className="btn btn-success mb-3" to="/insertarPersonaje/">Personaje Nuevo</Link>
      <table className="table table-striped">
        <thead>
          <tr><th>Id</th><th>Nombre</th><th>Imagen</th><th>Serie</th></tr>
        </thead>
        <tbody>
          {series.map(a=> (
            <tr key={a.IdSerie || a.id}>
              <td>{a.IdSerie|| a.id}</td>
              <td>{a.Nombre || a.Nomnbre}</td>
              <td>{a.Imagen || a.Imagen}</td>
              <td>{a.Serie || a.serie}</td>
              <td>
                <button className="btn btn-sm btn-danger" onClick={()=>handleDelete(a.IdSerie || a.id)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}