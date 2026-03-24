
import './AcercaDe.css'
import Mapa from './Mapa';

function AcercaDe() {
    const sucursales = [
        { c: "Sucursal Central", d: "Xicotepec de Juarez, Puebla #1000", t: "7641061596", lat: 20.525537860806164, lng: -97.46442253932936 },
        { c: "CDMX", d: "CDMX, Mexico #1000", t: "555-0456", lat: 19.432608, lng: -99.133209 },
        { c: "Guadalajara", d: "Guadalajara, Jalisco #1000", t: "333-0456", lat: 20.655909, lng: -103.344445 },
        { c: "Monterrey", d: "Monterrey, Nuevo Leon #1000", t: "811-0456", lat: 25.675079, lng: -100.318466 }
    ];

    return (
        <div className="acerca-container">
            <section className="acerca-info">
                <h1>Acerca de</h1>
                <h2>¿Quiénes Somos?</h2>
                <p>Empresa dedicada a la venta de productos de alta calidad.</p>
                <h2>Nuestros Valores</h2>
                <p>Honestidad, transparencia, responsabilidad y excelencia.</p>
            </section>

            <section className="sucursales">
                <h2>Nuestras Sucursales</h2>
                <div className="sucursales-grid">
                    {sucursales.map((s, i) => (
                        <div key={i} className="sucursal-item">
                            <h3>{s.c}</h3>
                            <p>{s.d}</p>
                            <p>{s.t}</p>
                            <Mapa lat={s.lat} lng={s.lng} nombre={s.c} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default AcercaDe;