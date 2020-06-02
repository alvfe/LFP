import {
  SESSION_FAILURE,
  SESSION_LOGOUT,
  SESSION_REQUEST,
  SESSION_SUCCESS,
} from "./sessionTypes";

const initialState = {
  token: null,
  loading: false,
  error: "",
};

const sessionReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SESSION_REQUEST:
      return {
        ...state,
        token: null,
        loading: true,
        error: "",
      };

    case SESSION_SUCCESS:
      return {
        ...state,
        token: payload,
        loading: false,
        error: "",
      };

    case SESSION_FAILURE:
      return {
        ...state,
        token: null,
        loading: false,
        error: payload,
      };

    case SESSION_LOGOUT:
      return {
        ...state,
        token: null,
        loading: false,
        error: "",
      };

    default:
      return state;
  }
};

export default sessionReducer;
