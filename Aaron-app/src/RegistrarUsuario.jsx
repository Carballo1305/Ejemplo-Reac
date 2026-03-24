import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "./Services/api.js";
import "./RegistrarUsuario.css";
import { use } from "react";

function RegistrarUsuario({
  usuarioEditado,
  limpiarSeleccion,
  onActualizarUsuario,
}) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  useEffect(() => {
    if (usuarioEditado) {
      setName(usuarioEditado.name);
      setEmail(usuarioEditado.email);
      setPassword("");
    } else {
      resetForm();
    }
  }, [usuarioEditado]);
  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoUsuario = { name, email, password };

    try {
      if (usuarioEditado) {
        const respuesta = await api.put(
          `users/${usuarioEditado.id}`,
          nuevoUsuario,
        );
        console.log("Usuario actualizado:", respuesta.data);
        alert("Usuario actualizado exitosamente");
        limpiarSeleccion();
      } else {
        const respuesta = await api.post("users", nuevoUsuario);
        console.log("Usuario registrado:", respuesta.data);
        alert("Usuario registrado exitosamente");
      }
      resetForm();
      if (onActualizarUsuario) onActualizarUsuario();
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      alert("Error al registrar usuario. Por favor, inténtalo de nuevo.");
    }
  };
  return (
    <div>
      <h1>Registrar Nuevo Usuario</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Guardar Usuario</button>
      </form>
    </div>
  );
}

export default RegistrarUsuario;
