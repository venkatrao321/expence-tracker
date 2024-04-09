import ReactModal from 'react-modal';
import { useState } from 'react';

const Model = ({type,openModel,SetOpenModel,setwalletBalance,walletBalance}) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const onSubmitAddBal=(s)=>{
    s.preventDefault()
    if(inputs.addBalance>0){
      setwalletBalance(Number(inputs.addBalance)+walletBalance)
    }

  }
    return (  
        <>
         <ReactModal className={'walletModel position-absolute top-50 start-50 translate-middle'} isOpen={openModel} onRequestClose={()=>{
            SetOpenModel(false)
          }}
          ariaHideApp={false}>
         {type==='walletModal'?  (<form className="d-flex gap-2" onSubmit={onSubmitAddBal}>
                <input type="number" className="form-control" placeholder="Income Amount" name='addBalance' value={inputs.addBalance || ""} 
        onChange={handleChange} ></input>
                <button type='submit' className="btn btn-warning">AddBalance</button>
                <button type="button" className="btn btn-secondary"onClick={()=>{SetOpenModel(false)}}>Cancel</button>
            </form>):
          (type ==='expenceModal'?<></>:'')
            }
            </ReactModal>
        </>
    );
}
 
export default Model;