import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/tasks/author/Author";
import { StyledNavLink } from "./styled";

const App = () => (
  <>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <StyledNavLink to="/zadania">Zadania</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/autor">O autorze</StyledNavLink>
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