import Card from "../ui/Cards";
import Model from "../Modal/Modal";
import { useState,useContext } from "react";
import { ExpenceContext } from "../../Utils/ExpencesContext";
const Expenses = ({ Category }) => {
  const [openExpenceModel, SetOpenExpenceModel] = useState(false);
  const {expence}=useContext(ExpenceContext)
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
        Category={Category}
      ></Model>
    </>
  );
};

export default Expenses;
