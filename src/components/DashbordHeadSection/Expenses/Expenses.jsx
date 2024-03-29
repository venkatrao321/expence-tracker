import Card from "../../ui/Cards";

const Expenses = ({expence}) => {
    return ( 
        <>
            <Card buttonText={'+ Add Expense'} cardText={'Expenses:'} btncolor={'red'} walletMoney={expence}></Card>
        </>
     );
}
 
export default Expenses;