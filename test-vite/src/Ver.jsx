import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

function Ver() {
    const {id} = useParams();
    const [estudiante, setEstudiante] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8082/ver/'+id)
        .then(res => {
          console.log(res);
          setEstudiante(res.data[0]);
        })
        .catch(err => console.log(err));
    }, []);

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className="w-50 bg-white rounded p-3">
        <div className="p-2">
          <h2>Detalles</h2>
          <h2>{estudiante.id}</h2>
          <h2>{estudiante.nombre}</h2>
          <h2>{estudiante.correo}</h2>
        </div>
        <Link to="/" className="btn btn-danger me-2">Regresar</Link>
        <button className='btn btn-info'>Editar</button>
        <Link to={`/editar/${estudiante.id}`} className='btn btn-info'></Link>
      </div>
    </div>
  )
}

export default Ver