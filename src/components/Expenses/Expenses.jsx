import Card from "../ui/Cards";
import Model from "../Modal/Modal";
import { useState } from "react";
const Expenses = ({ expence, setExpence, setwalletBalance,Category }) => {
  const [openExpenceModel, SetOpenExpenceModel] = useState(false);

  return (
    <>
      <Card
        buttonText={"+ Add Expense"}
        cardText={"Expenses:"}
        btncolor={"red"}
        SetOpenModel={SetOpenExpenceModel}
        walletMoney={expence}
      ></Card>
      <Model
        type="expenceModal"
        openModel={openExpenceModel}
        SetOpenModel={SetOpenExpenceModel}
        expence={expence}
        setExpence={setExpence}
        Category={Category}
      ></Model>
    </>
  );
};

export default Expenses;
