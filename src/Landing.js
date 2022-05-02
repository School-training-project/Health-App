import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Test from "./pages/index.js";
import map from "./pages/Map/map";
import Progress from "./pages/progress.js";
import quiz from "./pages/quiz";
import home from "./pages/home";
import { Signout } from "./pages/signout";
import { blog } from "./pages/blog";
import DarkMode from "./components/DarkMode/DarkMode";
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { Component } from 'react';

class Landing extends Component {
    render() {
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
                            <Route exact path="/test" component={Test} />
                            <Route path="/home" component={home} />
                            <Route path="/progress" component={Progress} />
                            <Route path="/quiz" component={quiz} />
                            <Route path="/blog" component={blog} />
                            <Route path="/map" exact component={map} />
                        </div>
                    </div>
                </Switch>
            </Router>
        )
    }
}
export default Landing
