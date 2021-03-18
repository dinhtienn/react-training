import React from 'react';
import {Typography, Container, Avatar, CssBaseline, Button, TextField, Grid, Box} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Copyright from '../copyright/index';
import '../../assets/css/style.css';
// import Link from '@material-ui/core/Link';

const useStyles = theme => ({
  biggestContainer: {
    padding: '0',
    maxWidth: '100%',
  },
  header: {
    padding: theme.spacing(0.5),
    textAlign: 'center',
    fontSize: '50px',
    backgroundColor: '#f1f1f1',
  },
  paper: {
    marginTop: theme.spacing(18),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignIn extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <Container fullWidth className={classes.biggestContainer}>
        <div className={classes.header}>
          <Link to="/" variant="body2" className="logo">
            Management
          </Link>
        </div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                type="email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                  <Link to="/sign-up" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </Container>
    );
  }
}

export default withStyles(useStyles)(SignIn)