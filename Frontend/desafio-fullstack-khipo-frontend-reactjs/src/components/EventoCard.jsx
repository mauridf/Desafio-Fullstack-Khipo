import React from 'react';
import './EventoCard.css'; // Crie este arquivo para estilizar os cartões de eventos

const EventoCard = ({ evento }) => {
  return (
    <div className="event-card">
      <img src={evento.imageUrl} alt={evento.nome} />
      <h2>{evento.nome}</h2>
      <p>{evento.data}</p>
      <p>{evento.localid}</p>
      <button>Mais Informações</button>
    </div>
  );
};

export default EventoCard;