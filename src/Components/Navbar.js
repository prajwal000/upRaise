import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("admin-token");
        alert("You have been logged out");
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg bg-white border-bottom py-4">
            <div className="container">
                <Link className="navbar-brand main-color" to="/"><span className='nav-logo'>Up</span>Raise</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
                    {
                       localStorage.getItem("admin-token") ? (
                          <>
                              <li className="nav-item">
                                  <Link className="nav-link" aria-current="page" to="/">Home</Link>
                              </li>
                              <li className="nav-item">
                                  <Link className="nav-link" to="/admin/home">Admin Dashboard</Link>
                              </li>
                              {/* Add more admin-specific links here */}
                              <li className="nav-item">
                                  <button className='btn btn-danger' onClick={logout}>Logout</button>
                              </li>
                          </>
                      ) : localStorage.getItem("token") ? (
                          <>
                              <li className="nav-item">
                                  <Link className="nav-link" aria-current="page" to="/">Home</Link>
                              </li>
                              <li className="nav-item">
                                  <Link className="nav-link" to="/about">About us</Link>
                              </li>
                              
                              <li className="nav-item">
                                  <Link className="nav-link" to="/contact">Contact Us</Link>
                              </li>
                              <li>
                                  <Link to="/fund-raiser" className="nav-link">Fund Raiser</Link>
                              </li>
                              <li>
                                  <Link to="/fund-lister" className="nav-link">Fund Lister</Link>
                              </li>
                              <li>
                                  <button className="btn btn-danger" onClick={logout}>Logout</button>
                              </li>
                          </>
                      ) : (
                          <>
                              <li className="nav-item">
                                  <Link className="nav-link" aria-current="page" to="/">Home</Link>
                              </li>
                              <li className="nav-item">
                                  <Link className="nav-link" to="/about">About us</Link>
                              </li>
                             
                              <li className="nav-item">
                                  <Link className="nav-link" to="/Contact">Contact Us</Link>
                              </li>
                              <li>
                                  <Link to="/login"><button className="primary-button">Login / Create Account</button></Link>
                              </li>
                          </>
                      )
                  }
                  
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
