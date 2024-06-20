import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7022/api', // ajuste conforme a URL da sua API
});

export const fetchLocais = async () => {
  const response = await fetch('https://localhost:7022/api/Locais');
  const data = await response.json();
  console.log('Locais data:', data);  // Log da resposta da API
  return data;
};

export const fetchEventos = async () => {
  const response = await fetch('https://localhost:7022/api/Eventos');
  const data = await response.json();
  console.log('Eventos data:', data);  // Log da resposta da API
  return data;
};

export const adicionaLocal = async (localData) => {
  try {
    const response = await api.post('/Locais', localData);
    return response.data;
  } catch (error) {
    if (error.response) {
      // O servidor respondeu com um status diferente de 2xx
      console.error('Erro na resposta do servidor:', error.response.data);
      throw new Error(`Erro na resposta do servidor: ${error.response.data}`);
    } else if (error.request) {
      // A requisição foi feita, mas nenhuma resposta foi recebida
      console.error('Erro na requisição:', error.request);
      throw new Error('Erro na requisição');
    } else {
      // Algo deu errado na configuração da requisição
      console.error('Erro na configuração da requisição:', error.message);
      throw new Error(`Erro na configuração da requisição: ${error.message}`);
    }
  }
};

export const adicionaEvento = async (eventoData) => {
  try {
    const response = await api.post('/Eventos', eventoData);
    console.log('Evento adicionado:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar evento:', error);
    throw error;
  }
};

export default api;