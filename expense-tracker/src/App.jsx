import AddNewTransaction from "./components/AddNewTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExprense from "./components/IncomeExprense";
import Transections from "./components/Transections";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <div className="bg-gray-300 py-14 overflow-hidden min-h-screen h-full ">
      <GlobalProvider>
        <Header />
        <div className="w-full flex flex-col items-center">
          <Balance />
          <IncomeExprense />
          <Transections />
          <AddNewTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
