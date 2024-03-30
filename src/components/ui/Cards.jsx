
import './card.css'
function Card({buttonText,cardText,walletMoney,btncolor,SetOpenBalModel}) {
    const btnfunction=function(params) {
        if(buttonText==='+ Add Income')
        SetOpenBalModel(true)
        console.log(params)
    }
    return (  
        <div className="card-continer">
        <h3>{`${cardText}₹${walletMoney}`}</h3>
        <button onClick={btnfunction} className={`btn ${btncolor}`}>{buttonText}</button>
        </div>
    );
}

export default Card;