import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importação do Header
import Header from './components/header';

// Importação das páginas
import Home from './pages/home';
import SobreNos from './pages/sobre-nos';
import OndeColetamos from './pages/onde-coletamos';
import Parceiros from './pages/parceiros';
import FaleConosco from './pages/fale-conosco';

const App = () => {
  return (
    <Router>
      {/* Header exibido em todas as páginas */}
      <Header />
      {/* Definição das rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/onde-coletamos" element={<OndeColetamos />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
      </Routes>
    </Router>
  );
};

export default App;
