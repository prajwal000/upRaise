import React from 'react'
import banner4 from "../assets/banner4img.webp"
import { Link } from 'react-router-dom'

const Banner4 = () => {
  return (
    <>
    <section className=''>
    <div className='container banner4'>
    <div className='row'>
    <div className='col-lg-7 ps-5 pt-5'>
   <div className=' b4-line '>Enterprise Suite </div>
   <h1 className='b4-text '>This is how</h1>
   <h1 className='b4-text2'>Good companies<br/>
   find Good company.</h1>
   <p>Access the top 1% of talent on Upwork, and a full suite of hybrid workforce management tools. This is how innovation works now. </p>
   <Link to="/login"><button className='secondary'>Get Started</button></Link>
   
   
   </div>

    <div className='col-lg-5'>
    <img src={banner4} alt=''  width="100%" height="500px" className='ms-3 b4-image'/>
    </div>

    </div>
    </div>
    </section>
    </>
  )
}

export default Banner4