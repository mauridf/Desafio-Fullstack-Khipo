import React, { useEffect, useState } from 'react';
import axios from '../../lib/axios';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

export default function Locais() {
  const [locais, setLocais] = useState([]);

  useEffect(() => {
    axios.get('/locais')
      .then(response => {
        setLocais(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar locais:', error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Lista de Locais
      </Typography>
      <Button variant="contained" color="primary" href="/locais/novo">
        Adicionar Novo Local
      </Button>
      <List>
        {Array.isArray(locais) && locais.map(local => (
          <ListItem key={local.id} button component="a" href={`/locais/${local.id}`}>
            <ListItemText primary={local.nome} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}