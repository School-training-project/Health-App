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
import React, { Component,useEffect } from 'react';

class Landing extends Component {
    render() {
        let score = parseInt(localStorage.getItem("score"))
        let scorehome= localStorage.getItem('scorehome')
        score+=parseInt(scorehome)
        window.onload= setTimeout(() => {
            const higher =document.getElementById("scoreContainer")
            if ((score >100)&&(higher)){
                higher.style.animation="myAnim 2s ease 0s infinite normal forwards"
                higher.style.boxShadow="0px 0px 15px 5px #6756CC"
            }
        }, 200);{
            
        }
        
        
        return (
            <Router>
                <Switch>
                    <Route path="/signin" component={Signout} />
                    <div>
                        <div className="Top" id="navforhigher"
                        >
                            <Navbar />
                        </div>
                        <div className="notnav"
                        style={{
                            overflow:"hidden"
                        }}
                        >
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
