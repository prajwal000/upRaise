import React from 'react'
import { useAuthContext } from '../Auth/AuthContext'
import Navbar from '../Components/Navbar';
import axios from 'axios';

const Fulldetails = () => {
    const {postData2}=useAuthContext();
    console.log(postData2)
    const handleSubmit=async(panNumber)=>{
 try{
    const token=localStorage.getItem("token")
const res=axios.post('http://10.200.10.59:3969/api/v1/intrested',panNumber, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
console.log(res.data);
 }catch(error){
console.log(error)
 }
    }
  return (
    <>
    <Navbar/>
    <section className='p-4 container'>
    <div className='d-flex align-items-center'>
    <img src={postData2.logo} alt=''/>
    <h4>Details of Company : {postData2.name}</h4>
    </div>
    <div className='px-5'>
    <p>Title: {postData2.title}</p>
    <div>PanNumber: {postData2.panNumber}</div>
    <div>Established: {postData2.establishment.slice(0,10)}</div>
    <div>Address: {postData2.description}</div>
    <div>{postData2.equityPercentage}% of Company for for {postData2.equityAmount}</div>
    <div>Valuation of company: {postData2.valuation}</div>
    <div>Posted on: {postData2.startDate.slice(0,10)}</div>
    <div>Valid Till on: {postData2.endDate.slice(0,10)}</div>
    <p>Description: {postData2.companyDescription}</p>
    <button className='primary-button' onClick={handleSubmit(postData2.panNumber)}>Intrested </button>
   
    <div>
   
  </div>
  

    </div>
    </section>
    </>
  )
}

export default Fulldetails