import React from 'react';
import EventoCard from '../components/EventoCard';
import { Container, Typography } from '@mui/material';

const EventoPage = () => {
  return (
    <Container>
      <Typography variant="h2">Evento</Typography>
      <EventoCard />
    </Container>
  );
};

export default EventoPage;