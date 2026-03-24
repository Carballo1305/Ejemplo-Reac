import React, { useState, useEffect } from "react";
import './Carrito.css';
import api from './Services/api.js';
import RegistrarCarrito from "./RegistrarCarrito.jsx";

function Carrito(){
    const [carritos, setCarritos] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const obtenerCarritos = async () => {
            try {
                const response = await api.get("carts");
                setCarritos(response.data || response.data.carts || []);
            } catch (error) {
                console.error("Error al obtener carritos:", error);
            } finally {
                setLoading(false);
            }
        };

        obtenerCarritos();
    }, []);

    if (loading) {
        return <p>Cargando carritos...</p>;
    }

    return (
       <>
            <RegistrarCarrito />

        <div className="carrito-container">
            <h2 id="tituloCarrito">Todos los Carritos</h2>
            
            {carritos.length === 0 ? (
                <p>No hay carritos</p>
            ) : (
                <div className="carritos-lista">
                    {carritos.map((carrito) => (
                        <div key={carrito.id} className="carrito-card">
                            <div className="carrito-header">
                                <h3>Carrito ID: {carrito.id}</h3>
                                <p><strong>Usuario:</strong> {carrito.userId}</p>
                                <p><strong>Fecha:</strong> {new Date(carrito.date).toLocaleDateString()}</p>
                            </div>

                            <div className="carrito-productos">
                                <h4>Productos:</h4>
                                {carrito.products && carrito.products.length > 0 ? (
                                    <ul>
                                        {carrito.products.map((product) => (
                                            <li key={product.productId}>
                                                <span>Producto ID: {product.productId}</span>
                                                <span>Cantidad: {product.quantity}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>Sin productos</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </>
    );
}


export default Carrito;