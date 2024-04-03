import ReactModal from 'react-modal';

const Model = ({type,openBalModel,SetOpenBalModel }) => {
    return (  
        <>
         <ReactModal className={'walletModel position-absolute top-50 start-50 translate-middle'} isOpen={openBalModel} onRequestClose={()=>{
            SetOpenBalModel(false)
          }}
          ariaHideApp={false}>
         {type==='walletModal'?  (<div className="d-flex gap-2">
                <input type="number" className="form-control" placeholder="Income Amount"></input>
                <button className="btn btn-warning">AddBalance</button>
                <button type="button" class="btn btn-secondary"onClick={()=>{
            SetOpenBalModel(false)
          }}>Cancel</button>
            </div>):
            
            ''
            
            
            }
            </ReactModal>
        </>
    );
}
 
export default Model;