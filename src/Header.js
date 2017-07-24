import React, { Component } from 'react';
import logo from './logo.svg';

import { Link } from 'react-router-dom';

class Header extends Component
{
  	render() {

  		const { title } = this.props;
  		
  		return (
	    	<div className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <h2>{title}</h2>

            <nav>
   
                <Link to="/">HOME</Link>
                
                <Link to="/about">ABOUT</Link>
     
            </nav>
	        </div>
        );

    }
}


export default Header;