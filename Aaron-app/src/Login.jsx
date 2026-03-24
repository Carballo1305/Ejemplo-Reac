import React, { useState } from "react";
import usuario from "./usuario.png";
import "./Login.css";
import { useAuth } from "./AuthContext";
import api from "./Services/api";

const Login = ({ chVista }) => {
    const { login } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberPassword, setRememberPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const credenciales = { username, password };
        try {
            const respuesta = await api.post('/auth/login', credenciales);
            console.log('Respuesta del servidor:', respuesta.data);
            if (respuesta.data.token) {
                login(respuesta.data.token);
                alert('Autenticación exitosa');
                
            } else {
                alert('Credenciales inválidas');
            }
        } catch (error) {
            alert('Error', error);
            console.error('Error en la autenticación', error);
        }
    };

    return (
        <div className="login-container">
            <form  className="login-form" onSubmit={handleSubmit}>
                <img className="imagen" src={usuario} alt="Usuario" />
                <h2>Iniciar Sesión</h2>
                <label htmlFor="username">Usuario:</label>
                <input type="text" id="username" name="username" value={username} onChange={(e) => 
                    setUsername(e.target.value)} required />
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" value={password} 
                onChange={(e) => setPassword(e.target.value)} required />
                
                <div className="checkbox-container">
                    <input type="checkbox" id="recordar" name="recordar" checked={rememberPassword} onChange={(e) => setRememberPassword(e.target.checked)} />
                    <label>Recordar contraseña</label>
                </div>
                
                <button type="submit">Ingresar</button>
            </form>
        </div>
    );
}

export default Login;