import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LocalPage from './pages/LocalPage';
import EventoPage from './pages/EventoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/local" element={<LocalPage />} />
        <Route path="/evento" element={<EventoPage />} />
      </Routes>
    </Router>
  );
}

export default App;