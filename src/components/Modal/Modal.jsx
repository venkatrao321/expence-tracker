import ReactModal from 'react-modal';
import { useState,useContext } from 'react';
import {MyContext} from "../../Utils/ExpenceCategoryContex.jsx"
import { walletContext } from '../../Utils/WalletContex.jsx';
import { ExpenceContext } from '../../Utils/ExpencesContext.jsx';
const Model = ({type,openModel,SetOpenModel,Category}) => {
  const [inputs, setInputs] = useState({});
 const {expenceCategory,setExpenceCategory}=useContext(MyContext);
 const {walletBalance,setWalletBalance}=useContext(walletContext);
 const {expence,setExpence}=useContext(ExpenceContext)
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }
  const onSubmitAddBal=(s)=>{
    s.preventDefault()
    if(inputs.addBalance>0){
      setWalletBalance(Number(inputs.addBalance)+walletBalance);
    }
  }
  const onSubmitexpence=(s)=>{
    s.preventDefault();
    if(walletBalance>0&&inputs.price<walletBalance){
    setExpenceCategory([...expenceCategory,inputs])
    if(inputs.price>0){
      setExpence(Number(inputs?.price)+expence)
      setWalletBalance(walletBalance-Number(inputs?.price));
    }}
    else{
      alert("Wallet balance exceeded you had exceeded the limit")
    }
  }
  const OnClickCloseModal=()=>{
    SetOpenModel(false);
    setInputs({})
  }
    return (
      <>
        <ReactModal
          className={
            "walletModel position-absolute top-50 start-50 translate-middle"
          }
          isOpen={openModel}
          onRequestClose={() => {
            SetOpenModel(false);
          }}
          ariaHideApp={false}
        >
          {type === "walletModal" ? (
            <form className="d-flex gap-2" onSubmit={onSubmitAddBal}>
              <input
                type="number"
                className="form-control"
                placeholder="Income Amount"
                name="addBalance"
                value={inputs.addBalance || ""}
                onChange={handleChange}
              ></input>
              <button type="submit" className="btn btn-warning">
                AddBalance
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={OnClickCloseModal}
              >
                Cancel
              </button>
            </form>
          ) : type === "expenceModal" ? (
            <>
              <form onSubmit={onSubmitexpence}>
                <div className="row mb-2">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control "
                      placeholder="Title"
                      name="title"
                      value={inputs.title || ""}
                      onChange={handleChange}
                      required
                    ></input>
                  </div>
                  <div className="col-6">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Price"
                      name="price"
                      value={Number(inputs.price) || ""}
                      onChange={handleChange}
                      required
                    ></input>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-6">
                    <select
                      className="form-select "
                      name="category"
                      onChange={handleChange}
                      value={inputs.category || ""}
                      aria-label="select Category"
                    >
                      <option>select Category</option>
                      {Category?.length > 0
                        ? Category.map((category, index) => {
                            return (
                              <option key={index} value={category}>
                                {category}
                              </option>
                            );
                          })
                        : ""}
                    </select>
                  </div>
                  <div className="col-6">
                    <input
                      className="form-control"
                      type="datetime-local"
                      name="daytime"
                      placeholder="Select Date-time"
                      onChange={handleChange}
                      value={inputs.daytime || ""}
                      required
                    />
                  </div>
                </div>
                <div className="float-end">
                  <button type="submit" className="btn btn-warning">
                    AddExpence
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={OnClickCloseModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </>
          ) : (
            ""
          )}
        </ReactModal>
      </>
    );
}
 
export default Model;