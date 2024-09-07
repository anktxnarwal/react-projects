import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";
function IncomeExprense() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;
  return (
    <div className="bg-white rounded-lg shadow-lg px-5 py-2 flex justify-around gap-x-5 w-4/6 sm:w-1/4 font-semibold">
      <div>
        <h4>Income</h4>
        <p className="text-green-500 text-xl">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="text-red-500 text-xl">{expense}</p>
      </div>
    </div>
  );
}

export default IncomeExprense;
