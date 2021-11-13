import React from "react";
import HomeMain from "../views/all-home-version/HomeMain";
import HomeTwo from "../views/all-home-version/HomeTwo";
import HomeFour from "../views/all-home-version/HomeFour";
import NotFound from "../views/NotFound";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path='/' component={HomeMain} />
          <Route path='/sponsor' component={HomeTwo} />
           <Route path='/donate' component={HomeFour} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
