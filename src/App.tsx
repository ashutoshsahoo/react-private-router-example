import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import { Container } from "react-bootstrap";
import { ColorfulBorder } from "./components/ColorfulBorder/ColorfulBorder";
import { authReducer } from "./reducers/AuthReducer";
import { AuthContext, initialState } from "./context/AuthContext";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { Login } from "./components/Login/Login";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { ErrorHandler } from "./components/ErrorHandler";
import { Header } from "./components/Header/Header";

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

const ErrorFallback = ({ error }: FallbackProps) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
};

export const App = () => {
  const [state, dispatch] = React.useReducer(authReducer, initialState);

  // verify property read from .env file.
  console.log(process.env.REACT_APP_NOT_SECRET_CODE);
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AuthContext.Provider
        value={{
          state,
          dispatch
        }}
      >
        <Container fluid>
          <ColorfulBorder />
          <Router>
            <Header />
            <Route path="/public">
              <Public />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/error">
              <ErrorHandler />
            </Route>
            <PrivateRoute path="/protected">
              <Protected />
            </PrivateRoute>
          </Router>
        </Container>
      </AuthContext.Provider>
    </ErrorBoundary>
  );
};
