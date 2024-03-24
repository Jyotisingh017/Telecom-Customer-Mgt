import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routeList } from "./routes-list";
//import { HOME } from "./constants";
import Home from "./home/Home";

function Routes() {
  return (
    <Suspense fallback={<></>}>
      <Switch>
        <Route exact path="/" component = {Home}>
        </Route>
        {routeList.map((route) => (
          <Route
            path={route.path}
            key={route.path}
            render={() => <route.Component />}
          ></Route>
        ))}
        <Route path="*">
            <Redirect to="/"/>
        </Route>
      </Switch>
    </Suspense>
  );
}

export default Routes;
