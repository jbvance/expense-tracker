import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
        404 NOT FOUND
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact={true} path="/" component={ExpenseDashboardPage} />
            <Route exact={true} path="/create" component={AddExpensePage} />
            <Route exact={true} path="/edit" component={EditExpensePage} />
            <Route exact={true} path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
