import React from 'react';
import routes from '../router.js';
import {Route, Switch} from 'react-router-dom';
import NotFound from '../pages/notfound/index';
import Design from './design';

class Index extends React.Component {
  getCurrentRoute = () => {
    for (let i = 0; i < routes.length; i++) {
      const route = routes[i];
      if (this.props.location.pathname.includes(route.layout + route.path)) {
        return route;
      }
    }
    return [];
  }

  renderComponent = (currentRoute) => {
    return (
      <Route
        path={currentRoute.layout + currentRoute.path}
        component={currentRoute.component}
      />
    );
  }

  render() {
    const currentRoute = this.getCurrentRoute();

    return (
      <div>
        <Design/>
        <Switch>
          {this.renderComponent(currentRoute)}
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Index;