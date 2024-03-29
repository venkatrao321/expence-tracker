import "./DashbordHeadSeaction.css"
import Expenses from "./Expenses/Expenses";
import Wallet from "./Wallet/Wallet";
function DashbordHead({balance,setBalance,expence,setExpence}) {
    return ( 
    <>
    <div className="DashbordHead" >
        <Wallet balance={balance} setBalance={setBalance}></Wallet>
        <Expenses expence={expence} setExpence={expence}></Expenses>
    </div>
    </> 
    );
}

export default DashbordHead ;