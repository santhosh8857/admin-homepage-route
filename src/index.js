import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Users from "./components/Users";
import Employees from "./components/Employees";

const routing = (
  <BrowserRouter>
    <div className="d-flex flex-row">
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          to="/"
          class="sidebar-brand d-flex align-items-center justify-content-center"
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </Link>

        <hr class="sidebar-divider my-0" />

        <li class="nav-item active">
          <Link class="nav-link" to="/">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <hr class="sidebar-divider" />

        <div class="sidebar-heading">Interface</div>

        <li class="nav-item">
          <Link
            to="/users"
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <span>
              <i class="fas fa-users"></i> Users
            </span>
          </Link>
        </li>

        <li class="nav-item">
          <Link
            to="/employees"
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <span>
              <i class="fas fa-briefcase"></i> Employees
            </span>
          </Link>
        </li>

        <hr class="sidebar-divider" />
      </ul>
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
    </div>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById("root"));
