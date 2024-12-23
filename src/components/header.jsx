import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ícones
import '../styles/header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Efeito para fechar o menu caso clique fora dele
    useEffect(() => {
        function handleClickOutside(e) {
            if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

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

                {/* Navegação (desktop) */}
                <nav className="header-nav">
                    <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        HOME
                    </NavLink>
                    <NavLink to="/sobre-nos" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        SOBRE NÓS
                    </NavLink>
                    <NavLink to="/parceiros" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        PARCEIROS
                    </NavLink>
                    <NavLink to="/fale-conosco" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        FALE CONOSCO
                    </NavLink>
                </nav>

                {/*testando uma parada*/}
                <div className='mobile-info-one'>

                </div>
                <div className='mobile-info-two'>
                    <p className='info-two'>Agende sua coleta: 11 94644-7239</p>
                </div>


                <div className='container-icon-logo'>
                    {/* Ícone Mobile (apenas visível em telas menores, via CSS) */}
                    <button
                        className="mobile-menu-icon"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Abrir menu mobile"
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <img src="/LogoNome.png" alt="Logo Nome" className="logo" />
                    <div className='help'>

                    </div>
                </div>
            </div>

            {/* Menu Mobile */}
            {/* Esse menu só deve aparecer em telas menores, você irá controlar via @media query */}
            <div
                ref={menuRef}
                className={`mobile-nav-container ${menuOpen ? 'open' : 'closed'}`}
            >
                <img src="/LogoNome.png" alt="Logo Nome" className="logo" />

                <NavLink
                    to="/"
                    end
                    className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}
                    onClick={() => setMenuOpen(false)}
                >
                    HOME
                </NavLink>
                <NavLink
                    to="/sobre-nos"
                    className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}
                    onClick={() => setMenuOpen(false)}
                >
                    SOBRE NÓS
                </NavLink>
                <NavLink
                    to="/parceiros"
                    className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}
                    onClick={() => setMenuOpen(false)}
                >
                    PARCEIROS
                </NavLink>
                <NavLink
                    to="/fale-conosco"
                    className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}
                    onClick={() => setMenuOpen(false)}
                >
                    FALE CONOSCO
                </NavLink>
            </div>

        </header>
    );
};

export default Header;
