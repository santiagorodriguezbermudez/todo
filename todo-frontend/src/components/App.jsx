import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import UserList from '../containers/UserList';
import NewUserForm from './NewUserForm';
import UserDetail from './UserDetail';
import NotFound from './NotFound';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <NewUserForm />
          <UserList />
        </Route>
        <Route
          path="/users/:id"
          render={props => <UserDetail {...props} />}
        >
          <NotFound />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
