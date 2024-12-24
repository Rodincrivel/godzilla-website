import React from 'react';
import ComponentTitle from "../components/ComponentTitle";
import ComponentValores from '../components/ComponentValores';
import ComponentParceria from '../components/ComponentParceria';
import ComponentFuncionarios from '../components/ComponentFuncionarios';

import '../styles/SobreNos.css';

const SobreNos = () => {
  return (
    <>
      <div className='container-title'>
        <ComponentTitle
          title="SOBRE NÓS"
          subtitle="GODZILLA COLETA DE ÓLEO"
        />
      </div>

      <section className='container-apresentacao'>

        <div className='container-card-shape'>

          <div className='container-card-apresentacao-1'>
            <div className='card-apresentacao'>
              <video src="/god-coleta.mp4" autoplay loop muted controls></video>
            </div>
          </div>
          <div className='shape-circle'></div>
          <div className='container-card-apresentacao-2'>
            <div className='card-apresentacao'>
              <img src="/baldes.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className='container-content-paragraph-apresentacao'>
          <p>Somos a GODZILLA COLETA DE ÓLEO, empresa no segmento da reciclagem de óleo vegetal, com mais de 10 anos de experiência e parceria com seus fornecedores e clientes.</p>
          <p>A GODZILLA vem se destacando no mercado pela experiência e projetos que potencializam os clientes.</p>
          <p>Hoje com nossa estrutura e parcerias estratégicas, conseguimos atender grandes empresas deste setor. Inclusive você também, venha ser nosso parceiro.</p>
        </div>
      </section>

      <section className='container-valores'>
        <ComponentValores
          subtitulo="Conscientização"
          paragraph="Temos como objetivo levar a conscientização sobre a reciclagem do Óleo de cozinha, mostrando alternativas a população através de projetos, parcerias com muita dedicação e amor."
          imgSrc="/valores-1.png"
        />

        <ComponentValores
          subtitulo="Prestação de Serviços"
          paragraph="Através do trabalho conjunto aos nossos parceiros reciclamos milhares de litros de óleo por mês. Fornecemos o recipiente para armazenamento do Óleo e trocamos o Óleo por produto ou compramos."
          imgSrc="/valores-2.png"
        />

        <ComponentValores
          subtitulo="Compromisso"
          paragraph="Coletamos em até 48 horas após a solicitação, fornecemos toda a documentação exigida e disponibilizamos recipientes adequados para o armazenamento."
          imgSrc="/valores-3.png"
        />
      </section>


      <ComponentParceria />

      <section className='container-operacao'>
        <div className='title-operacao'>
          <ComponentTitle
            title="OPERAÇÃO"
            subtitle="EQUIPE DE COLETA AUTORIZADA"
          />
        </div>
        <p className='paragraph-style'>Confira abaixo a equipe autorizada de coleta. Para sua segurança, é crucial desconsiderar qualquer mensagem ou abordagem de pessoas que não façam parte do nosso quadro oficial de coleta. Dessa forma, evitamos possíveis fraudes e roubos.</p>

        <div className='container-card'>
          <ComponentFuncionarios
            imgSrc="/funcionario-01.png"
            subtitulo="Nome:"
            paragraph="Luis Sávio Santos de Siqueira"
          />

          <ComponentFuncionarios
            imgSrc="/funcionario-01.png"
            subtitulo="Nome:"
            paragraph="Luis Sávio Santos de Siqueira Jr"
          />

          <ComponentFuncionarios
            imgSrc="/funcionario-01.png"
            subtitulo="Nome:"
            paragraph="Rodrigo Holanda de Siqueira"
          />
        </div>

      </section>
    </>
  );
};

export default SobreNos;
