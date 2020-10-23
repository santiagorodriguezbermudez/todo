import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import UserList from '../containers/UserList';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/">
          <UserList />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
