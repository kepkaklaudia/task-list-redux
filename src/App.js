import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import Author from "./features/tasks/author/Author";
import { StyledNavLink, Navigation, UnorderedList } from "./styled";

const App = () => (
  <>
    <BrowserRouter>
      <Navigation>
        <UnorderedList>
          <li>
            <StyledNavLink to="/zadania">Zadania</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/autor">O autorze</StyledNavLink>
          </li>
        </UnorderedList>
      </Navigation>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <Author />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
);

export default App;