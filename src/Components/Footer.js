import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <section className='pt-5 '>
    <div className='border-top py-5 '>
    <div className='container'>
    <h3> <Link className="navbar-brand main-color" to="/"><span className='nav-logo'>Up</span>Raise</Link></h3>
   
    <div className='row '>
    <div className='col-lg-4 py-3'>
    <h6  className='footer-slogan'>Building Companies, Breaking Barriers, <br/>Together.</h6>

   <p className='footer-p'>We see Companies as a home for creative
   minds and a wonderful platform; where
   people who believe, respect, and see the
   vision can support an idea and make it a reality.</p>
    </div>
    <div className='col-lg-2'>
    <ul className='footer-list'>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact US</li>

    </ul>
    </div>
    <div className='col-lg-2'>
    <ul className='footer-list'>
    <li>Blog</li>
    <li>Privacy & Policy</li>
    <li>Career</li>

    </ul>
    </div>
    <div className='col-lg-2'>
    <ul className='footer-list'>
    <li>Help & Support</li>
    <li>Sucess Stories</li>
    <li>Get Started</li>

    </ul>
    </div>

    </div>
    <div className=''>
    <h5 className='social'>Follow Us at : <i className="bi bi-facebook mx-3 logos"></i><i className="bi bi-twitter me-3 logos"></i><i className="bi bi-linkedin me-3 logos"></i> </h5>
   
    </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default Footer