import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from '../../lib/axios';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function LocalDetalhes() {
  const router = useRouter();
  const { id } = router.query;
  const [local, setLocal] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`/locais/${id}`)
        .then(response => {
          setLocal(response.data);
        })
        .catch(error => {
          console.error('Erro ao buscar detalhes do local:', error);
        });
    }
  }, [id]);

  if (!local) {
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
        {local.nome}
      </Typography>
      <Typography variant="body1">
        Detalhes do local.
      </Typography>
    </Container>
  );
}