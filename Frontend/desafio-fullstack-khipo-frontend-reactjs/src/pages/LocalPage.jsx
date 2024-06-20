import React from 'react';
import LocalCard from '../components/LocalCard';
import { Container, Typography } from '@mui/material';

const LocalPage = () => {
  return (
    <Container>
      <Typography variant="h2">Local</Typography>
      <LocalCard />
    </Container>
  );
};

export default LocalPage;