import React from 'react';
import { Table } from 'reactstrap';
const List = (props) => {
    const { repos } = props;
    if (!repos || repos.length === 0) return <p className="vacio">No hay registros para mostrar</p>;
    return (
        <Table bordered className="tabla-color">
               <thead className="tabla-color">
        <tr>
             <th>Id</th>
            <th>Login</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Estado</th>
            <th>Actualización</th>
            <th>Escojer</th>
        </tr>
        </thead>
        <tbody className="tabla-color">
            {repos.map((repo) => {
                return (
                    <tr key={repo.usuario_id} >
                        <td>{repo.usuario_id}</td>
                        <td>{repo.usuario_login}</td>
                        <td>{repo.nombres}</td>
                        <td>{repo.primer_apellido +" "+repo.segundo_apellido }</td>
                        <td>{repo.codigo_estado }</td>
                        <td>{repo.fecha_actualizacion }</td>
                        <td><button onClick={()=>props.choosePerson(repo.usuario_id)} >Escojer</button></td>
                    </tr>
                );
            })}
            </tbody>
       </Table>
    );
};
export default List;