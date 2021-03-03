import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginPage from "./LoginPage";
import GamePage from "./GamePage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={GamePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route component={() => <h1 className="m-3">Not Found</h1>} />
    </Switch>
  );
}

export default App;
