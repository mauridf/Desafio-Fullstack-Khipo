// AdicionaEventoPage.jsx

import React, { useEffect, useState } from 'react';
import { fetchLocais, adicionaEvento } from '../services/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/css/Form.css';

const AdicionaEventoPage = () => {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState(0); // Padrão para Show
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [localId, setLocalId] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [locais, setLocais] = useState([]);

  useEffect(() => {
    const fetchLocaisData = async () => {
      try {
        const locaisData = await fetchLocais();
        // Verifica se locaisData é um array antes de atualizar o estado
        if (Array.isArray(locaisData)) {
          setLocais(locaisData);
        } else {
          console.error('Dados de locais não são um array:', locaisData);
        }
      } catch (error) {
        console.error('Erro ao buscar locais:', error);
      }
    };

    fetchLocaisData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const eventoData = {
      nome,
      tipo: Number(tipo),
      data,
      horario,
      localId,
      email,
      telefone,
    };

    try {
      await adicionaEvento(eventoData);
      // Lógica adicional após adicionar o evento, se necessário
      console.log('Evento adicionado com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar evento:', error);
    }
  };

  return (
    <div className="form-page">
      <Header />
      <main>
        <div className="container">
          <div className="header">
            <h1>Adicionar Evento</h1>
            <p>Preencha os dados abaixo para adicionar um novo evento.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome do Evento:</label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="tipo">Tipo do Evento:</label>
              <select
                id="tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                required
              >
                <option value="0">Show</option>
                <option value="1">Jogo</option>
                <option value="2">Outro</option>
                {/* Adicione outros tipos conforme necessário */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="data">Data do Evento:</label>
              <input
                type="date"
                id="data"
                value={data}
                onChange={(e) => setData(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="horario">Horário do Evento:</label>
              <input
                type="time"
                id="horario"
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="localId">Local do Evento:</label>
              <select
                id="localId"
                value={localId}
                onChange={(e) => setLocalId(e.target.value)}
                required
              >
                <option value="">Selecione o Local</option>
                {locais.map((local) => (
                  <option key={local.id} value={local.id}>
                    {local.nome}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email de Contato:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Telefone de Contato:</label>
              <input
                type="tel"
                id="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
              />
            </div>
            <div className="actions">
              <button type="submit">Adicionar Evento</button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdicionaEventoPage;