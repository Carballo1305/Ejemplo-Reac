import { useState } from "react";
import Encabezado from "./encabezado.jsx";
import ContenedorCards from "./cards.jsx";
import Contacto from "./Contacto";
import AcercaDe from "./AcercaDe";
import Usuarios from "./Usuarios";
import Productos from "./Productos";
import Carrito from "./Carrito";
import Login from "./Login";
import Promociones from "./Promociones";
import Categorias from "./Categorias";
import MapaGeolocalizacion from "./MapaGeolocalizacion";
import { AuthProvider } from "./AuthContext";
import "./App.css";

function App() {
  const [vista, setVista] = useState("Inicio");
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <div className="app-container">
      <AuthProvider>
        <Encabezado cambiarVista={setVista} />
        <main className="content">
          {vista === "Inicio" && (
            <>
              <ContenedorCards vista={vista} />
              <MapaGeolocalizacion />
            </>
          )}
          {vista === "Contacto" && <Contacto />}
          {vista === "AcercaDe" && (
            <>
              <AcercaDe />
              <MapaGeolocalizacion />
            </>
          )}
          {vista === "Productos" && <Productos agregarAlCarrito={agregarAlCarrito} />}
          {vista === "Categorias" && <Categorias />}
          {vista === "Usuarios" && <Usuarios />}
          {vista === "Carrito" && <Carrito carrito={carrito} />}
          {vista === "Promociones" && <Promociones name="Aaron" />}
          {vista === "Login" && <Login />}
        </main>
        <footer className="footer">
          <p>© Todos los derechos reservados a Aarón Carballo</p>
        </footer>
      </AuthProvider>
    </div>
  );
}

export default App;
