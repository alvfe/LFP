import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import store from "./redux_store/store";

import "./App.css";
import Users from "./components/users/Users";
import LoginForm from "./components/login/LoginForm";
import MainNavbar from "./components/main/Navbar";
import MainTemplate from "./components/main/MainTemplate";
import UserInfo from "./components/users/UserInfo";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainNavbar />
        <MainTemplate>
          <Switch>
            <Route exact path="/">
              <div></div>
            </Route>
            <Route exact path="/login">
              <LoginForm />
            </Route>
            <PrivateRoute exact path="/users">
              <Users />
            </PrivateRoute>
            <PrivateRoute path="/users/:id" component={UserInfo} />
          </Switch>
        </MainTemplate>
      </Router>
    </Provider>
  );
}

function isAuthenticated() {
  const { token } = store.getState().session;

  if (token && token !== "") {
    return true;
  }

  return true;
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default App;
