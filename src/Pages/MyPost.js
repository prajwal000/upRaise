import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';

const MyPost = () => {
    const [uploads, setUploads] = useState([]);

    const fetchData = async () => {
        try {
            const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsdDk5cXdscDAwMDEyaXNxNjhqb2Vmb2UiLCJlbWFpbCI6InRlc3QxMjNAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJzdXNwZW5kZWQiOmZhbHNlLCJpYXQiOjE3MDkzNDk0MDcsImV4cCI6MTcwOTM5MjYwN30.CgJDhSYmjLViLnT_eossTdgF-eS18CuZfbxgfUe8OoE"
            const response = await axios.get('http://10.200.10.59:3969/api/v1/get-my-fund',{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response);
            setUploads(response.data); 
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <h5 className='text-center py-4'>My Uploads</h5>

            <section className='container'>
            <div className="card"  style={{ width: '18rem' }}>
            <img src={require("../assets/company.jpg")} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">title</h5>
                <p className="card-text">des</p>
                <a  className="primary-button">view</a>
            </div>
        </div>
            </section>
        </>
    );
}

export default MyPost;
