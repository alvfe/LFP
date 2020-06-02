import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sessionLogin } from "../../redux_store";

function LoginForm() {
  // Store Redux
  const { loading, error, token } = useSelector((state) => state.session);
  const dispatch = useDispatch();
  // Estado interno
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const logIn = () => {
    let msg = "";
    if (email !== "" && password !== "") {
      dispatch(sessionLogin({ email, password }));
    } else {
      msg = "Debes ingresar correo y contraseña";
    }

    setErrorMessage(msg);
  };

  if (token) {
    return <Redirect to="/" />;
  }

  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="input_email">Usuario</label>
              <input
                id="input_email"
                className="form-control"
                type="email"
                placeholder="correo"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="input_pssw">Contraseña</label>
              <input
                id="input_pssw"
                className="form-control"
                type="password"
                placeholder="contraseña"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            {errorMessage !== "" ? (
              <p className="text-danger">{errorMessage}</p>
            ) : (
              ""
            )}
            {error !== "" ? (
              <p className="text-danger">
                Error al iniciar sesión, verifica tu usuario y contraseña
              </p>
            ) : (
              ""
            )}
            <button
              type="button"
              className="btn btn-success"
              onClick={logIn}
              disabled={loading}
            >
              Ingresar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
