import { useEffect, useState } from "react";
import './Clima.css'

function Clima() {
    const [clima, setClima] = useState(null);
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    console.log("API KEY", API_KEY);
    const lat = 20.525537860806164;
    const lng = -97.46442253932936;

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=es`)
            .then((res) => res.json())
            .then((data) => {
                setClima(data)
                console.log("Datos clima", data);

            })
            .catch((error) => console.log("Error:", error))
    }, [])
    const tieneMain = clima && clima.main;
    const tieneWeather = clima && Array.isArray(clima.weather) && clima.weather.length > 0;

    return (
        <div className="divClima">
            {clima ? (
                <>
                    {tieneMain && (
                        <p>{clima.name} Temp: {clima.main.temp} Hum: {clima.main.humidity}</p>
                    )}
                    {tieneWeather && (
                        <p>{clima.weather[0].description}</p>
                    )}
                    {!tieneMain && !tieneWeather && (
                        <p>No hay datos meteorológicos disponibles</p>
                    )}
                </>
            ) : (
                <p>Cargando clima...</p>
            )}
        </div>
    );
}
export default Clima;