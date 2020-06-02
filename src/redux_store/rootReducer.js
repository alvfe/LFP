import { combineReducers } from "redux";
import usersReducer from "./users/usersReducer";
import userInfoReducer from "./user_info/userInfoReducer";
import sessionReducer from "./session/sessionReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  userInfo: userInfoReducer,
  session: sessionReducer,
});

export default rootReducer;
