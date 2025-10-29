import React, { useState } from 'react';
import API from '../services/API';
import { useNavigate } from 'react-router-dom';

export default function InsertarPersonaje(){
  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState('');
  const [IdSerie, setIdSerie] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    const personaje = {
      idPersonaje: 0, // valor no importante pero requerido
      Nombre: nombre,
      Imagen: imagen,
      IdSerie: IdSerie
    };
    setLoading(true);
    API.postPersonaje(personaje)
      .then(()=>{
        setLoading(false);
        navigate('/apuestas');
      })
      .catch(()=>{ setLoading(false); alert('Error al insertar apuesta'); });
  }

  return (
    <div>
      <h2>Nuevo personaje</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input className="form-control" value={nombre} onChange={e=>setNombre(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Imagen (texto)</label>
          <input className="form-control" value={imagen} onChange={e=>setImagen(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">id Serie</label>
          <input type="date" className="form-control" value={IdSerie} onChange={e=>setIdSerie(e.target.value)} required />
        </div>
        <button className="btn btn-primary" type="submit" disabled={loading}>{loading ? 'Enviando...' : 'Enviar personaje'}</button>
      </form>
    </div>
  );
}