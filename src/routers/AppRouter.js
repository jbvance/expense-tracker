import React from 'react';
import { Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

//use history here rather so it can be used outside the context
// of a component. For example, it's imported in app.js
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
     <div>
          <Switch>
            <Route exact={true} path="/" component={LoginPage} />
            <PrivateRoute exact={true} path="/dashboard" component={ExpenseDashboardPage} />
            <PrivateRoute exact={true} path="/create" component={AddExpensePage} />
            <PrivateRoute exact={true} path="/edit/:id" component={EditExpensePage} />
            <Route exact={true} path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
          </Switch>
      </div>
  </Router>
);

export default AppRouter;
