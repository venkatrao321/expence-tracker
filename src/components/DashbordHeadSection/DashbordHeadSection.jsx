import "./DashbordHeadSeaction.css"
import Expenses from '../Expenses/Expenses'
import Wallet from "../Wallet/Wallet";
import { useState,createContext } from 'react';
import { MyProvider } from "../Utils/ExpenceCategoryContex";
import Charts from "../Charts/Charts";
export const categoryContext=createContext();
function DashbordHead() {
    const [balance,setBalance]=useState(5000)
    const [expence,setExpence]=useState(0)
    const Category=[
        'FOOD',
        'Entertainment',
        'Travel',
        'Shopping',
        'Others'
    ]

    return ( 
    <>
        <MyProvider>
        <h2 className='app-header'>Expense Tracker</h2>
        <div className="DashbordHead" >
            <Wallet walletBalance={balance} setwalletBalance={setBalance}></Wallet>
            <Expenses expence={expence} Category={Category} setwalletBalance={setBalance} setExpence={setExpence}></Expenses>
            <Charts></Charts>
        </div>
        </MyProvider>
    </> 
    );
}

export default DashbordHead ;