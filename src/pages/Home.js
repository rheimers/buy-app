import React, { useState, useEffect } from "react";
import { getBuys } from "../api/buy";
import "./Home.css";
import StyledHeader from "../components/StyledHeader";
import StyledMain from "../components/StyledMain";
import styled from "@emotion/styled";
import cartPlusSrc from "../assets/cartPlus.svg";
import cartMinusSrc from "../assets/cartMinus.svg";
import { Link } from "react-router-dom";

function Home() {
  const [buys, setBuys] = useState(null);

  useEffect(() => {
    const fetchBuys = async () => {
      const buys = await getBuys();
      setBuys(buys);
    };
    fetchBuys();
  }, []);

  const Container = styled.div`
    padding: 10px;
    border-radius: 15px;
    margin: 5px;
  `;

  const Footer = styled.footer`
    display: flex;
    justify-content: space-around;
    position: absolute;
    left: 10px;
    bottom: 50px;
    right: 10px;
  `;
  function StyledFooter({ children }) {
    return <Footer>{children}</Footer>;
  }

  return (
    <Container>
      <StyledHeader>
        <h1>BUY</h1>
      </StyledHeader>
      <StyledMain>
        {buys?.map((buy) => (
          <div key={buy.id}>
            {buy.item}
            {buy.qty}
          </div>
        ))}
      </StyledMain>
      <StyledFooter>
        <img className="cartMinus" src={cartMinusSrc} alt="cart plus" />
        <Link to="/add">
          <img className="cartPlus" src={cartPlusSrc} alt="cart plus" />
        </Link>
      </StyledFooter>
    </Container>
  );
}

export default Home;
