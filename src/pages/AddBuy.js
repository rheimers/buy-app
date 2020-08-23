import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postBuy } from "../api/buy";
import StyledHeader from "../components/StyledHeader";

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
          <label>
            Item:
            <input value={item} onChange={handleItemChange} />
          </label>
          <label>
            QTY:
            <input value={qty} onChange={handleQtyChange} />
          </label>
          <input type="submit" value="ADD BUY" />
        </form>
      </main>
      <footer>
        <Link to="/">BUY</Link>
      </footer>
    </>
  );
}

export default AddBuy;
