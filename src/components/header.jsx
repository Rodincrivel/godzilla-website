import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
    return (
        <header className="header">
            {/* Informações adicionais */}
            <div className="header-info">
                <p className='info-one'>Mais de 10 anos de experiência e parceria com nossos clientes.</p>
                <p className='info-two'>Agende sua coleta | 11 94644-7239</p>
            </div>
            <div className='container-header'>
                {/* Logos */}
                <div className="header-logos">
                    <img src="/LogoSimbolo.png" alt="Logo Simbolo" className="logo" />
                    <img src="/LogoNome.png" alt="Logo Nome" className="logo" />
                </div>

                {/* Navegação */}
                <nav className="header-nav">
                    <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        HOME
                    </NavLink>
                    <NavLink to="/sobre-nos" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        SOBRE NÓS
                    </NavLink>
                    <NavLink to="/onde-coletamos" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        ONDE COLETAMOS
                    </NavLink>
                    <NavLink to="/fale-conosco" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        FALE CONOSCO
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;
