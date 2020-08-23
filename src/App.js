import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddBuy from "./pages/AddBuy";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add">
          <AddBuy />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
