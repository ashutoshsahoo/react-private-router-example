import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { logoutAction } from "../../reducers/AuthReducer";

export const Header = () => {
  const history = useHistory();
  const { state, dispatch } = React.useContext(AuthContext);
  const logOut = () => {
    dispatch(logoutAction);
    setTimeout(() => history.push("/"), 100);
  };

  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>Private Route Example</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/public">
            <Nav.Link>Public Page</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/error">
            <Nav.Link>Error Page</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/protected">
            <Nav.Link>Protected Page</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          {!state.isAuthenticated ? (
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          ) : (
            <LinkContainer to="/logout">
              <Nav.Link onClick={logOut}>Logout</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
