import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Log from "../components/Login";
import Reg from "../components/Register";
import Wel from "../components/Welcome";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/reg">
          <Reg />
        </Route>
        <Route path="/wel">
          <Wel />
        </Route>
        <Route path="/log">
          <Log />
        </Route>
      </Switch>
    </Router>
  );
}
