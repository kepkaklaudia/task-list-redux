import React from "react";
import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/tasks/author/Author";

const App = () => (
  <>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/zadania">Zadania</NavLink>
          </li>
          <li>
            <NavLink to="/autor">O autorze</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/zadania">
            <Tasks />
          </Route>
          <Route path="/autor">
            <Author />
          </Route>
        </Switch>
      </nav>
    </BrowserRouter>
  </>
);

export default App;