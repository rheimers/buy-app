import React, { useState, useEffect } from "react";
import { getBuys } from "../api/buy";
import { Link } from "react-router-dom";
import cartPlusSrc from "../assets/cartPlus.svg";
import "./Home.css";

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
    <div className="home">
      <header>
        <h1>BUY</h1>
      </header>
      <main>
        {buys?.map((buy) => (
          <div key={buy.id}>
            {buy.item}
            {buy.qty}
          </div>
        ))}
      </main>
      <footer>
        <Link to="/add">
          <img className="cartPlus" src={cartPlusSrc} alt="cart plus" />
        </Link>
      </footer>
    </div>
  );
}

export default Home;
