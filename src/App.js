import  React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import Landing from "./Landing";
import { Signout } from "./pages/signout";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/private-route/PrivateRoute";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./";
  }
}

function App() {
  const location= window.location
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={Signout} />
        </div>
        <Switch>
          <PrivateRoute  path="/test" component={Landing} />
          <PrivateRoute  path="/progress" component={Landing} />
          <PrivateRoute  path="/home" component={Landing} />
          <PrivateRoute  path="/map" component={Landing} />
          <PrivateRoute  path="/quiz" component={Landing} />
          <PrivateRoute  path="/blog" component={Landing} />
        </Switch>
        
      </Router>
    </Provider>
  );
}

export default App;
