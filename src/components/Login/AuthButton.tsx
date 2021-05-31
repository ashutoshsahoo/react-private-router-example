import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { logoutAction } from "../../reducers/AuthReducer";
import { AuthContext } from "../../context/AuthContext";

export const AuthButton = () => {
  const history = useHistory();
  const { state, dispatch } = React.useContext(AuthContext);
  const signOut = () => {
    dispatch(logoutAction);
    setTimeout(() => history.push("/"), 100);
  };
  return state.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <Button variant="dark" onClick={signOut}>
        Sign out
      </Button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
};
