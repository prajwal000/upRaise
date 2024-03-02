import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import Banner2 from "../Components/Banner4"


const FundRaiser = () => {
  return (
    <>
    <Navbar/>
    <section className='container'>
 <div className='text-center pt-3 d-flex justify-content-center py-5 mt-5'>
<div className='me-4 '><Link to="/fund-raiser/createpost" className='links'>Create a Post</Link></div> /
<div className='ms-4 '><Link to="/myposts" className='links'> Your Posts</Link></div>
 </div>
 <Banner2/>
    </section>
    </>
  )
}

export default FundRaiser