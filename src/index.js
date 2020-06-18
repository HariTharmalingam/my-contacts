// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/home';

import './style.scss';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/home" component={Home}>
          <Home />
        </Route>
        <Route path="/:id" component={Movie}>
          <Movie />
        </Route>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
