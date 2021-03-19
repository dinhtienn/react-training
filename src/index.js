import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import SignIn from './pages/sign_in/index';
import SignUp from './pages/sign_up/index';
import Layout from './layouts/index';

ReactDOM.render(
  <React.StrictMode>
    <Router className="App">
      <Switch>
        <Route path="/main" render={(props) => <Layout {...props} />} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Redirect from="/" to={'/main/home'} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
