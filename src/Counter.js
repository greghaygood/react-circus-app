import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log("Counter.constructor", props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);

    let startingVal = props.initialValue;
    if (!startingVal) {
      startingVal = 0;
    }
    this.state = {
      counter: startingVal,
    };
  }

  componentWillMount() {
    console.log("Counter.componentWillMount");
  }

  componentDidMount() {
    console.log("Counter.componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("Counter.componentWillReceiveProps", nextProps);

    let startingVal = nextProps.initialValue;
    if (!startingVal) {
      startingVal = 0;
    }
    this.setState({counter: startingVal});
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Counter.shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Counter.componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Counter.componentDidUpdate", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("Counter.componentWillUnmount");
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    }, function() {
      this.props.updateCounter(this.state.counter);
    });
  }

  decrement() {
    let newCount = this.state.counter - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    this.setState({
      counter: newCount
    }, function() {
      this.props.updateCounter(this.state.counter);
    })
  }

  reset() {
    this.setState({
      counter: 0
    }, function() {
      this.props.updateCounter(this.state.counter);
    })
  }

  renderEmpty() {
    return (
        <div><p>Loading...</p></div>
      )
  }

  renderLine(object) {
    return (<li><h2>${object}</h2></li>)
  }

 
  render() {
    console.log("Counter.render");
    const { loading } = this.props;
    const { counterTitle, counter } = this.state;

 const images = [
    'image1',
    'image2',
    'image3',
    'image4'
  ];


    return (
      <div className="counter">
      {loading && this.renderEmpty()}
        <div>
          <h2>
            {counterTitle}: {counter}
          </h2>
          <ul>
            {images.map( (name) => this.renderLine(name))}
          </ul>
          <nav>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            <button onClick={this.reset}>reset</button>
          </nav>
        </div>
        

      </div>
    );
  }
}

Counter.propTypes = {
  loading: PropTypes.bool,
  title: PropTypes.string.isRequired,
  initialValue: PropTypes.number.isRequired
};

Counter.defaultProps = {
  title: 'new counter',
  initialValue: 0,
};

export default Counter;
