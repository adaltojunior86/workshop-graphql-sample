import React from "react";
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import AddVaccine from './pages/addVaccine'

const App = () => {
  return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addVaccine" component={AddVaccine} />
        </Switch>
      </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('App'))