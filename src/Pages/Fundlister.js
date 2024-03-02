import React from 'react'
import Navbar from '../Components/Navbar'
import company from "../assets/company.jpg"
import victim from "../assets/victim.jpg"
import { Link } from 'react-router-dom'
const Fundlister = () => {
  return (
    <>
    <Navbar/>
    <section className='container py-3'>
    <div className='row'>
    <div className='col-lg-6 '>
   <Link to="/fun-lister/organizations-list">
   <div className='position-relative '>
   <img src={company} alt='' width="100%" height="650px" className='img1 '/>
   <div className='position-absolute text-position1'>
   <h3>Fund Raising Organizations <i class="bi bi-arrow-right"></i></h3>
   <p>Find growing companies and help them <br/>grow by funding them.
   Be part as an investor<br/> in an Company.
   </p>
   </div>
   </div>
   </Link>
    <div>
    
    </div>
    </div>
    <div className='col-lg-6'>
   <Link to="/fun-lister/charity-list">
   <div className='position-relative'>
   <img src={victim} alt='' width="100%" height="650px" className='img1'/>
   <div className='position-absolute text-position1'>
   <h3>Charity Raising Organizations <i class="bi bi-arrow-right"></i></h3>
   <p>Help the organizations in need to help people.<br/>
   Help those who seek for help.
   </p>
   </div>
   </div>
   </Link>
    </div>

    </div>
    </section>
    </>
  )
}

export default Fundlister