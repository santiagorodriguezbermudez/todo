import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import UserList from '../containers/UserList';
import NewUserForm from './NewUserForm';
import UserDetail from './UserDetail';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <NewUserForm />
          <UserList />
        </Route>
        <Route path="/users/:id">
          <UserDetail />
        </Route>
        <Route>
          <span>User not found</span>
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
