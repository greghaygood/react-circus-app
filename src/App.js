import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Counter from "./Counter";
import Header from "./Header";
import Lifecycle from "./Lifecycle";
import Form from "./Form";
import Root from "./Root";
import NotFound404 from "./NotFound404";

const CounterPage = (num) => (
  <Counter num={num} />
)

class App extends Component {
  render() {
    console.log('App.render');
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <Header />
          </div>
          <div className="App-Main">
            <Switch>
              <Route path="/" exact component={Root} />
              <Route path="/counter1" component={() => CounterPage(1)} />
              <Route path="/counter2" component={() => CounterPage(2)}  />
              <Route path="/lifecycle" component={Lifecycle}  />
              <Route path="/form" component={Form}  />
              <Route component={NotFound404} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
