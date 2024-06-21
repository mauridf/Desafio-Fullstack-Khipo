import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from '../../lib/axios';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function EventoDetalhes() {
  const router = useRouter();
  const { id } = router.query;
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`/eventos/${id}`)
        .then(response => {
          setEvento(response.data);
        })
        .catch(error => {
          console.error('Erro ao buscar detalhes do evento:', error);
        });
    }
  }, [id]);

  if (!evento) {
    return (
      <Container>
        <Typography variant="h5" component="h2">
          Carregando...
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {evento.nome}
      </Typography>
      <Typography variant="body1">
        Detalhes do evento.
      </Typography>
    </Container>
  );
}
