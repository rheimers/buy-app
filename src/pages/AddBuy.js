import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddBuy() {
  const [item, setItem] = useState("");
  const [qty, setQty] = useState("");

  function handleItemChange(event) {
    setItem(event.target.value);
  }

  function handleQtyChange(event) {
    setQty(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert("Submitted" + item + qty);
  }

  return (
    <>
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
      <Link to="/">BUY</Link>
    </>
  );
}

export default AddBuy;
