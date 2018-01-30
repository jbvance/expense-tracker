import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
      <h1>Expense Tracker</h1>
      <NavLink exact={true} to="/" activeClassName="is-active">Dashboard</NavLink>
      <NavLink exact={true} to="/create" activeClassName="is-active">Create Expense</NavLink>
  </header>
);

export default Header;