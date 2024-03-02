import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Link, redirect, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import AdminDash from './AdminDash';
import axios from 'axios';
import { useAuthContext } from '../Auth/AuthContext';

const AdminPage = () => {
    const navigate = useNavigate();
    const [postRequests, setPostRequests] = useState([]);
    const {view}=useAuthContext();
    

    const fetchData = async () => {
        try {
            const token = localStorage.getItem("admin-token");
            const response = await axios.get('http://10.200.10.59:3969/api/v1/admin/user/verificaiton-request', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // console.log(response.data.data.companies);
            setPostRequests(response.data.data.companies)
            
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
       
        const adminToken = localStorage.getItem("admin-token");
        if (!adminToken) {
            navigate("/");
        }
    }, [navigate]);
const accept = async (data) => {
    const panNumber = data.panNumber;

    try {
        const token = localStorage.getItem("admin-token");
        const requestBody = { panNumber }; // Assuming the server expects an object with a key "panNumber" containing the PAN number

        await axios.patch(
            'http://10.200.10.59:3969/api/v1/admin/verify-new-registration',
            requestBody,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json' // Make sure to set the content type appropriately
                }
            }
        );
        console.log("worked");
       alert("You have sucessfully accepted this user")
      fetchData()
    } catch (error) {
        console.error('Error:', error);
    }
}
    
// const accept=async(data)=>{
// const panNumber=data.panNumber
// // console.log(panNumber)

// try {
//     const token = localStorage.getItem("admin-token");
//     // const panNumber = "your_pan_number_here"; 

//     await axios.patch(
//         'http://10.200.10.59:3969/api/v1/admin/verify-new-registration',
//         panNumber, 
//         {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         }
//     );
//     console.log("worked")
// } catch (error) {
//     console.error('Error:', error);
    
// }
// }

// const handleDelete = async (data) => {
//     const panNumber=data.panNumber;
//     console.log(`\n\n ----- panNumber :: ${panNumber} ----\n\n`);
//     try {
 
//         // const token = localStorage.getItem("admin-token");
//         const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsdDhtbXIzbDAwMDFpYTZ0cG5icHphbXkiLCJlbWFpbCI6Iml0c21leW91cnN1amFuQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsInN1c3BlbmRlZCI6ZmFsc2UsImlhdCI6MTcwOTMxNTY3NywiZXhwIjoxNzA5MzU4ODc3fQ.Ljyi6pPGdBU-IyR8RCg43Ckto93EWB2npWQKjedOjZk";
//         await axios.delete('http://10.200.10.59:3969/api/v1/admin/delete-company',        
//         panNumber,
//         {
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`
//             },
           
//         });
       
//         console.log('Company deleted successfully');
//     } catch (error) {
//         console.error('Error deleting company:', error);
//     }
// };
const handleDelete = async (data) => {
    const panNumber = data.panNumber;
    console.log(`\n\n ----- panNumber :: ${panNumber} ----\n\n`);
    try {
        // const token = localStorage.getItem("admin-token");
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsdDhtbXIzbDAwMDFpYTZ0cG5icHphbXkiLCJlbWFpbCI6Iml0c21leW91cnN1amFuQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsInN1c3BlbmRlZCI6ZmFsc2UsImlhdCI6MTcwOTMxNTY3NywiZXhwIjoxNzA5MzU4ODc3fQ.Ljyi6pPGdBU-IyR8RCg43Ckto93EWB2npWQKjedOjZk";

        await axios.delete('http://10.200.10.59:3969/api/v1/admin/delete-company', {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            data: { panNumber: panNumber }
        });

        console.log('Company deleted successfully');
    } catch (error) {
        console.error('Error deleting company:', error);
    }
};

    return (
        <>
            <Navbar />
            <div className='row'>
                <AdminDash />
                <div className='col-lg-10'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Company Name</th>
                                <th scope="col">Company Address</th>
                                <th scope="col">Company Pan Number</th>
                                <th scope="col">Accept</th>
                                <th scope='col'>Decline</th>
                                <th scope='col'>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {postRequests.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.name}</td>
                                    <td>{data.address}</td>
                                    <td>{data.panNumber}</td>
                                    <td><button className='primary-button' onClick={() => accept(data)}>Accept</button></td>
                                    <td><button className='danger' onClick={() => handleDelete(data)}>Decline</button></td>
                                  <td> <span onClick={() => view(data)}><i className="bi bi-eye-fill fs-3"></i></span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}


export default AdminPage;
