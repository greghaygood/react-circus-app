import React, { Component } from "react";
import PropTypes from 'prop-types';

import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log('Counter.constructor');

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      counter: 0
    };
  }

  componentWillMount() {
      console.log('Counter.componentWillMount');
  }

  componentDidMount() {
      console.log('Counter.componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
      console.log('Counter.componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
      console.log('Counter.shouldComponentUpdate', nextProps, nextState);
      return true;
  }

  componentWillUpdate(nextProps, nextState) {
      console.log('Counter.componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
      console.log('Counter.componentDidUpdate', prevProps, prevState);
  }

  componentWillUnmount() {
      console.log('Counter.componentWillUnmount');
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
    console.log('Counter.render');
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

// Counter.propTypes = {
//   num: PropTypes.number.isRequired,
// };

export default Counter;
