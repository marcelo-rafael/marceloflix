import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Hoje, todo dev pode construir experiência mesmo sem estar diretamente trabalhando na área ou com a ferramenta que almeja trabalhar e, para isso, a forma mais fácil de se destacar é com projetos pessoais que mostram seu avanço profissional. Nesse video mostro algumas técnicas que utilizo pra ideação de projetos pessoais, inspirações visuais, definição de requisitos, escolha de ferramentas e divulgação do trabalho. Tenho certeza que seu portfólio vai ficar muito mais recheado com essas dicas! 💜"
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />

      <Carousel category={dadosIniciais.categorias[3]} />

      <Carousel category={dadosIniciais.categorias[4]} />

      <Carousel category={dadosIniciais.categorias[5]} />

      <Footer />
    </div>
  );
}

export default Home;
