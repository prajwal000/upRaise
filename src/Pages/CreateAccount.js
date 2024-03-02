import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../Auth/AuthContext';
import axios from 'axios';

const CreateAccount = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const[contactNumber,setContactNumber]=useState("");
  const[password,setPassword]=useState("");
const navigate=useNavigate()
  //create account const[sucess,setSucess]=useState(false)
  const create=async(name,email,contactNumber,password)=>{
    if (email.length === 0 || password.length === 0 ||name.length===0 ||contactNumber.length===0) {
      alert("Please fill up all fields");  
    }
    const userData={
      name,email,contactNumber,password
    }
    try {
      const response = await axios.post('http://10.200.10.59:3969/api/v1/auth/registration', userData);
      console.log(response.data)
      if(response.data.success===true){
        alert("Account Created")
        navigate("/login")
      } 
    } catch (error) {
      console.error("Error during create", error); 
     
      
      
    }
  }

  return (
    <> 
    <Navbar/>
   <div className='text-center py-4'> <Link className='links ' to="/login">Go Back</Link></div>
    <div className='form-div'>
    <div className='Login  p-5'>
    <form onSubmit={(e)=>{
      create(name,email,contactNumber,password)
      e.preventDefault();
    }}
    className=''
    >
      <h4>Create an Account</h4>
      <div className='my-3'>
        <label>Name:</label>
        <input type='text' className='form-control  mt-2 p-2' placeholder='Enter your Full Name' 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
      </div>
      <div className='my-3'>
        <label>Email:</label>
        <input type='email' className='form-control  mt-2 p-2' placeholder='Enter your email address' 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div className='my-3'>
      <label>Phone:</label>
      <input type='text' className='form-control  mt-2 p-2' placeholder='Enter your Phone Number' 
      value={contactNumber}
      onChange={(e)=>setContactNumber(e.target.value)}
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

  </>
  )
}

export default CreateAccount