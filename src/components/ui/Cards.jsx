
import './card.css'
function Card({buttonText,cardText,walletMoney,btncolor}) {
    return (  
        <div className="card-continer">
        <h3>{`${cardText}₹${walletMoney}`}</h3>
        <button className={`btn ${btncolor}`}>{buttonText}</button>
        </div>
    );
}

export default Card;