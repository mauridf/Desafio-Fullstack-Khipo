import React from 'react';
import './css/Card.css';

// Supondo que você tenha os mapeamentos para o enum e os locais
const TipoEvento = {
  0: 'Show',
  1: 'Jogo',
  2: 'Outro'
};

const EventoCard = ({ eventos, locaisMap }) => {
  return (
    <div className="card">
      <h2>Últimos Eventos Adicionados <a href="/lista-eventos">Ver Todos</a></h2>
      <div className="card-list">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Local</th>
            </tr>
          </thead>
          <tbody>
            {eventos.map((evento) => (
              <tr key={evento.id}>
                <td>{evento.nome}</td>
                <td>{TipoEvento[evento.tipo]}</td>
                <td>{locaisMap[evento.localId]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventoCard;