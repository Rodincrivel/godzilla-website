// src/components/ComponentParceria.jsx

import React, { useState, useEffect } from "react";
import ComponentTitle from "./ComponentTitle";
import '../styles/ComponentParceria.css';

const ComponentParceria = () => {
    // Definição das duas parcerias
    const parcerias = [
        {
            title: "Parceria de Sucesso",
            subtitle: "TANGARÁ ALIMENTOS",
            diferenciais: [
                {
                    title: "Documentação",
                    paragraph: "Oferecemos documentação comprovando o destino final ambientalmente responsável do óleo reciclado, assegurando total transparência em nossas operações."
                },
                {
                    title: "Destino Final",
                    paragraph: "Parceria estratégica com a empresa Tangará Alimentos, que atua como nosso destinatário final. Essa colaboração assegura que todo o óleo reciclado seja encaminhado para um destino adequado, em conformidade com as regulamentações ambientais."
                },
                {
                    title: "Licenças",
                    paragraph: "Licenças de instalação e operação em dia com os órgãos vigentes conforme necessário para destino final do óleo."
                }
            ]
        },
        {
            title: "Parceria de Sucesso",
            subtitle: "ESPAÇO DO GOURMET",
            diferenciais: [
                {
                    title: "Crédito",
                    paragraph: "Parceria única com a Espaço do Gourmet, com mais de 30 anos de mercado. Fornecemos recipientes, coleta e documentação para reciclagem de óleo, gerando crédito para novos utensílios e consertos."
                },
                {
                    title: "Oficina",
                    paragraph: "Parceria que oferece acesso a uma oficina autorizada de grandes marcas, transformando óleo de cozinha em crédito para conserto de equipamentos, disponível para clientes de food service em geral."
                },
                {
                    title: "Utensílios",
                    paragraph: "Mais de 9.000 soluções para comércios de food service. Preços acessíveis e crédito gerado com a reciclagem de óleo, podendo ser utilizado para equipar sua cozinha com os melhores utensílios."
                }
            ]
        }
    ];

    // Estado para controlar a parceria atual (0 ou 1)
    const [currentParceria, setCurrentParceria] = useState(0);

    // Função para alternar para a primeira parceria
    const showParceria1 = () => {
        setCurrentParceria(0);
    };

    // Função para alternar para a segunda parceria
    const showParceria2 = () => {
        setCurrentParceria(1);
    };

    // useEffect para alternância automática a cada 30 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentParceria(prev => (prev === 0 ? 1 : 0));
        }, 30000); // 30000ms = 30 segundos

        // Limpeza do intervalo ao desmontar o componente
        return () => clearInterval(interval);
    }, []);

    // Determinar a classe adicional com base na parceria atual
    const containerClass = currentParceria === 0 ? 'parceria-1' : 'parceria-2';

    return (
        <section className={`container-parcerias ${containerClass}`}>

            <div className="testando">
                {/* Utilizando o componente ComponentTitle com os dados atuais */}
                <ComponentTitle
                    title={parcerias[currentParceria].title}
                    subtitle={parcerias[currentParceria].subtitle}
                />

                {/* Seção de diferenciais */}
                <section className="diferenciais">
                    {parcerias[currentParceria].diferenciais.map((item, index) => (
                        <div key={index} className="testando2">
                            <h5>{item.title}</h5>
                            <p>{item.paragraph}</p>
                        </div>
                    ))}
                </section>
            </div>


            {/* Botões para alternância manual */}
            <div className="parceria-buttons">
                <button
                    onClick={showParceria1}
                    className={currentParceria === 0 ? 'active' : ''}
                >
                    TANGARÁ
                </button>
                <button
                    onClick={showParceria2}
                    className={currentParceria === 1 ? 'active' : ''}
                >
                    ESPAÇO DO GOURMET
                </button>
            </div>

        </section>
    );
};

export default ComponentParceria;
