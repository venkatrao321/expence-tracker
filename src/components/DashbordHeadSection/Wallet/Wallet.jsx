import Card from "../../ui/Cards";
function Wallet({balance}) {
    return ( 
        <>
          <Card buttonText={'+ Add Income'} cardText={'Wallet Balance:'} btncolor={'green'} walletMoney={balance}></Card>  
        </>
     );
}

export default Wallet;