import React, { useEffect, useState } from 'react';
import axios from '../../lib/axios';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

export default function Eventos() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    axios.get('/eventos')
      .then(response => {
        setEventos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar eventos:', error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Lista de Eventos
      </Typography>
      <Button variant="contained" color="primary" href="/eventos/novo">
        Adicionar Novo Evento
      </Button>
      <List>
        {eventos.map(evento => (
          <ListItem key={evento.id} button component="a" href={`/eventos/${evento.id}`}>
            <ListItemText primary={evento.nome} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}