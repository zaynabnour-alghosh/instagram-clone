import Modal from 'react-modal';
import './new.css';
const NewPost = () =>{
 
  return(
    <Modal
      isOpen="true"
      
      className="modal"
      overlayClassName="overlay"
    >
      <div className='form-container'>
          <div className='rowP'>
            <label>Post</label>
            <input type='file'/>
          </div>
          <div className="rowP">
            <input type='text' placeholder='Caption'/>
          </div>
      </div>
      <div className='buttons-container'>
        <button>Cancel</button>
        <button>Create</button>
      </div>
    </Modal>
  )
}

export default NewPost;