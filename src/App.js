import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import test from './pages/index.js';
import map from './pages/map'
import Progress from './pages/progress.js';
import quiz from './pages/quiz';
import { signout } from './pages/signout';
import { blog } from './pages/blog';
import { useState } from 'react'
import { ThemeProvider } from "styled-components";
import ToggleButton from './components/model/splashscreen'


const LightTheme = {
  pageBackground :"white",
  titleColor: "#dc658b",
  tagLineColor: "black"
};

const DarkTheme = {
  pageBackground:"#282c34",
  titleColor: "lightpink",
  tagLineColor:"lavender"
}

const themes ={
  light: LightTheme,
  dark: DarkTheme
}

function App() {
  const [theme, setTheme] = useState("light")
  return (
    <Router>
      <Navbar />
      <Switch>
        
        <Route exact path="/" component={test}/>
        <Route path="/progress" component={Progress} />
        <Route path="/quiz" component={quiz} />
        <Route path="/blog" component={blog} />
        <Route path="/map" exact component={map}/>
        <Route path="/signin" component={signout} />
      </Switch>
    </Router>
    
    
  );
};

export default App;