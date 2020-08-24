import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postBuy } from "../api/buy";
import StyledHeader from "../components/StyledHeader";
import StyledFooter from "../components/StyledFooter";
import backSrc from "../assets/back.svg";

function AddBuy() {
  const [item, setItem] = useState("");
  const [qty, setQty] = useState("");

  function handleItemChange(event) {
    setItem(event.target.value);
  }

  function handleQtyChange(event) {
    setQty(event.target.value);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    await postBuy({
      item,
      qty,
    });
    setItem("");
    setQty("");
  }

  return (
    <>
      <StyledHeader>
        <h1>BUY</h1> <h2>more</h2>
      </StyledHeader>
      <main>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Product"
            value={item}
            onChange={handleItemChange}
          />
          <input placeholder="Qty" value={qty} onChange={handleQtyChange} />
          <input type="submit" value="ADD BUY" />
        </form>
      </main>
      <StyledFooter>
        <h2>Let's go</h2>
        <Link to="/">
          <img className="back" src={backSrc} alt="back arrow" />
        </Link>
      </StyledFooter>
    </>
  );
}

export default AddBuy;
