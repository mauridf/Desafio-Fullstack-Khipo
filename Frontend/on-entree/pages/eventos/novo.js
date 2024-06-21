// pages/eventos/novo.js
import { useState, useEffect } from 'react';
import axios from '../../lib/axios';
import { TextField, Button, Typography, MenuItem } from '@mui/material';

const NovoEvento = () => {
    const [evento, setEvento] = useState({
        nome: '',
        tipo: '',
        data: '',
        horario: '',
        localId: '',
        email: '',
        telefone: '',
    });

    const [locais, setLocais] = useState([]);

    useEffect(() => {
        const fetchLocais = async () => {
            const response = await axios.get('/locais');
            setLocais(response.data);
        };
        fetchLocais();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvento({
            ...evento,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/eventos', evento);
            alert('Evento cadastrado com sucesso!');
        } catch (error) {
            console.error('Erro ao cadastrar evento:', error);
            alert('Erro ao cadastrar evento.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h4">Novo Evento</Typography>
            <TextField label="Nome" name="nome" value={evento.nome} onChange={handleChange} required />
            <TextField
                select
                label="Tipo"
                name="tipo"
                value={evento.tipo}
                onChange={handleChange}
                required
            >
                <MenuItem value="Show">Show</MenuItem>
                <MenuItem value="Jogo">Jogo</MenuItem>
                <MenuItem value="Outro">Outro</MenuItem>
            </TextField>
            <TextField type="date" label="Data" name="data" value={evento.data} onChange={handleChange} required />
            <TextField type="time" label="Horário" name="horario" value={evento.horario} onChange={handleChange} required />
            <TextField
                select
                label="Local"
                name="localId"
                value={evento.localId}
                onChange={handleChange}
                required
            >
                {locais.map((local) => (
                    <MenuItem key={local.id} value={local.id}>
                        {local.nome}
                    </MenuItem>
                ))}
            </TextField>
            <TextField label="Email" name="email" value={evento.email} onChange={handleChange} required />
            <TextField label="Telefone" name="telefone" value={evento.telefone} onChange={handleChange} required />
            <Button type="submit">Cadastrar Evento</Button>
        </form>
    );
};

export default NovoEvento;