import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AgregarEstudiante() {

    const [values, setValues] = useState({
        nombre: '',
        correo: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8082/estudiante',values)
        .then(res => {
            console.log(res);
            navigate('/');
        })
        .catch(err => console.log(err));
    }

  return (
    <div className='d-flex vh-100 vw-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Form Agregar</h2>
                <div className='mb-2'>
                    <label htmlFor="">Nombre</label>
                    <input type="text" placeholder='Escriba nombre' className='form-control' onChange={e => setValues({...values, nombre: e.target.value})} />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Correo</label>
                    <input type="text" placeholder='Escriba correo' className='form-control' onChange={e => setValues({...values, correo: e.target.value})} />
                </div>
                <button className='btn btn-success'>Agregar</button>
            </form>
        </div>
    </div>
  )
}

export default AgregarEstudiante