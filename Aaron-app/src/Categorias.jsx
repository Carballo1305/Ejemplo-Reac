import React, { useEffect } from 'react';
import api from './Services/apiCat.js';
import { use } from 'react';
import './Categorias.css';



function Categorias() {
   const [categorias, setCategorias] = React.useState([]);
   const [loading, setLoading] = React.useState(true);

   useEffect(() => {
    const obtenerCategorias = async () => {
        try {
            const response = await api.get("categories");
            setCategorias(response.data.categories || response.data);
        } catch (error){
            console.error("Error al obtener categorias:", error);
        }finally{
            setLoading(false);
        }
    };
    obtenerCategorias();
}, []);
if (loading){
    return <p>Cargando categorias...</p>;

}

   
    return (
    <div>
        <header className='titulo'>Nuestras Categorias</header>
        <main className='contenedor_principal'>
            {Array.isArray(categorias) && categorias.map((categoria) => (
                <article className='categoria-card' key={categoria.id}>
                    <h3>{categoria.strCategory}</h3>
                    <img src={categoria.strCategoryThumb} alt={categoria.strCategory} />
                    <p>{categoria.strCategoryDescription}</p>

                </article>
            ))}
        </main>
    </div>
    );
}
export default Categorias;