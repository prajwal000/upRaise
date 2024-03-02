import React from 'react'
import Navbar from '../Components/Navbar';

const Contactus = () => {
    
  return (
    <>
    <Navbar/>
    <div className='form-div'>
    <div className='Login mt-5 p-5'>
    <form onSubmit={(e)=>{
    
      e.preventDefault();
    }}
    className=''
    >
      <h4>Sign In</h4>
      <div className='my-3'>
        <label>Name:</label>
        <input type='text' className='form-control  mt-2 p-2' placeholder='Enter your full Name' 
        />
      </div>
      <div className='my-3'>
        <label>Email:</label>
        <input type='email' className='form-control  mt-2 p-2' placeholder='Enter your email address' 
        />
      </div>
      <div className='my-3'>
      <label>Message</label>
      <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
 <label for="floatingTextarea">Comments</label>
</div>
      </div>
   
     
  <div>
  <button className='primary-button '>Login</button>
  </div>
    </form>
  </div>
  </div>

    </>
  )
}

export default Contactus