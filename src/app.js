import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my add expense component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from my edit expense component
    </div>
);

const HelpPage = () => (
    <div>
        This is from my Help component
    </div>
);

const NotFoundPage = () => (
    <div>
        404 NOT FOUND - <Link to="/">Go home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expense Tracker</h1>
        <NavLink exact={true} to="/" activeClassName="is-active">Dashboard</NavLink>
        <NavLink exact={true} to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink exact={true} to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink exact={true} to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
       <div>
            <Header />
            <Switch>
                <Route exact={true} path="/" component={ExpenseDashboardPage} />
                <Route exact={true} path="/create" component={AddExpensePage} />
                <Route exact={true} path="/edit" component={EditExpensePage} />
                <Route exact={true} path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
