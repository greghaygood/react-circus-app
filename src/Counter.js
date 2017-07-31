import React, { Component } from "react";
import logo from "./logo.svg";

import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      counter: 0
    };
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrement() {
    let newCount = this.state.counter - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    this.setState({
      counter: newCount
    });
  }

  reset() {
    this.setState({
      counter: 0
    });
  }

  render() {
    const { num } = this.props;
    const { counter } = this.state;

    return (
      <div className="counter">
        <h2>
          Counter #{num}: {counter}
        </h2>
        <nav>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.reset}>reset</button>
        </nav>
      </div>
    );
  }
}

export default Counter;
