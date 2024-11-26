import React from "react";
import { Link } from "react-router-dom";
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <div className="social-media">
                    <img src="/LogoNome.png" alt="Logo Nome" className="logo" />
                    <h5>GODZILLA COLETA DE ÓLEO</h5>
                    <p>Siga Nós nas redes sociais!</p>
                    <a href="https://www.instagram.com/godzillacoleta?igsh=MXdleTN0enlqN2V4cA==" target="_blank" rel="noopener noreferrer" nav-link-footer>Instagram/GodzillaColetaDeOleo</a>
                </div>

                <div className="site-map">
                    <h5>MAPA DO SITE</h5>
                    <nav className="footer-nav">
                        <Link to="/" className="nav-link-footer">
                            HOME
                        </Link>

                        <Link to="/sobre-nos" className="nav-link-footer">
                            SOBRE NÓS
                        </Link>

                        <Link to="/onde-coletamos" className="nav-link-footer">
                            ONDE COLETAMOS
                        </Link>


                        <Link to="/fale-conosco" className="nav-link-footer">
                            FALE CONOSCO
                        </Link>
                    </nav>
                </div>

                <div className="contacts">
                    <h5>ATENDIMENTO</h5>
                    <p>11 95758-2806</p>
                    <p>contato@godzillacoletadeoleo.com</p>
                </div>
            </section>
            <div></div>
            <p>© 2024 Godzilla Coleta de Óleo - Todos os direitos reservados - Desenvolvimento: <a href="https://github.com/Rodincrivel" target="_blank" rel="noopener noreferrer">Rodrigo Holanda</a></p>
        </footer>
    );
};

export default Footer;