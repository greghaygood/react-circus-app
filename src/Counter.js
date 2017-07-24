import React, { Component } from 'react';
import logo from './logo.svg';

class Counter extends Component
{
    constructor(props) {
      super(props);

      this.increment = this.increment.bind(this);

      this.state = {
        counter: 0,
      };
    }

    increment() {
      console.log('increment()', this);
      this.setState({
        counter: this.state.counter + 1,
      })
    }

  	render() {

  		const { title } = this.props;
      const { counter } = this.state;
  		
  		return (
        <div>
    	        <p>
              Counter: {counter}
              </p>
            <button onClick={this.increment}>+</button>
        </div>
        );

    }
}


export default Counter;