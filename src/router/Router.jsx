import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Page404 } from "../pages/Page404";
import { TodoPage } from "../pages/TodoPage";
import { User } from "../pages/User";
import { UserDetail } from "../pages/UserDetail";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/todopage">
        <TodoPage />
      </Route>
      <Route
        path="/user"
        render={({ match: { url } }) => {
          return (
            <Switch>
              <Route exact path={url}>
                <User />
              </Route>
              <Route path={`${url}/detail`}>
                <UserDetail />
              </Route>
              <Route path="*">
                <Page404 />
              </Route>
            </Switch>
          );
        }}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
