import axios from "axios";
import {
  FETCH_USER_INFO_REQUEST,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_FAILURE,
} from "./userInfoTypes";

const FETCH_USER_INFO_URL = "https://reqres.in/api/users/";

// FETCH SINGLE USER INFO

export const fetchUserInfoRequest = () => ({
  type: FETCH_USER_INFO_REQUEST,
});

const fetchUserInfoSuccess = (userInfo) => ({
  type: FETCH_USER_INFO_SUCCESS,
  payload: userInfo,
});

const fetchUserInfoFailure = (error) => ({
  type: FETCH_USER_INFO_FAILURE,
  payload: error,
});

export const fetchUserInfo = (userId) => (dispatch) => {
  dispatch(fetchUserInfoRequest());
  axios
    .get(FETCH_USER_INFO_URL + userId)
    .then((response) => {
      const userInfo = response.data.data;
      dispatch(fetchUserInfoSuccess(userInfo));
    })
    .catch((error) => {
      const errMsg = error.message;
      dispatch(fetchUserInfoFailure(errMsg));
    });
};
