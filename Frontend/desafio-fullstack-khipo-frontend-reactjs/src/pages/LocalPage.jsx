import React from 'react';
import LocalList from '../components/LocalList';
import { Container, Typography } from '@mui/material';

const LocalPage = () => {
  return (
    <Container>
      <Typography variant="h2">Local</Typography>
      <LocalList />
    </Container>
  );
};

export default LocalPage;