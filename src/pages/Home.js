import React, { useState, useEffect } from "react";
import { getBuys } from "../api/buy";

function Home() {
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
        <div key={buy.id}>{buy.item}</div>
      ))}
    </div>
  );
}

export default Home;
