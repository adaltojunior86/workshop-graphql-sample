import React from "react";
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';

const App = () => {
  return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('App'))