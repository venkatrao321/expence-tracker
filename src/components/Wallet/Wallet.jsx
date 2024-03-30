import { useState } from "react";
import Card from "../ui/Cards";
import './wallet.css'
import ReactModal from 'react-modal';
function Wallet({walletBalance}) {
  const [openBalModel,SetOpenBalModel]=useState(false);
 
    return ( 
        <>
          <Card buttonText={'+ Add Income'} cardText={'Wallet Balance:'} btncolor={'green'} SetOpenBalModel={SetOpenBalModel}  walletMoney={walletBalance}></Card>  
          <ReactModal className={'walletModel'} isOpen={openBalModel} onRequestClose={()=>{
            SetOpenBalModel(false)
          }}
          ariaHideApp={false}>

          <p>Modal text!</p>
          
          </ReactModal>
        </>
    
     );
}

export default Wallet;