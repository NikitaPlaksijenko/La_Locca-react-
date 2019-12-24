import React from 'react';
import Home from './components/home';
import About from './components/about';
import Neighbors from './components/chemical-neighbors';
import OrganicWines from './components/organic-wines';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/neighbors">
          <Neighbors />
        </Route>
        <Route path="/organic-wines">
          <OrganicWines />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
