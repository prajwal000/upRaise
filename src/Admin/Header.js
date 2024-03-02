import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate=useNavigate("")
    const logout=()=>{
        localStorage.removeItem("admin-token")
        alert("you have been loged out");
        navigate("/")
      }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-4">
    <div className="container">
      <Link className="navbar-brand main-color" to="/"><span className='nav-logo'>Up</span>Raise</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
          <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " href="/Aboutus">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/Blogs">Blogs</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" href="/Contact">Contact Us</Link>
      </li>
          <li className="nav-item">
          <Link className="nav-link" to="/fund-raiser">Fund Raiser</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/fund-lister">Fund Lister</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/admin/home">DashBoard</Link>
    </li>
        <li className="nav-item">
        <button className='btn btn-danger' onClick={logout}>Logout</button>
      </li>
        </ul>
       
      </div>
    </div>
  </nav>
  
    </>
  )
}

export default Header