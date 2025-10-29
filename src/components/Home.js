 import React, { useEffect, useState } from 'react';
 import API from '../services/API';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home (){
    return <h1>Home</h1>
    const [personajes, setPersonajes] = useState([]);
    useEffect(()=>{
        API.getPersonajes().then(setPersonajes);
    },[]);
    return (
        <div>
            <h2>Personajes</h2>
            <Link to="/insertarPersonaje" className="btn btn-primary mb-3">InsertarPersonaje</Link>
            <table className ="table">
                <thead>
                    <tr>
                        <th>IdPersonaje</th>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>IdSerie</th>
                    </tr>
                </thead>
                <tbody>
                    {personajes.map(p=>{
                        return( <tr key={p.idPersonaje}>
                            <td>{p.idPersonaje}</td>
                            <td>{p.nombre}</td>
                            <td>{p.imagen}</td>
                            <td>{p.idSerie}</td>
                        </tr>)
                    })
                }
                </tbody>


            </table>
            </div>
    )
}


