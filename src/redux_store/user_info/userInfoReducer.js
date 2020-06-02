import {
  FETCH_USER_INFO_REQUEST,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_FAILURE,
} from "./userInfoTypes";

const initialState = {
  loading: false,
  error: "",
  userInfo: null,
};

const fetchUserInfoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USER_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        userInfo: null,
        error: "",
      };

    case FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: payload,
        error: "",
      };

    case FETCH_USER_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        userInfo: null,
        error: payload,
      };

    default:
      return state;
  }
};

export default fetchUserInfoReducer;
