import React from "react";
import '../styles/ComponentValores.css'

const ComponentValores = ({ subtitulo, paragraph, imgSrc }) => {
    return (
        <section className="valores">
            <div className="valores-img">
                <img src={imgSrc} alt={subtitulo} />
            </div>

            <div className="valores-paragraph">
                <h5>{subtitulo}</h5>
                <p>{paragraph}</p>
            </div>
        </section>
    );
};


export default ComponentValores;
