import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Bearings from "./components/subcom/Bearing";
import Admin from "./components/Admin";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/bearing" component={Bearings} />
                <Route exact path="/admin" component={Admin} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
