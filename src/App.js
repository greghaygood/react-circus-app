import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Counter from "./Counter";
import Header from "./Header";
import Form from "./Form";
import Root from "./Root";
import Lifecycle from "./Lifecycle";
import NotFound404 from "./NotFound404";

const CounterPage = (num) => (
  <Counter num={num} />
);

function doA() {

}

var doB = function() {

}

const FormWrapper = () => (
  <Form initialValue="43" />
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <Header />
          </div>
          <div className="App-Main">
            <Switch>
              <Route path="/" exact component={Root} />
              <Route path="/form" component={FormWrapper} />
              <Route path="/lifecycle" component={Lifecycle} />
              <Route path="/counter1" component={() => CounterPage(1)} />
              <Route path="/counter2" component={() => CounterPage(2)}  />
              <Route component={NotFound404} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
