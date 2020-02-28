import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "./components/sign-in/sign-in.component";
import SignUp from "./components/sign-up/sign-up.component";

import "./App.css";

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/react-node-signup-signin" component={SignIn} />
      <Route exact path="/react-node-signup-signin/signup" component={SignUp} />
    </Switch>
  </div>
);

export default App;
