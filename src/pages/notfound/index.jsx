import React from 'react';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';

const Index = () => (
  <Grid container spacing={2}>
    <Grid item xs={12} justify="center" alignItems="center" container>
      <h1>404 - Not Found!</h1>
    </Grid>
    <Grid item xs={12} justify="center" alignItems="center" container>
      <Link to="/">Go Home</Link>
    </Grid>
  </Grid>
);

export default Index;
