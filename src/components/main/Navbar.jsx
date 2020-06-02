import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { sessionLogout } from "../../redux_store";

const logOut = (dispatch) => {
  dispatch(sessionLogout());
  document.location.href = "/";
};

const getSessionBtn = (token, dispatch) => {
  if (token && token !== "") {
    return (
      <Button onClick={() => logOut(dispatch)} variant="outline-light">
        Cerrar sesión
      </Button>
    );
  }
  return (
    <Link className="btn btn-outline-light" to="/login">
      Iniciar sesión
    </Link>
  );
};

function MainNavbar() {
  const { token } = useSelector((state) => state.session);
  const dispatch = useDispatch();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Prueba LFP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">
            Inicio
          </Link>
          <Link to="/users" className="nav-link">
            Usuarios
          </Link>
        </Nav>
        {getSessionBtn(token, dispatch)}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNavbar;
