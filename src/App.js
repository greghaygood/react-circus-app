import React, { Component } from 'react';

import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
 
import Header from './Header';
import Counter from './Counter';
import Root from './Root';
import About from './About';
import NotFound404 from './NotFound404';

class App extends Component
{

  constructor(props) {
      super(props);

      this.state = {
        name: 'Greg',
      };
    }


  render() {
    
    let { name } = this.state;

    let image = "myimage.png";
    const styles={
      display: 'inline-block',
    };

    return (
      <BrowserRouter>
        <div className="App">
          <Header name={name} title={`hello: ${name}`} />

          <Switch>
            <Route path="/" exact component={Root} />
            <Route path="/about"  component={About} />
            <Route component={NotFound404} />
          </Switch>

          
          <Counter />
          <Counter />
        </div>
      </BrowserRouter>
    );

  }
}

export default App;
