import { useState } from "react";
import Card from "../ui/Cards";
import "./wallet.css";
import Model from "../Modal/Modal";
function Wallet({ walletBalance, setwalletBalance }) {
  const [openBalModel, SetOpenBalModel] = useState(false);

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
        walletBalance={walletBalance}
        setwalletBalance={setwalletBalance}
      ></Model>
    </>
  );
}

export default Wallet;
