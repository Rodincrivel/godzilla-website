import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
    return (
        <header className="header">
            {/* Informações adicionais */}
            <div className="header-info">
                <p>Mais de 10 anos de experiência e parceria com seus clientes.</p>
                <p>11 94644-7239 | 11 93030-4235</p>
            </div>
            <div className='container-header'>
                {/* Logos */}
                <div className="header-logos">
                    <img src="/path/to/logo1.png" alt="Logo 1" className="logo" />
                    <img src="/path/to/logo2.png" alt="Logo 2" className="logo" />
                </div>

                {/* Navegação */}
                <nav className="header-nav">
                    <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        Home
                    </NavLink>
                    <NavLink to="/sobre-nos" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        Sobre Nós
                    </NavLink>
                    <NavLink to="/onde-coletamos" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        Onde Coletamos
                    </NavLink>
                    <NavLink to="/parceiros" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        Parceiros
                    </NavLink>
                    <NavLink to="/fale-conosco" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        Fale Conosco
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;
