import React from 'react';
import ComponentTitle from "../components/ComponentTitle";
import '../styles/Parceiros.css';


const Parceiros = () => {
  return (
    <>
      <section className='container-parceiros'>
        <div className='container-title'>

          <ComponentTitle
            title="PARCEIROS"
            subtitle="PARCERIAS DE LONGO PRAZO E CONFIANÇA"
          />
        </div>
        <p>Conheça algumas empresas parceiras que estão comprometidas com a sustentabilidade e ajudando a reciclar milhares de litros de óleo por mês</p>

        <div className='clientes'>
          <img src="/cliente-1.svg" alt="Imagem do Impacto do Óleo no meio ambiente" />
          <img src="/cliente-2.svg" alt="Imagem do Impacto do Óleo no meio ambiente" />
          <img src="/cliente-3.svg" alt="Imagem do Impacto do Óleo no meio ambiente" />
          <img src="/cliente-4.svg" alt="Imagem do Impacto do Óleo no meio ambiente" />
          <img src="/cliente-5.svg" alt="Imagem do Impacto do Óleo no meio ambiente" />
        </div>
      </section>

      <section className='fechar-parceria'>
        <div className='container-parceria'>
          <h5>Mais de 10 anos de experiência e parceria com nossos clientes!</h5>
          <p>Estamos prontos para levar o seu negócio a um novo patamar. Se você está inaugurando ou enfrentando desafios na coleta de óleo, oferecemos um atendimento personalizado com soluções únicas e transparentes. Junte-se aos nossos parceiros e descubra as vantagens de trabalhar conosco!</p>
        </div>
      </section>
    </>
  );
};

export default Parceiros;
