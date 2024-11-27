import React from 'react';
import ComponentTitle from "../components/ComponentTitle";
import '../styles/fale-conosco.css';


const FaleConosco = () => {
  return (
    <>
      <div className='container-title'>
        <ComponentTitle
          title="FALE CONOSCO"
          subtitle="CANAIS OFICIAIS DE COMUNICAÇÃO"
        />
      </div>

      <div className='container-fale-conosco'>
        <p>Nosso compromisso é proporcionar um atendimento seguro e eficaz. Conheça abaixo os nossos canais oficiais de comunicação. Para garantir sua segurança, evite golpes e fraudes ao utilizar exclusivamente os meios de contato listados nesta página. Junte-se às empresas parceiras que já confiam em nós e contribuem para um meio ambiente mais sustentável, ajudando a reciclar milhares de litros de óleo por mês.</p>
      </div>
      <section className='fale-conosco'>


      </section>
    </>
  );
};

export default FaleConosco;
