import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Tags from './views/Tags';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';
import Money from './views/Money';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags">
          <Tags/>
        </Route>
        <Route path="/money">
          <Money/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        <Redirect exact from="/" to="money" />
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;