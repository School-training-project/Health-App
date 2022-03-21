import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import test from "./pages/index.js";
import map from "./pages/map";
import Progress from "./pages/progress.js";
import quiz from "./pages/quiz";
import { Signout } from "./pages/Signout";
import { blog } from "./pages/blog";
import DarkMode from "./components/DarkMode/DarkMode";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/signin" component={Signout} />
          <div>
            <Navbar />
              <Route exact path="/" component={test} />
              <Route path="/progress" component={Progress} />
              <Route path="/quiz" component={quiz} />
              <Route path="/blog" component={blog} />
              <Route path="/map" exact component={map} />
          </div>
      </Switch>
      <DarkMode/>
    </Router>
    
    
  );
}

export default App;
