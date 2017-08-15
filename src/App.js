import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Counter from "./Counter";
import Header from "./Header";
import Lifecycle from "./Lifecycle";
import CounterForm from "./CounterForm";
import Form from "./Form";
import Root from "./Root";
import NotFound404 from "./NotFound404";

const CounterPage = (num, updateCounter) => (
  <Counter num={num} updateCounter={updateCounter}  />
)

const FormWrapper = (currentCount, updateCounter) => (
  <CounterForm counter={currentCount} updateCounter={updateCounter} />
)

class App extends Component {

  constructor(props) {
    super(props);

    this.updateCounter = this.updateCounter.bind(this);

    this.state = {
      counter: 0
    };
  }

  updateCounter(newCount) {
    console.log('got a new val', newCount)
    this.setState({counter: newCount})
  }

  render() {
    console.log('App.render');
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <Header counter={this.state.counter} />
          </div>
          <div className="App-Main">
            <Switch>
              <Route path="/" exact component={Root} />
              <Route path="/counter1" component={() => CounterPage(1, this.updateCounter)} />
              <Route path="/lifecycle" component={Lifecycle}  />
              <Route path="/form" component={() => Form()}  />
              <Route path="/counter-form" component={() => FormWrapper(this.state.counter, this.updateCounter)} />
              <Route component={NotFound404} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
