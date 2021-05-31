import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const { state } = React.useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return state.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        );
      }}
    />
  );
};
