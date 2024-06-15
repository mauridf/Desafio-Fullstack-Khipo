import React from 'react';
import EventoList from '../components/EventoList';
import { Container, Typography } from '@mui/material';

const EventoPage = () => {
  return (
    <Container>
      <Typography variant="h2">Evento</Typography>
      <EventoList />
    </Container>
  );
};

export default EventoPage;
