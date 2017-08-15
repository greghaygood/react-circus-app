import React, { Component } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

import styles from 'styled-components';

const width = 10;

export const Nav = styles.nav`
  background-color: green; 
  border: 1px solid ${width};
`;

class Header extends Component {

  render() {

    const { counter } = this.props;

    return (
      <div className="App-Menu">
      Count: {counter}
        <Nav>
          <ul className="menu">
            <li>
              <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/counter1">Counter 1</NavLink>
            </li>
            <li>
              <NavLink to="/counter-form">Counter Form</NavLink>
            </li>
            <li>
              <NavLink to="/form">Form Example</NavLink>
            </li>
            <li>
              <NavLink to="/lifecycle">Lifecycle Example</NavLink>
            </li>
          </ul>
        </Nav>
      </div>
    );
  }
}

export default Header;
