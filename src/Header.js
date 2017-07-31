import React, { Component } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="App-Menu">
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/counter1">Counter 1</NavLink>
            </li>
            <li>
              <NavLink to="/lifecycle">Lifecycle Example</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
