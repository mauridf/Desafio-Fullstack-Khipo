import React, { useEffect, useState } from 'react';
import { fetchLocais } from '../services/api';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const LocalList = () => {
  const [locais, setLocais] = useState([]);

  useEffect(() => {
    const getLocais = async () => {
      try {
        const locaisData = await fetchLocais();
        setLocais(locaisData);
      } catch (error) {
        console.error("Erro ao buscar locais:", error);
      }
    };

    getLocais();
  }, []);

  return (
    <Container>
      <Typography variant="h4">Locais</Typography>
      <List>
        {locais.map((local) => (
          <ListItem key={local.id}>
            <ListItemText primary={local.nome} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default LocalList;