import Card from "../ui/Cards";
import Model from "../Modal/Modal";
import { useState } from "react";
const Expenses = ({ expence, setExpence, setwalletBalance }) => {
  const [openExpenceModel, SetOpenExpenceModel] = useState(false);
  return (
    <>
      <Card
        buttonText={"+ Add Expense"}
        cardText={"Expenses:"}
        btncolor={"red"}
        walletMoney={expence}
      ></Card>
      <Model
        type="expenceModal"
        openModel={openExpenceModel}
        SetOpenModel={SetOpenExpenceModel}
        walletBalance={expence}
        setwalletBalance={setExpence}
      ></Model>
    </>
  );
};

export default Expenses;
