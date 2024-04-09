import "./DashbordHeadSeaction.css"
import Expenses from '../Expenses/Expenses'
import Wallet from "../Wallet/Wallet";
import { useState } from 'react';
function DashbordHead() {
    const [balance,setBalance]=useState(5000)
    const [expence,setExpence]=useState(0)
    return ( 
    <>
        <h2 className='app-header'>Expense Tracker</h2>
        <div className="DashbordHead" >
            <Wallet walletBalance={balance} setwalletBalance={setBalance}></Wallet>
            <Expenses expence={expence} setwalletBalance={setBalance} setExpence={setExpence}></Expenses>
        </div>
    </> 
    );
}

export default DashbordHead ;