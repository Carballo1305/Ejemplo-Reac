import './Productos.css';
import ContenedorCards from './cards';
import { useEffect, useState } from "react";
import api from './Services/api.js';
import RegistrarProductos from './RegistrarProductos';

function Productos({ agregarAlCarrito }) {

    const [productos, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const response = await api.get("products");
                setProducts(response.data.products || response.data);
            } catch (error) {
                console.error("Error al obtener productos:", error);
            } finally {
                setLoading(false);
            }
        };

        obtenerProductos();
    }, []);

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    return (
        <div>

            <RegistrarProductos />

            <header className="header-titulo">
                <h1>Nuestro Catálogo</h1>
            </header>

            <main className="classMain">
                {Array.isArray(productos) && productos.map((producto) => (
                    <article className="product-card" key={producto.id}>
                        <img src={producto.image} alt={producto.title} />
                        <h2>{producto.title}</h2>
                        <h3>${producto.price}</h3>
                        <span>{producto.category}</span>
                        <button onClick={() => agregarAlCarrito(producto)}>Comprar</button>
                    </article>
                ))}
            </main>
        </div>
    );
}

export default Productos;
