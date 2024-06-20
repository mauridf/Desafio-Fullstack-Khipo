import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LocalPage from './pages/LocalPage';
import EventoPage from './pages/EventoPage';
import ListaLocaisPage from './pages/ListaLocaisPage';
import ListaEventosPage from './pages/ListaEventosPage';
import AdicionaLocalPage from './pages/AdicionaLocalPage';
import AdicionaEventoPage from './pages/AdicionaEventoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/local" element={<LocalPage />} />
        <Route path="/evento" element={<EventoPage />} />
        <Route path="/lista-locais" element={<ListaLocaisPage />} />
        <Route path="/lista-eventos" element={<ListaEventosPage />} />
        <Route path="/adicionar-local" element={<AdicionaLocalPage />} />
        <Route path="/adicionar-evento" element={<AdicionaEventoPage />} />
      </Routes>
    </Router>
  );
}

export default App;