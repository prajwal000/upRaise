import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import Banner2 from '../Components/Banner2'
import Banner3 from '../Components/Banner3'
import Footer from '../Components/Footer'

const Aboutus = () => {
  return (
    <>
    <Navbar/>
    <section className='container'>
    <h5 className='text-center py-4'>About Us</h5>
    <div className='row'>
    <div className='col-lg-6'>
    <Link className="navbar-brand main-color fs-2" to="/"><span className='nav-logo'>Up</span>Raise</Link>
    <div className=''>Fuel Innovation,
    Ignite Change.</div>
<p className='pt-5 px-5'>UpRaise is specifically for creative projects in the following categories: Art, Comics, Crafts, Dance, Design, Fashion, Film & Video, Food, Games, Journalism, Music, Photography, Publishing, Technology, and Theater. Make an album, write a book, create an immersive theater experience, score a film — you name it.
 Read more about our project guidelines.</p>
 <p className='px-5'>Expect the first few days after launch to be very busy as you spread the word to your community, answer questions from potential backers, and more. You may need to spend the last few days rallying your social networks in order to reach your funding goal.</p>
 <p className='px-5'>
 Expect the first few days after launch to be very busy as you spread the word to your community, answer questions from potential backers, and more. You may need to spend the last few days rallying your social networks in order to reach your funding goal.

Projects sometimes take on a life of their own, and in that case you should expect to spend more time creating and fulfilling rewards.
 </p>
    <div>
    
    </div>
    </div>
    <div className='col-lg-6'>
    <img src={require("../assets/company.jpg")} alt='' width="600px" height="600px" className='about-image'/>

    </div>
    
    </div>
    <Banner3/>
    </section>
    <Banner2/>
    <Footer/>
    </>
  )
}

export default Aboutus