import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page404 } from "../Page404";
import { TodoPage } from "../TodoPage";
import { User } from "../User";
import { UserDetail } from "../UserDetail";

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
