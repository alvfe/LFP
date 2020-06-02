import axios from "axios";
import {
  SESSION_FAILURE,
  SESSION_LOGOUT,
  SESSION_REQUEST,
  SESSION_SUCCESS,
} from "./sessionTypes";

const sessionRequest = () => ({
  type: SESSION_REQUEST,
});

const sessionSuccess = (token) => ({
  type: SESSION_SUCCESS,
  payload: token,
});

const sessionFailure = (error) => ({
  type: SESSION_FAILURE,
  payload: error,
});

export const sessionLogout = () => ({
  type: SESSION_LOGOUT,
});

export const sessionLogin = (sessionData) => {
  const { email, password } = sessionData;
  return (dispatch) => {
    dispatch(sessionRequest());
    axios
      .post("https://reqres.in/api/login", { email, password })
      .then((response) => {
        const { token } = response.data;
        dispatch(sessionSuccess(token));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(sessionFailure(errMsg));
      });
  };
};
