import React from 'react'
import { Link } from 'react-router-dom'

const AdminDash = () => {
  return (
    <>
    <div className='col-lg-2 dashboard border-end'>
        <div className='pt-4 ps-4'><Link className="links" to="/admin/home">Verfification Requests</Link></div>
        <div className='py-4 ps-4'><Link className='links' to="/admin/home/blocked-accouunt">Blocked Accounts </Link></div>
        <div className='ps-4'><Link className='links' to="/admin/home/blocked-accouunt">Users </Link></div>

        </div>
    </>
  )
}

export default AdminDash