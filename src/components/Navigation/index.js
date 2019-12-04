import React from 'react';
import { NavLink } from 'react-router-dom';
import uuid from 'uuid';
import nav from '../../routes';

const Navigation = () => (
  <ul>
    {nav.map(el => (
      <li key={uuid()}>
        <NavLink to={el.path}>{el.component}</NavLink>
      </li>
    ))}
  </ul>
);

export default Navigation;
