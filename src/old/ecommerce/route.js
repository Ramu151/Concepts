import React from "react";
import { Link, Route, Switch } from "react-router";
import { pathParams } from "./pathparams";
import loadable from "@loadable/component";

const LoadableComponent = loadable(props => {
  const { pageComponentName, routeProps } = props;
  console.log("^^^^^^^  LoadedComponent  ^^^^^^^", pageComponentName, props);
  return import(/*webpackChunkName: "[request]" */ `./pages/${pageComponentName}`);
});

const Routes = () => {
  return <SetRoutes />;
};

const SetRoutes = () => {
  return (
    <div>
      {pathParams.map(ele => {
        console.log("loosu", ele, ele.component);
        return (
          <Route
            exact
            path={ele.path}
            render={props => {
              return (
                <>
                  <LoadableComponent pageComponentName={ele.component} />
                </>
              );
            }}
          />
        );
      })}
    </div>
  );
};

export { Routes };
export default Routes;
