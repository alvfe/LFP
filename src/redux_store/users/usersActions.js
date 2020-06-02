import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./usersTypes";

const FETCH_USERS_URL = "https://reqres.in/api/users";

// FETCH ALL USERS

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export const fetchUsers = () => (dispatch) => {
  dispatch(fetchUsersRequest());
  axios
    .get(FETCH_USERS_URL)
    .then((response) => {
      const users = response.data.data;
      dispatch(fetchUsersSuccess(users));
    })
    .catch((error) => {
      const errMsg = error.message;
      dispatch(fetchUsersFailure(errMsg));
    });
};
