import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Users from "./components/Users";
import Employees from "./components/Employees";

const routing = (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/employees">Employees</Link>
        </li>
      </ul>
    </div>

    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/users">
        <Users />
      </Route>
      <Route exact path="/employees">
        <Employees />
      </Route>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById("root"));
