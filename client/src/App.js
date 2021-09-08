import React from "react";
import "./App.css";
import AppClimbs from './AppClimbs'
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/" component={() => <h1>Home</h1>} />
          <Route exact path="/climbs" component={AppClimbs} />
   
        </Switch>
      </div>
    </>
  );
}

export default App;

