import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../Auth/AuthContext';

const OrganizationLists = () => {
  const [companyData, setCompanyData] = useState([]);
  const {details}=useAuthContext();

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://10.200.10.59:3969/api/v1/fund", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setCompanyData(response.data.data.item);
      // console.log(response.data.data.item[2])
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <section className='py-5 container'>
        <div className="row">
          {
            companyData.map((data) => (
            <div  className='col-lg-4 my-3'>
              <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={data.logo} alt={data.companyName} />
                <div className="card-body">
                  <h5 className="card-title">Name:{data.name}</h5>
                  <div className="card-text ">Address:{data.description}</div>
                  <p className="card-text border-bottom">Title:{data.title}</p>
                  <div className="card-text py-2"> ASK: {data.name} is open to invest for {data.equityPercentage}% for{data.equityAmount}</div>
                  <div className="card-text pb-3">Company description :{data.companyDescription}</div>

                 
                  <button className="primary-button" onClick={() => details(data)}>view full details</button>
                </div>
              </div>
            </div>
          ))
        }
        </div>
      </section>
    </>
  );
};

export default OrganizationLists;
