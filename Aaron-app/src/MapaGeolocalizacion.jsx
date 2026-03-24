import { useEffect, useState, useCallback } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const sucursalCentral = {
    lat: 20.525537860806164,
    lng: -97.46442253932936
};

function MapaGeolocalizacion() {
    const [miUbicacion, setMiUbicacion] = useState(null);
    const [mapa, setMapa] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setMiUbicacion({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            },
            (error) => console.error("Error de GPS:", error),
            { enableHighAccuracy: true }
        );
    }, []);

    const onLoad = useCallback((mapa) => {
        setMapa(mapa);
    }, []);

    useEffect(() => {
        if (mapa && miUbicacion) {
            const bounds = new window.google.maps.LatLngBounds();
            bounds.extend(miUbicacion);
            bounds.extend(sucursalCentral);
            mapa.fitBounds(bounds);
        }
    }, [miUbicacion, mapa]);

    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={{ width: "100%", height: "400px" }}
                center={sucursalCentral}
                zoom={15}
                onLoad={onLoad}
            >
                {miUbicacion && (
                    <Marker
                        position={miUbicacion}
                        title="Tu ubicación"

                    />
                )}

                <Marker
                    position={sucursalCentral}
                    title="Sucursal Central"
                    icon="https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                />
            </GoogleMap>
        </LoadScript>
    );
}

export default MapaGeolocalizacion;