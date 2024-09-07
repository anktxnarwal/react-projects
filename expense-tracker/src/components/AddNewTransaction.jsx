import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
function AddNewTransaction() {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  function onSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  }
  return (
    <div className="w-4/6 flex flex-col gap-y-1 sm:w-1/4">
      <h3 className="text-center font-semibold text-xl ">
        Add New Transaction
      </h3>
      <form onSubmit={onSubmit} className=" ">
        <div>
          <label htmlFor="text" className="flex flex-col">
            Text
            <input
              required
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text..."
              className="input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="amount" className="flex flex-col">
            Amount : (negative - expense, positive - income)
            <input
              required
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="input"
            />
          </label>
        </div>
        <button className="text-center shadow-md bg-blue-400 text-white mt-2 rounded-lg py-1 px-4 hover:bg-blue-600 uppercase duration-200">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddNewTransaction;
