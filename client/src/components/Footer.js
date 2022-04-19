import React from 'react';
import { Typography, Grid } from '@mui/material';

const Footer = () => {
  return (
    <>
      <Grid container justifyContent="center">
        <Typography variant="h7" sx={{ display: 'block', pb: '1rem' }}>
          December 21st, 2021 All Rights Reservered
        </Typography>
      </Grid>
    </>
  );
};

export default Footer;
