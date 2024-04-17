import ReactModal from 'react-modal';
import { useState } from 'react';

const Model = ({type,openModel,SetOpenModel,setwalletBalance,walletBalance,Category}) => {
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
  const onSubmitexpence=(s)=>{
    s.preventDefault()
    console.log(inputs)
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
          (type ==='expenceModal'?<>
              <form className="d-flex gap-2" onSubmit={onSubmitexpence} >
              <input type="text" className="form-control" placeholder="Title" name='title' value={inputs.title || ""} onChange={handleChange} ></input>
              <input type="number" className="form-control" placeholder="Price" name='price' value={inputs.price || ""}  onChange={handleChange} ></input>
              <select className="form-select form-select-sm" onChange={handleChange} value={inputs.Category  || ""}aria-label="select Category">
                <option defaultValue={'select Category'}>select Category</option>
               {Category?.length>0?(Category.map(category=>{
                return <option key={category} value={category}>{category}</option>
               })):''}
              </select>
                <input type="datetime-local" name="daytime" placeholder="Select Date-time" onChange={handleChange} value={inputs.time  || ""} />
                <button type='submit' className="btn btn-warning">AddExpence</button>
                <button type="button" className="btn btn-secondary"onClick={()=>{SetOpenModel(false)}}>Cancel</button>
              </form>

          </>:'')


          
            
            }
            </ReactModal>
        </>
    );
}
 
export default Model;