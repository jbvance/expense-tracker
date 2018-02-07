import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// Set a variable to only render to 'app' once,
// rather than re-rendering when login state changes
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    // render
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      // Only redirect if the user was on the root page when they logged in.
      // otherwise, leave them on the page they were on
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })
  } else {
    renderApp();
    history.push('/');
  }
});


