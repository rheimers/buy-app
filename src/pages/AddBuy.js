import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postBuy } from "../api/buy";

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
      <header>
        <h1>BUY</h1>
        <h2>more</h2>
      </header>
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
        <li></li>
      </main>
      <footer>
        <Link to="/">BUY</Link>
      </footer>
    </>
  );
}

export default AddBuy;
