import React, { useState, useEffect } from "react";
import "./App.css";
import { getBuys } from "./api/buy";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [buys, setBuys] = useState(null);

  useEffect(() => {
    const fetchBuys = async () => {
      const buys = await getBuys();
      setBuys(buys);
    };
    fetchBuys();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/add">
          <div>ADD BUY</div>
        </Route>
        <Route path="/">
          <div>BUYS</div>
        </Route>
      </Switch>
      <div className="App">
        {buys?.map((buy) => (
          <div key={buy.id}>{buy.item}</div>
        ))}
      </div>
    </Router>
  );
}

export default App;
