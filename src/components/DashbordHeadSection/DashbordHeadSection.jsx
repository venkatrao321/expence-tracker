import "./DashbordHeadSeaction.css";
import Expenses from "../Expenses/Expenses";
import Wallet from "../Wallet/Wallet";
import {createContext } from "react";
import { MyProvider } from "../../Utils/ExpenceCategoryContex";
import { WalletBalProvider } from "../../Utils/WalletContex";
import Charts from "../Charts/Charts";
import { ExpenceBalProvider } from "../../Utils/ExpencesContext";
export const categoryContext = createContext();
function DashbordHead() {
  const Category = ["FOOD", "Entertainment", "Travel", "Shopping", "Others"];
  return (
    <>
      <WalletBalProvider>
        <ExpenceBalProvider>
        <MyProvider>
          <h2 className="app-header">Expense Tracker</h2>
          <div className="DashbordHead">
            <Wallet></Wallet>
            <Expenses
              Category={Category}
            ></Expenses>
            <Charts></Charts>
          </div>
        </MyProvider>
        </ExpenceBalProvider>
      </WalletBalProvider>
    </>
  );
}

export default DashbordHead;
