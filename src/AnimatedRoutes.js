import React from 'react' ;
import { Route, Switch, useLocation } from 'react-router-dom';
import test from "./pages/index.js";
import map from "./pages/Map/map";
import Progress from "./pages/progress.js";
import quiz from "./pages/quiz";
import home from "./pages/home";
import { blog } from "./pages/blog"

import {AnimatePresence} from 'framer-motion/dist/framer-motion';

function AnimatedRoutes() {
const location = useLocation();
return (
<AnimatePresence>
  <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={test} />
            <Route path="/home" component={home} />
            <Route path="/progress" component={Progress} />
            <Route path="/quiz" component={quiz} />
            <Route path="/blog" component={blog} />
            <Route path="/map" exact component={map} />
   </Switch>
</AnimatePresence>
);
}
export default AnimatedRoutes