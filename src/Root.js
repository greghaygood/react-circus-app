import React, { Component } from "react";

import "./App.css";

import { Link } from "react-router-dom";

class Root extends Component {
  render() {
    return (
      <div>
        <p>This is the home page.</p>
        <p>
          Check out the fun <Link to="/counter1">counter</Link>.
        </p>
      </div>
    );
  }
}

export default Root;
