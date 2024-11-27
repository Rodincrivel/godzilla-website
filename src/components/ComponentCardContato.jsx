import React from "react";
import '../styles/ComponentCardContato.css';

const ComponentCardContato = ({ subtitulo, paragraph, imgSrc }) => {
    return (
        <>
            <section className="container-card-fale-conosco">
                <div className="contato-img">
                    <img src={imgSrc} alt={subtitulo} />
                </div>

                <div className="contato-paragraph">
                    <h5>{subtitulo}</h5>
                    <p>{paragraph}</p>
                </div>
            </section>
        </>
    );
};

export default ComponentCardContato;
