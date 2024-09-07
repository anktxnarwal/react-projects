import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
function Transaction({ transaction }) {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <div>
      <li className=" my-2 flex justify-between items-center px-2 py-1 bg-white/90 rounded-md shadow-md">
        {transaction.text}{" "}
        <span
          className={transaction.amount > 0 ? "text-green-600" : "text-red-600"}
        >
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="font-bold rounded-full bg-gray-200 aspect-square px-2 hover:bg-gray-300 duration-400"
        >
          x
        </button>
      </li>
    </div>
  );
}

export default Transaction;
