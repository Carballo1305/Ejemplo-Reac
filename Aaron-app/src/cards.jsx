import GT_1030 from "./assets/cards/Grafica_GT_1030.webp"
import motherboard from "./assets/cards/mOTHERBOARD giga.webp"
import RAM_DDR4_FURY from "./assets/cards/RAM DDR4.webp"
import "./cards.css";

function ContenedorCards() {
    return (
        <div className="contenedor-cards">
            <Card1 />
            <Card2 />
            <Card3 />
        </div>
    )
}

function Card1() {
    return (
        <div className="card">
            <img src={GT_1030} alt="GT_1030" />
            <h3>Tarjeta gráfica</h3>
            <p>Nvidia GT 1030</p>
            <a href="#">Ver más</a>
        </div>
    )
}

function Card2() {
    return (
        <div className="card">
            <img src={motherboard} alt="motherboard" />
            <h3>Tarjeta madre</h3>
            <p>GIGABYTE Motherboard</p>
            <a href="#">Ver más</a>
        </div>
    )
}

function Card3() {
    return (
        <div className="card">
            <img src={RAM_DDR4_FURY} alt="RAM_DDR4_FURY" />
            <h3>Memoria RAM</h3>
            <p>DDR4 Kingston Fury</p>
            <a href="#">Ver más</a>
        </div>
    )
}

export default ContenedorCards;