import React from 'react';
import { Grid, Paper } from '@material-ui/core';

export default function Address() {
  return (
    <Grid
      container
      spacing={4}
      direction={'column'}
      style={{ gridArea: 'address', margin: 'auto' }}
    >
      <Grid item xs={3}>
        <Paper
          style={{ padding: '0.2rem 2rem 1rem 2rem', backgroundColor: 'gray' }}
        >
          <h2>Condominio</h2>
          <address>
            2011 Ave. Sagrado Corazon
            <br />
            Paseo del Bosque
            <br />
            San Juan, PR 00915
          </address>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper
          style={{ padding: '0.2rem 2rem 1rem 2rem', backgroundColor: 'gray' }}
        >
          <h2>Administración</h2>
          <address>
            Momentum Management and Realty
            <br />
            Ave. Manuel Fernandez Juncos #953
            <br />
            San Juan, Puerto Rico
            <br />
          </address>
        </Paper>
      </Grid>
    </Grid>
  );
}
