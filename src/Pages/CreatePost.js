import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import company from "../assets/company.jpg"
import victim from "../assets/victim.jpg"

const CreatePost = () => {
  return (
    <>
    <Navbar/>
    <section className='container'>
   <div className='py-4 '> <Link to="/fund-raiser" className='links primary-links'><i class="bi bi-arrow-left"></i>Back</Link></div>
    <div className='row'>
    <div className='col-lg-6 '>
   <Link to="/fund-raiser/createpost/organization">
   <div className='position-relative '>
   <img src={company} alt='' width="100%" height="600px" className='img1 '/>
   <div className='position-absolute text-position1'>
   <h3>Raise Fund For Organization <i class="bi bi-arrow-right"></i></h3>
   </div>
   </div>
   </Link>
    <div>
    
    </div>
    </div>
    <div className='col-lg-6'>
   <Link to="/fund-raiser/createpost/charity">
   <div className='position-relative'>
   <img src={victim} alt='' width="100%" height="600px" className='img1'/>
   <div className='position-absolute text-position1'>
   <h3>Raise fund For Charity<i class="bi bi-arrow-right"></i></h3>
   </div>
   </div>
   </Link>
    </div>

    </div>
    </section>
    </>
  )
}

export default CreatePost