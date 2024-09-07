import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className="my-5">
      <h4 className="text-md text-gray-800 font-semibold">Your Balance</h4>
      <h1 className="text-3xl font-bold text-gray-900">${total}</h1>
    </div>
  );
}

export default Balance;
