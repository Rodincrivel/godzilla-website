import React from "react";
import ComponentTitle from "../components/ComponentTitle";
import ComponentParceria from '../components/ComponentParceria';
import '../styles/home.css'

const Home = () => {



    return (
        <>
            <div className="container-title">
                <ComponentTitle
                    title="BEM VINDO AO SITE DA GODZILLA COLETA DE ÓLEO"
                    subtitle="ENTENDA O IMPACTO DO ÓLEO NO MEIO AMBIENTE"
                />
            </div>
            <section className="oil-impact">
                <div className="container-paragraph-oil-impact">
                    <div className="paragraph-oil-impact">
                        <p>A poluição da água pelo óleo é um problema grave, já que 1 litro de óleo pode contaminar até 25 mil litros de água, impactando negativamente a vida aquática. Em nosso programa, promovemos a educação ambiental e ensinamos como evitar o descarte inadequado de óleo, com ênfase na preservação dos recursos hídricos. Assista ao vídeo e aprenda a maneira correta de lidar com o óleo usado.</p>
                    </div>
                    <div className="font-news">
                        <p>Fonte: <a href="https://site.sabesp.com.br/site/interna/Default.aspx?secaoId=82" target="_blank" rel="noopener noreferrer">Sabesp</a></p>
                    </div>
                </div>

                <div>
                    <img src="/imagem-home.jpg" alt="Imagem do Impacto do Óleo no meio ambiente" />
                </div>
            </section>
            <div className="container-title">
                <ComponentTitle
                    title="DESCARTE CONSCIENTE"
                    subtitle="PASSO A PASSO PARA O DESCARTE CORRETO"
                />
            </div>

            <section className="conscious-disposal">
                <div className="container-disposal">
                    <div className="container-step">
                        <di className="style-step">
                            <h3>1º PASSO</h3>
                            <p>Deixe o Óleo esfriar</p>
                        </di>
                        <div className="style-step">
                            <h3>2º PASSO</h3>
                            <p>Armazenar na garrafa Pet</p>
                        </div>
                        <div className="style-step">
                            <h3>3º PASSO</h3>
                            <p>Fechar bem a Garrafa</p>
                        </div>
                        <div className="style-step">
                            <h3>4º PASSO</h3>
                            <p>Levar ao ponto de coleta</p>
                        </div>
                    </div>
                </div>
                <div className="move-container">
                    <video
                        src="/descarte.mp4"
                        controls
                        width="100%"
                        height="auto"
                        className="descarte-video"
                    >
                        Seu navegador não suporta o elemento de vídeo.
                    </video>
                </div>
            </section>

            <div className="container-parceria">
                <ComponentParceria />
            </div>

        </>
    );
};

export default Home;
