import './Body.css';
import DashbordHead from '../DashbordHeadSection/DashbordHeadSection';
import { useState } from 'react';
function Body() {
  const [balance,setBalance]=useState(5000)
  const [expence,setExpence]=useState(0)
  return (
    <div>
        <h2 className='app-header'>Expense Tracker</h2>
        <DashbordHead balance={balance} expence={expence} setBalance={setBalance} setExpence={setExpence}></DashbordHead>
    </div>
  );
}

export default Body;