import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { DataAppContext } from "../DataApp";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const localContext = useContext(DataAppContext);
  const { appState, setAppState } = localContext;
  const { username, loginStatus } = appState;
  const navigate = useNavigate();

  const logoutFn = () => {
    //update context variable
    setAppState({
      ...appState,
      loginStatus: false,
      username: "",
    });
    navigate("/home");
  };

  return (
    <div>
      <Navbar variant="light">
        <Container>
          <Nav className="me-auto">
            {loginStatus ? (
              <>
                <Nav.Link onClick={logoutFn}>Logout</Nav.Link>
                {loginStatus && <Nav.Link>Hi {username} !</Nav.Link>}
              </>
            ) : (
              <>
                <Nav.Link>
                  <Link to="/login">Login</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/register">Register</Link>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;