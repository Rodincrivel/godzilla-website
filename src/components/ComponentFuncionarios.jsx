import React from "react";
import '../styles/ComponentFuncionarios.css';

const ComponentFuncionarios = ({ imgSrc, paragraph, subtitulo }) => {
    return (
        <section className="card-funcionarios">
            <div className="card-f">
                <img src={imgSrc} alt={paragraph} />
            </div>
            <div className="name-container">
                <h5>{subtitulo}</h5>
                <p>{paragraph}</p>
            </div>
        </section>
    );
};

export default ComponentFuncionarios;
