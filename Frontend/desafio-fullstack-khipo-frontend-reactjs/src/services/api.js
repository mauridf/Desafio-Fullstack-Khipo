import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7022/api', // ajuste conforme a URL da sua API
});

export const getLocais = () => api.get('/Locais');
export const getEventos = () => api.get('/Eventos');
export const createEvent = (eventData) => api.post('/Eventos', eventData);

export const fetchLocais = async () => {
    try {
      const response = await api.get('/Locais');
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar locais:", error);
      throw error;
    }
  };

  export const fetchEventos = async () => {
    try {
      const response = await api.get('/Eventos');
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar eventos:", error);
      throw error;
    }
  };

export default api;