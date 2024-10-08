import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditarEstudiante() {
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8082/ver/'+id)
        .then(res => {
            console.log(res);
            setValues({...values, nombre: res.data[0].nombre, correo: res.data[0].correo});
        })
        .catch(err => console.log(err));
    }, []);

    const [values, setValues] = useState({
        nombre: '',
        correo: ''
    })

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8082/editar/'+id,values)
        .then(res => {
            console.log(res);
            navigate('/');
        })
        .catch(err => console.log(err)); 
    }

  return (
    <div className='d-flex vh-100 vw-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleUpdate}>
                <h2>Form Editar</h2>
                <div className='mb-2'>
                    <label htmlFor="">Nombre</label>
                    <input type="text" placeholder='Escriba nombre' className='form-control' value={values.nombre}
                    onChange={e => setValues({...values, nombre: e.target.value})} />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Nombre</label>
                    <input type="text" placeholder='Escriba nombre' className='form-control' value={values.correo}
                    onChange={e => setValues({...values, correo: e.target.value})} />
                </div>
                <button className='btn btn-success'>Guardar</button>
            </form>
        </div>
    </div>
  )
}

export default EditarEstudiante