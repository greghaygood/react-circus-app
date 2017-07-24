import React, { Component } from 'react';
import logo from './logo.svg';

import Counter from './Counter';
class About extends Component
{
  	render() {

  		const { title } = this.props;
  		
  		return (
	    	<div className="">
	         About

	         <Counter />
	        </div>
        );

    }
}


export default About;