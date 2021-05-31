import React from "react";
import { Button } from "react-bootstrap";
import { useLocation, Redirect } from "react-router-dom";
import { loginAction } from "../../reducers/AuthReducer";
import { AuthContext } from "../../context/AuthContext";

export const Login = () => {
  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);

  const { dispatch } = React.useContext(AuthContext);

  const { state }: any = useLocation();

  const login = () => {
    dispatch(loginAction);
    setRedirectToReferrer(true);
  };

  if (redirectToReferrer === true) {
    return <Redirect to={state?.from || "/"} />;
  }

  return (
    <div>
      <p>Login Here!</p>
      <Button variant="dark" onClick={login}>
        Log in
      </Button>
    </div>
  );
};
