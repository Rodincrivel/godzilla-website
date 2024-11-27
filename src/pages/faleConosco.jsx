import React from "react";
import ComponentTitle from "../components/ComponentTitle";
import ComponentCardContato from "../components/ComponentCardContato";
import '../styles/fale-conosco.css';

const FaleConosco = () => {
  return (
    <>
      <div className='container-title'>
        <ComponentTitle
          title="FALE CONOSCO"
          subtitle="CANAIS OFICIAIS DE COMUNICAÇÃO"
        />
        <p className="paragraphStyles">Nosso compromisso é proporcionar um atendimento seguro e eficaz. Conheça abaixo os nossos canais oficiais de comunicação. Para garantir sua segurança, evite golpes e fraudes ao utilizar exclusivamente os meios de contato listados nesta página. Junte-se às empresas parceiras que já confiam em nós e contribuem para um meio ambiente mais sustentável, ajudando a reciclar milhares de litros de óleo por mês.</p>
      </div>

      <section className="container-contato">
        <ComponentCardContato
          subtitulo="WHATSAPP"
          paragraph="(11) 95758-2806"
          imgSrc="/icone-cel-1.png"
        />

        <ComponentCardContato
          subtitulo="E-MAIL"
          paragraph="contato@godzillacoletadeoleo.com"
          imgSrc="/icone-mall-2.png"
        />
      </section>
    </>
  );
};

export default FaleConosco;