import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './Promociones.css'
import Mapa from './Mapa';

const LISTA_PROMOS = [
    { id: 1, p: "Procesador i9", desc: "15% OFF" },
    { id: 2, p: "Gabinete RGB", desc: "Envío Gratis" }
];

function Promociones({ name }) {

    <div className='promosDiv'>
        {name ? (
            <>
                <h3>🔥 Promociones para {name}</h3>
                <div className="promos-grid">
                    {LISTA_PROMOS.map(p => (
                        <div key={p.id} className="promo-card">
                            <h4>{p.p}</h4>
                            <p>{p.desc}</p>
                        </div>
                    ))}
                </div>
            </>
        ) : (
            <h3>No hay datos disponibles</h3>
        )}
    </div>

}

export default Promociones;