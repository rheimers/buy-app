import React, { useState, useEffect } from "react";
import "./App.css";
import { getBuys } from "./api/buy";

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
    <div className="App">
      {buys?.map((buy) => (
        <div key={buys.id}>{buy.item}</div>
      ))}
    </div>
  );
}

export default App;
