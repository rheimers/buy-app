import React, { useState, useEffect } from "react";
import { getBuys } from "../api/buy";
import { Link } from "react-router-dom";
import cartPlusSrc from "../assets/cartPlus.svg";
import cartMinusSrc from "../assets/cartMinus.svg";
import "./Home.css";
import StyledHeader from "../components/StyledHeader";

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
      <StyledHeader>
        <h1>BUY</h1>
      </StyledHeader>
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
          <img className="cartMinus" src={cartMinusSrc} alt="cart plus" />
          <img className="cartPlus" src={cartPlusSrc} alt="cart plus" />
        </Link>
      </footer>
    </div>
  );
}

export default Home;
