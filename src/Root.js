import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

import Counter from './Counter';
class Root extends Component
{
  	render() {

  		const { title } = this.props;
  		
  		return (
	    	<div className="">
	         ROOT

           <form>
          <label htmlFor="my-radio" />
          <input name="my-radio" />
          </form>
          <p className="App-intro">
            sasdfasdf <code>src/App.js</code> and save to reload.
          </p>
          <Counter />
	        </div>
        );

    }
}


export default Root;