import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { useAuthContext } from '../Auth/AuthContext';
import { Link } from 'react-router-dom';


const ViewPost = () => {

    const postData =useAuthContext();
    console.log(postData.postData)
    return (
        <>
        <Navbar/>
        <section className='container py-4'>
        <Link to="/admin/home" className='links main-color'> <h6>Back</h6></Link>

        <div className='py-4 row'>
       <div className='col-lg-6 pt-5'>
       <div className='d-flex align-items-center'>
       <img src={postData.postData.logo} alt=' ' className='me-4'/>
       <h4>Company Data Of {postData.postData.name}</h4>
       </div>
       <div className='p-5'>
       <h6>Title : {postData.postData.title}</h6>
       <h6>Pannumber:{postData.postData.panNumber}</h6>
       <h6>Address:{postData.postData.description}</h6>

       <h6> Neeed funding for {postData.postData.equityPercentage}% for {postData.postData.equityAmount}</h6>
<h6>Established:{postData.postData.establishment.slice(0,10)}</h6>
<h6>From:{postData.postData.startDate.slice(0,10)}</h6>
<h6>To: {postData.postData.endDate.slice(0,10)}</h6>
<p className='pt-3'>Description:{postData.postData.companyDescription}</p>
       </div>
       
      <div className='ps-5'>
      <button className='primary-button'>Accept</button>
      <button className=' danger ms-4'>Decline</button>
      </div>


       </div>
       <div className='col-lg-6'>
       <embed src={postData.postData.document} type="application/pdf" width="100%" height="400px" />

       </div>

        </div>
        </section>
        </>
    );
}

export default ViewPost;
