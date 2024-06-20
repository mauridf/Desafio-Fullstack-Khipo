import React, { useEffect, useState } from 'react';
import { fetchLocais, fetchEventos } from '../services/api';
import LocalCard from '../components/LocalCard';
import EventoCard from '../components/EventoCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/css/HomePage.css';

const HomePage = () => {
  const [locais, setLocais] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [locaisMap, setLocaisMap] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locaisData = await fetchLocais();
        if (locaisData && locaisData.$values) {
          setLocais(locaisData.$values);
          const locaisMap = locaisData.$values.reduce((acc, local) => {
            acc[local.Id] = local.Nome;
            return acc;
          }, {});
          setLocaisMap(locaisMap);
        } else {
          console.error('Dados de locais não são um array:', locaisData);
        }

        const eventosData = await fetchEventos();
        if (Array.isArray(eventosData)) {
          setEventos(eventosData.slice(0, 3)); // Pegar os 3 últimos eventos
        } else {
          console.error('Dados de eventos não são um array:', eventosData);
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="homepage">
      <Header />
      <main>
        <div className="small-cards">
          <div className="small-card">
            <h2>Locais</h2>
            <p>Confira todos os Locais Cadastrados</p>
            <button onClick={() => window.location.href = '/lista-locais'}>Conferir Locais</button>
          </div>
          <div className="small-card">
            <h2>Eventos</h2>
            <p>Confira todos os Eventos Cadastrados</p>
            <button onClick={() => window.location.href = '/lista-eventos'}>Conferir Eventos</button>
          </div>
        </div>

        <div className="cards-section">
          <div className="last-added-section">
            <LocalCard locais={locais} />
          </div>
          <div className="last-added-section">
          <EventoCard eventos={eventos} locaisMap={locaisMap} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;