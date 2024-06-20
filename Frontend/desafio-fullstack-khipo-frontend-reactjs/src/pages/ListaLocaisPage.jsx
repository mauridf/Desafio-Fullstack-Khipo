import React, { useEffect, useState } from 'react';
import { fetchLocais } from '../services/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/css/Lista.css';

const ListaLocalPage = () => {
  const [locais, setLocais] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [locaisPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locaisData = await fetchLocais();
        if (locaisData && locaisData.$values) {
          setLocais(locaisData.$values);
        } else {
          console.error('Dados de locais não são um array:', locaisData);
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  // Filtra os locais com base no termo de pesquisa
  const filteredLocais = locais.filter((local) =>
    local.Nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Lógica de paginação
  const indexOfLastLocal = currentPage * locaisPerPage;
  const indexOfFirstLocal = indexOfLastLocal - locaisPerPage;
  const currentLocais = filteredLocais.slice(indexOfFirstLocal, indexOfLastLocal);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="lista-page">
      <Header />
      <main>
        <div className="container">
          <div className="header">
            <h1>Locais</h1>
            <p>Confira a lista com todos os locais cadastrados</p>
          </div>
          <div className="actions">
            <input
              type="text"
              placeholder="Pesquisar locais"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => window.location.href = '/adicionar-local'}>Adicionar Local</button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Nome do Local</th>
                <th>Endereço</th>
                <th>Cidade e Estado</th>
                <th>Entradas Cadastradas</th>
                <th>Catracas Cadastradas</th>
              </tr>
            </thead>
            <tbody>
              {currentLocais.map((local) => (
                <tr key={local.Id}>
                  <td>{local.Nome}</td>
                  <td>{local.Endereco}</td>
                  <td>{`${local.Cidade}/${local.Estado}`}</td>
                  <td>
                    {local.Entradas && local.Entradas.$values.length > 0
                      ? local.Entradas.$values.map((entrada) => entrada.NomeNumero).join(', ')
                      : 'Nenhuma entrada cadastrada'}
                  </td>
                  <td>
                    {local.Catracas && local.Catracas.$values.length > 0
                      ? local.Catracas.$values.map((catraca) => catraca.NomeNumero).join(', ')
                      : 'Nenhuma catraca cadastrada'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            {[...Array(Math.ceil(filteredLocais.length / locaisPerPage)).keys()].map((number) => (
              <button key={number + 1} onClick={() => paginate(number + 1)}>
                {number + 1}
              </button>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ListaLocalPage;