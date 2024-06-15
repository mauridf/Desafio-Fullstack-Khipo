import React, { useEffect, useState } from 'react';
import { fetchEventos } from '../services/api';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const EventoList = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const getEventos = async () => {
      try {
        const eventosData = await fetchEventos();
        setEventos(eventosData);
      } catch (error) {
        console.error("Erro ao buscar eventos:", error);
      }
    };

    getEventos();
  }, []);

  return (
    <Container>
      <Typography variant="h4">Eventos</Typography>
      <List>
        {eventos.map((evento) => (
          <ListItem key={evento.id}>
            <ListItemText primary={evento.nome} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default EventoList;