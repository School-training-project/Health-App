import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./AnimatedRoutes";
import { BrowserRouter as Router, Switch, Route,  useLocation } from "react-router-dom";

import { Signout } from "./pages/signout";

import DarkMode from "./components/DarkMode/DarkMode";
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  const location = useLocation();
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={Signout} />
        <div>
          <div className="nav">
            <Navbar />
          </div>

          <div className="notnav">

            <DarkMode />
            <AnimatedRoutes/>
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
