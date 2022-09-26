import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import LoginPage from "./LoginPage";
import GamePage from "./GamePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={GamePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route component={() => <h1 className="m-3">Not Found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
