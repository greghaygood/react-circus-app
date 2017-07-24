import React, { Component } from 'react';

import './App.css';

import Header from './Header';

// var i=3;
// let j=4;

class App extends Component
{
  render() {
    
    let name = 'my name from some api call'; // get_logged_in_user().name;

    let image = "myimage.png";
    const styles={
      display: 'inline-block',
    };

    return (
      <div className="App">
        <Header title={`my title: ${name}`} />
        <Header title="my other title" />
        <form>
        <label htmlFor="my-radio" />
        <input name="my-radio" />
        </form>
        <span style={styles}>hi</span>
        <p className="App-intro">
          sasdfasdf <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );

  }
}

export default App;
