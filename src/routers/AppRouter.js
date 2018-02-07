import React from 'react';
import { Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';

//use history here rather so it can be used outside the context
// of a component. For example, it's imported in app.js
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
     <div>
          <Header />
          <Switch>
            <Route exact={true} path="/" component={LoginPage} />
            <Route exact={true} path="/dashboard" component={ExpenseDashboardPage} />
            <Route exact={true} path="/create" component={AddExpensePage} />
            <Route exact={true} path="/edit/:id" component={EditExpensePage} />
            <Route exact={true} path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
          </Switch>
      </div>
  </Router>
);

export default AppRouter;
