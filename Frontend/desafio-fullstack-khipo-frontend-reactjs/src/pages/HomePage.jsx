import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventCard from '../components/EventoCard';
import './HomePage.css'; // Crie este arquivo para estilizar a página

const HomePage = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await axios.get('https://localhost:7022/api/Eventos');
        setEventos(response.data);
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
      }
    };

    fetchEventos();
  }, []);

  return (
    <div className="homepage">
      <Header />
      <main>
        <h1>Eventos</h1>
        <div className="event-list">
          {eventos.map((evento) => (
            <EventCard key={evento.id} evento={evento} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;