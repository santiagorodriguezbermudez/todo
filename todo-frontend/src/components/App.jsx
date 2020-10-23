import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import UserList from '../containers/UserList';
import NewUserForm from './NewUserForm';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/">
          <NewUserForm />
          <UserList />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
