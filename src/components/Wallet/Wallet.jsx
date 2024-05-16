import { useState,useContext } from "react";
import Card from "../ui/Cards";
import "./wallet.css";
import Model from "../Modal/Modal";
import { walletContext } from "../../Utils/WalletContex";

function Wallet() {
  const [openBalModel, SetOpenBalModel] = useState(false);
  const {walletBalance}=useContext(walletContext);
  return (
    <>
      <Card
        buttonText={"+ Add Income"}
        cardText={"Wallet Balance:"}
        btncolor={"green"}
        SetOpenModel={SetOpenBalModel}
        walletMoney={walletBalance}
      ></Card>
      <Model
        type="walletModal"
        openModel={openBalModel}
        SetOpenModel={SetOpenBalModel}
      ></Model>
    </>
  );
}

export default Wallet;
