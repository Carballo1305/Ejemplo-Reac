import React from "react";
import api from "./Services/api.js";
import './RegistarProductos.css';

function RegistrarProductos() {

    const [title, setTitle] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [image, setImage] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nuevoProducto = {
            title,
            price,
            description,
            category,
            image
        };

        try {
            const response = await api.post("products", nuevoProducto);
            console.log("Producto registrado:", response.data);
            alert("¡Producto registrado correctamente! ");

            setTitle("");
            setPrice("");
            setDescription("");
            setCategory("");
            setImage("");

        } catch (error) {
            console.error("Error al registrar producto:", error);
            alert("Error al registrar producto ");
        }
    };

    return (
        <div>
            <h1>Registrar Nuevo Producto</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Título del producto"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Precio del producto"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Descripción del producto"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Categoría del producto"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Imagen URL del producto"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                <button type="submit">
                    Guardar Producto
                </button>

            </form>
        </div>
    );
}

export default RegistrarProductos;
