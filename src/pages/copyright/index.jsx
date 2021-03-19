import React from 'react';
import {Typography} from '@material-ui/core';

class Index extends React.Component {
  render() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © Dinh Tien '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
}

export default Index;