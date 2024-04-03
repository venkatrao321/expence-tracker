import { useState } from "react";
import Card from "../ui/Cards";
import './wallet.css'
import Model from "../Modal/Modal";
function Wallet({walletBalance}) {
  const [openBalModel,SetOpenBalModel]=useState(false);
 
    return ( 
        <>
          <Card buttonText={'+ Add Income'} cardText={'Wallet Balance:'} btncolor={'green'} SetOpenBalModel={SetOpenBalModel}  walletMoney={walletBalance}></Card>
         <Model type="walletModal"openBalModel={openBalModel} SetOpenBalModel={SetOpenBalModel}></Model>
          
        </>
    
     );
}

export default Wallet;