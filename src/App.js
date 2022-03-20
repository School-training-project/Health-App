import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import test from "./pages/index.js";
import map from "./pages/map";
import Progress from "./pages/progress.js";
import quiz from "./pages/quiz";
import { signout } from "./pages/signout";
import { blog } from "./pages/blog";

function App() {
  const [theme, setTheme] = useState("light")
  return (
    <Router>
      <Switch>
        
         <Route path="/signin" component={signout} />
         <div>
         <Navbar />
            <Route exact path="/" component={test} />
            <Route path="/progress" component={Progress} />
            <Route path="/quiz" component={quiz} />
            <Route path="/blog" component={blog} />
            <Route path="/map" exact component={map} />
        </div>
      </Switch>
    </Router>
    
    
  );
}

export default App;
