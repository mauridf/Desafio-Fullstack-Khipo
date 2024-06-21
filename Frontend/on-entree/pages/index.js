import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Home() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Bem-vindo ao On Entree
      </Typography>
      <Typography variant="body1">
        Este é o seu aplicativo para gerenciar locais e eventos.
      </Typography>
    </Container>
  );
}