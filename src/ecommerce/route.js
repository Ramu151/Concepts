import React from "react";
import { Link, Route, Switch } from "react-router";
import { pathParams } from "./pathparams";
import { Home } from "./pages/home";

const Routes = () => {
  return <SetRoutes />;
};

const SetRoutes = () => {
  return (
    <div>
      {pathParams.map(ele => {
        console.log("loosu", ele.path, ele.component);
        return (
          <Route
            path={ele.path}
            render={props => {
              return <ele.component />;
            }}
          />
        );
      })}
    </div>
  );
};

export { Routes };
export default Routes;
