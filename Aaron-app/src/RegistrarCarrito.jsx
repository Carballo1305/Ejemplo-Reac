import React, { useState } from "react";
import './Carrito.css';
import api from './Services/api.js';

function RegistrarCarrito() {

    const [userId, setUserId] = useState('');
    const [productId, setProductId] = useState('');
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nuevoCarrito = {
            userId: Number(userId),
            date: new Date(),
            products: [
                {
                    id: Number(productId),
                    title: title,
                    price: Number(price),
                    description: description,
                    category: category,
                    image: image
                }
            ]
        };

        try {
            const response = await api.post("carts", nuevoCarrito);
            console.log("Carrito registrado:", response.data);
            alert("¡Carrito guardado exitosamente! ");

            setUserId('');
            setProductId('');
            setPrice('');
            setTitle('');
            setDescription('');
            setCategory('');
            setImage('');

        } catch (error) {
            console.error("Error al registrar carrito:", error);
            alert("Error al registrar el carrito ");
        }
    };

    return (
        <div className="carrito-container">
            <div className="carrito-card">
                <h2>Registrar Carrito</h2>

                <form onSubmit={handleSubmit}>

                    <div className="carrito-productos">

                        <input
                            type="number"
                            placeholder="ID del Usuario"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            required
                        />

                        <input
                            type="number"
                            placeholder="ID del Producto"
                            value={productId}
                            onChange={(e) => setProductId(e.target.value)}
                            required
                        />

                        <input
                            type="number"
                            placeholder="Precio"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            placeholder="Título"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            placeholder="Categoría"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            placeholder="Descripción"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            placeholder="URL de la Imagen"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
                        />

                        <button type="submit" style={{ marginTop: "15px" }}>
                            Guardar Carrito
                        </button>

                    </div>

                </form>
            </div>
        </div>
    );
}

export default RegistrarCarrito;
