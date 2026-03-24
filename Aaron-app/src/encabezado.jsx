import React from 'react';
import PropTypes from 'prop-types';
import logopag from './logopag.png';
import iconoFacebook from './assets/Redes/facebook.png';
import iconoInstagram from './assets/Redes/instagram.png';
import iconoTwitter from './assets/Redes/x.png'; 
import iconoYoutube from './assets/Redes/whatsapp.png';
import iconoTikTok from './assets/Redes/linkedin.png';
import { useAuth } from './AuthContext';
import './encabezado.css';
import Clima from './Clima';

function Encabezado({ cambiarVista }) {
    return (
        <div className='encabezadoDiv'>
            <Logo />
            <Menu cambiarVista={cambiarVista} />
            <RedesSociales />
        </div>
    );
}

function Logo() {
    return (
        <div className='logoDiv'>
            <img src={logopag} alt="main-logo" />
        </div>
    );
}

function Menu({ cambiarVista }) {
    const { isLoggedIn, logout } = useAuth();
    
    return (
        <div className='menuDiv'>
            <ul>
                <li onClick={() => cambiarVista('Inicio')}>Inicio</li>
                <li onClick={() => cambiarVista('Promociones')}>Promociones</li>
                <li onClick={() => cambiarVista('Productos')}>Productos</li>
                <li onClick={() => cambiarVista('AcercaDe')}>Acerca de</li>
                <li onClick={() => cambiarVista('Contacto')}>Contacto</li>
                {isLoggedIn ? (
                    <>
                        <li onClick={() => cambiarVista('Categorias')}>Categorias</li>
                        <li onClick={() => cambiarVista('Usuarios')}>Usuarios</li>
                        <li onClick={() => cambiarVista('Carrito')}>Carrito</li>
                        <li onClick={() => { logout(); cambiarVista('Inicio'); }}>Cerrar Sesión</li>
                    </>
                ) : (
                    <li onClick={() => cambiarVista('Login')}>Login</li>
                )}
            </ul>
        </div>
    );
}

function RedesSociales() {
    return (
        <div className='redesDiv'>
            <ul>
                <li><img src={iconoFacebook} alt="Facebook" /></li>
                <li><img src={iconoInstagram} alt="Instagram" /></li>
                <li><img src={iconoTwitter} alt="Twitter" /></li>
                <li><img src={iconoYoutube} alt="YouTube" /></li>
                <li><img src={iconoTikTok} alt="TikTok" /></li>
            </ul>
            <Clima />
        </div>
    );
}

Menu.propTypes = {
    cambiarVista: PropTypes.func.isRequired
};

Encabezado.propTypes = {
    cambiarVista: PropTypes.func.isRequired
};

export default Encabezado;