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
import { Provider } from 'react-redux';
import store, {persistor} from './services/configureStore';
import {PersistGate} from 'redux-persist/lib/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div />} persistor={persistor}>
    <Router className="App">
      <Switch>
        <Route path="/main" render={(props) => <Layout {...props} />} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Redirect from="/" to={'/main/home'} />
      </Switch>
    </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
