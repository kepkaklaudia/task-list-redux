import React from "react";
import Tasks from "./features/tasks/Tasks";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

export default () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">Zadania</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/zadania">
          <Tasks />
        </Route>
      </Switch>
    </nav>
  </BrowserRouter>
);
