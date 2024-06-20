import React from 'react';
import './css/Card.css';

const LocalCard = ({ locais }) => {
  return (
    <div className="card">
      <h2>Últimos Locais Adicionados <a href="/lista-locais">Ver Todos</a></h2>
      <div className="card-list">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Entradas</th>
            </tr>
          </thead>
          <tbody>
            {locais.map((local) => (
              <tr key={local.Id}>
                <td>{local.Nome}</td>
                <td>{local.Endereco}</td>
                <td>
                  {local.Entradas && local.Entradas.$values.length > 0
                    ? local.Entradas.$values.map((entrada) => entrada.NomeNumero).join(', ')
                    : 'Nenhuma entrada cadastrada'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LocalCard;