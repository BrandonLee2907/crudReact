import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function Home(){
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8082/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete('http://localhost:8082/eliminar/'+id)
        .then(res => {
            location.reload();
        })
        .catch(err => console.log(err));
    }

    return(
        <div className="d-flex vh-100 vw-100 bg-primary justify-content-center align-items-center">
            <div className="w-50  bg-white rounded p-3">
                <h2>Lista estudiantes</h2>
                <div className="d-flex justify-contend-end">
                    <Link to="/agregarEstudiante" className="btn btn-success">Agregar</Link>
                </div>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        { data.map((estudiantes,index) => {

                            return <tr key={index}>
                                <td>{estudiantes.id}</td>
                                <td>{estudiantes.nombre}</td>
                                <td>{estudiantes.correo}</td>
                                <td>
                                    <Link to={`/ver/${estudiantes.id}`} className="btn btn-sm btn-info">Ver</Link>
                                    <Link to={`/editar/${estudiante.id}`} className="btn btn-sm btn-primary mx-2">Editar</Link>
                                    <button onClick={ () => handleDelete(estudiante.id) } className="btn btn-sm btn-danger">Eliminar</button>
                                </td>
                            </tr>

                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;