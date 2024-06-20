import React, { useState } from 'react';
import { adicionaLocal } from '../services/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/css/Form.css';

const AdicionarLocalPage = () => {
  const [nome, setNome] = useState('');
  const [apelido, setApelido] = useState('');
  const [tipo, setTipo] = useState('Estadio'); // Valor padrão correspondente ao enum no backend
  const [cnpj, setCnpj] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const localData = {
      nome,
      apelido,
      tipo,
      cnpj,
      cidade,
      estado,
      cep,
      endereco,
      complemento,
      email,
      telefone,
    };

    try {
      await adicionaLocal(localData);
      console.log('Local adicionado com sucesso!');
      // Limpar os campos após adicionar o local
      setNome('');
      setApelido('');
      setTipo('Estadio');
      setCnpj('');
      setCidade('');
      setEstado('');
      setCep('');
      setEndereco('');
      setComplemento('');
      setEmail('');
      setTelefone('');
    } catch (error) {
      console.error('Erro ao adicionar local:', error.message);
    }
  };

  return (
    <div className="form-page">
      <Header />
      <main>
        <div className="container">
          <div className="header">
            <h1>Adicionar Local</h1>
            <p>Preencha os dados abaixo para adicionar um novo local.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome do Local:</label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="apelido">Apelido:</label>
              <input
                type="text"
                id="apelido"
                value={apelido}
                onChange={(e) => setApelido(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="tipo">Tipo:</label>
              <select
                id="tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                required
              >
                <option value="Estadio">Estádio</option>
                <option value="Teatro">Teatro</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="cnpj">CNPJ:</label>
              <input
                type="text"
                id="cnpj"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cidade">Cidade:</label>
              <input
                type="text"
                id="cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="estado">Estado:</label>
              <input
                type="text"
                id="estado"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cep">CEP:</label>
              <input
                type="text"
                id="cep"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="endereco">Endereço:</label>
              <input
                type="text"
                id="endereco"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="complemento">Complemento:</label>
              <input
                type="text"
                id="complemento"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Telefone:</label>
              <input
                type="text"
                id="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>
            <div className="actions">
              <button type="submit">Adicionar Local</button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdicionarLocalPage;