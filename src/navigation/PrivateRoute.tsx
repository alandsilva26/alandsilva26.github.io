import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuth, IContext } from "../context/AuthContext";

// interface IProp extends RouteProps {
//   component: React.ReactNode;
// }

const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const { user } = useAuth() as IContext;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/admin/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

export {};
