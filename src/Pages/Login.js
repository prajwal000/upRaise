import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom';
import { useAuthContext } from '../Auth/AuthContext';

const Login = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("");
    const {signIn}=useAuthContext();
  return (
    <> 
    <Navbar/>
    <div className='form-div'>
    <div className='Login mt-5 p-5'>
    <form onSubmit={(e)=>{
      signIn(email,password)
      e.preventDefault();
    }}
    className=''
    >
      <h4>Sign In</h4>
     
      <div className='my-3'>
        <label>Email:</label>
        <input type='email' className='form-control  mt-2 p-2' placeholder='Enter your email address' 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div className='my-3'>
      <label>Password:</label>
      <input type='password' className='form-control  mt-2 p-2' placeholder='Enter your Password' 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
    </div>
   
     
  <div>
  <button className='primary-button '>Login</button>
  </div>
    </form>
  </div>
  </div>
<div className='text-center pt-3'>
or

<h6 className='main-color pt-3'><Link to="/create-an-account" className='links'>Create an Account</Link></h6>
</div>
  </>
  )
}

export default Login