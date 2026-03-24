import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};
function Mapa({ lat, lng, nombre }) {
    const { isLoaded, LoaderError } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY,
    })
    if (LoaderError) return <div>Error cargando mapa</div>
    if (!isLoaded) return <div>Cargando mapa...</div>

    const center = { lat, lng };
    return (
        <div>
            <h3>{nombre}</h3>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={17}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    )
}
export default Mapa;
