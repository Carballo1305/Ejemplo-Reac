import { useEffect, useState } from "react";
import api from './Services/api.js';
import './Usuarios.css';
import RegistrarUsuario from "./RegistrarUsuario.jsx";

function Usuarios(){
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [usuarioEditado, setUsuarioEditado] = useState(null);
    
    const obtenerUsuarios = async () => {
            try {
                const response = await api.get("users");
                setUsuarios(response.data.users || response.data);
            } catch (error) {
                console.error("Error al obtener usuarios:", error);
            } finally {
                setLoading(false);
            }
        };

    useEffect(() => {
        obtenerUsuarios();
    }, []);

    if (loading) {
        return <p>Cargando usuarios...</p>;
    }

    const removeUsuario = async (usuarioId) => {
        try {
            const response = await api.delete(
                `/users/${usuarioId}`
            );
            console.log("Usuario eliminado:", response.data);
            alert("Usuario eliminado exitosamente");
            obtenerUsuarios();
        } catch (error) {
            console.error("Error al eliminar usuario:", error);
            alert("Error al eliminar usuario");
        }
    };

    return (
           <><RegistrarUsuario
           usuarioEditado={usuarioEditado}
           limpiarSeleccion={()=>setUsuarioEditado(null)}
           onActualizarUsuario={obtenerUsuarios} />
           <div className="tabla_usuarios_container">
            <h1>Usuarios Registrados</h1>
            <table className="tabla-usuarios">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Telefono</th>
                        <th>Email</th>
                        <th>Ciudad</th>
                        <th>Editar</th>
                        <th>Eliminar </th>

                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.name.firstname}</td>
                            <td>{usuario.name.lastname}</td>
                            <td>{usuario.phone}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.address.city}</td>
                            <td>
                                <button className="editar-btn" onClick={()=>setUsuarioEditado(usuario)}>Editar</button>
                            </td>
                            <td>
                                <button className="eliminar-btn" onClick={() => removeUsuario(usuario.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div></>
    );
}
export default Usuarios;