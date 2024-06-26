import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:7022/api', // Atualize com a URL correta da sua API
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;
