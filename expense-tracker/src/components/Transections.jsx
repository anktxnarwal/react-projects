import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
function Transections() {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="w-4/6 sm:w-1/4 my-3 flex flex-col ">
      <h3 className="">History</h3>
      <div className="h-[2px] rounded-xl bg-black/80 mb-3 mt-1 "></div>
      <ul>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}
export default Transections;
