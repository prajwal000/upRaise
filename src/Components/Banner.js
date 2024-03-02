import React from 'react'
import microsoft from "../assets/microsoft.svg"
import bnb from "../assets/airbnb.svg"
import bissel from "../assets/bissell.svg"
import imgBanner from "../assets/main.webp"
import { Link } from 'react-router-dom'


const Banner = () => {
  return (
    <>
    <section className='container banner'>
    <div className='row '>
    <div className='col-lg-6 p-5'>
    <h1 className='banner-line'>Fuel Innovation,<br/> Ignite Change.</h1>
    <h4 className='slogan'>Building Companies, Breaking Barriers, <br/>Together.</h4>
    <div className='pt-3'><Link to="/login"><button className='primary-button'>Get Started</button></Link></div>
    <div className='py-3'>
    <h6 className='trust p-3'>Trusted by :</h6>
    <div className=' d-flex'>
    <img src={microsoft} alt='' width="100px"/>
    <img src={bnb} alt='' width="90px" className=''/>
    <img src={bissel} alt=''  className='ms-3'/>
    </div>
    </div>
    </div>
    <div className='col-lg-6 pt-4'>
      <img src={imgBanner} width="500px" className='image'/>
    
    </div>

    </div>
    </section>
    </>
  )
}

export default Banner