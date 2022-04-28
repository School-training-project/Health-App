import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import { Signout } from "./pages/signout";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <div className="App">
            <Route exact path="/Register" component={Signout} />
            <Route exact path="/login" component={Signout} />
            <Route exact path="/" component={Landing} />
          </div>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
