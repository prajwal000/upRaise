import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios';

const Organizaion = () => {
    const [name,setName]=useState("");
    const [title,setTitle]=useState("")
    const[establishment,setEstablishment]=useState("");
    const [companyDescription,setCompanyDescription]=useState("")
    const [description,setDescription]=useState("");
    const [equityPercentage,setEquityPercentage]=useState("");
    const[equityAmount,setEquityAmount]=useState("");
    const [valuation,setValuation]=useState();
    const[startDate,setStartDate]=useState("");
    const [endDate,setEndDate]=useState("");
    const[panNumber,setPanNumber]=useState("");

    const [logo, setLogo] = useState(null);
    const [document, setDocuments] = useState(null);
    const requestData={
        name,
        title,
        establishment,
        description,
        companyDescription,
        equityPercentage,
        equityAmount,
        valuation,
        startDate,
        endDate,
        panNumber
    }
    console.log(logo)
    const handleLogoChange = (event) => {
        const file = event.target.files[0];
        setLogo(file);
    };

    const handleDocumentChange = (event) => {
        const file = event.target.files[0];
        setDocuments(file);
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
       
   
try{
const token =localStorage.getItem("token");

  const res = await axios.post('http://10.200.10.59:3969/api/v1/fund/raise-fund', requestData, {
                  headers: {
                      Authorization: `Bearer ${token}`
                  }
              });
      alert("Your post has been set to review ")
                console.log(res.data);
}catch(error){
console.log(error)
}
       
    };
  return (
    <>
    <Navbar/>
    <section className='mt-5 p-4'>
  <div className='text-center'>
  <h3 className=''>Create a Post For my Organization</h3>
  <span>***Please Enter  Correct Names According to Document.</span>
  </div>
   <form 
   className='px-5'
   onSubmit={handleSubmit}
   >
   <div className='row'>
   <div className='col-lg-6'>
   <div className='my-3'>
        <label>Company Name:</label>
        <input type='text' className='form-control  mt-2 p-2' placeholder='Enter your Company Name' 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
      </div>
      <div className='my-3'>
      <label>Title:</label>
      <input type='text' className='form-control  mt-2 p-2' placeholder='An XYZ Company wants to be Funded with Amount'
      value={title}
      onChange={(e)=>setTitle(e.target.value)} 
      />
    </div>
    <div className='my-3'>
    <label>Company Established Date:</label>
    <input type='text' className='form-control  mt-2 p-2' placeholder='Enter your Company Established Date' 
    value={establishment}
    onChange={(e)=>setEstablishment(e.target.value)}
    />
  </div>
  <div className="mb-3">
  <label >Company Description:</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Please Enter a Description of Company at least letters'
  value={companyDescription}
  onChange={(e)=>setCompanyDescription(e.target.value)}
  ></textarea>
</div>
<div className='my-3'>
<label>Equity Percentage:</label>
<input type='text' className='form-control  mt-2 p-2' placeholder='Enter Percentage you want to be funded' 
value={equityPercentage}
onChange={(e)=>setEquityPercentage(e.target.value)}
/>
</div>
<div className='my-3'>
<label>Equity Amount:</label>
<input type='text' className='form-control  mt-2 p-2' placeholder='Amount For Equity Percentage' 
value={equityAmount}
onChange={(e)=>setEquityAmount(e.target.value)}
/>
</div>
   </div>
   <div className='col-lg-6'>
   
<div className='my-3'>
<label>Valuation:   </label>
<input type="number" className='form-control  mt-2 p-2' placeholder='Valuation' 
value={valuation}
onChange={(e)=>setValuation(e.target.value)}
/>
</div>
<div className='my-3'>
<label>Start Date:</label>
<input type='text' className='form-control  mt-2 p-2' placeholder='Date from You want to be funded' 
value={startDate}
onChange={(e)=>setStartDate(e.target.value)}
/>
</div>
<div className='my-3'>
<label>End Date:</label>
<input type='text' className='form-control  mt-2 p-2' placeholder='Date till You want to be funded' 
value={endDate}
onChange={(e)=>setEndDate(e.target.value)}
/>
</div>
<div className='my-3'>
<label>Pan Number:</label>
<input type='text' className='form-control  mt-2 p-2' placeholder='Pan Number'
value={panNumber}
onChange={(e)=>setPanNumber(e.target.value)} 
/>

</div>
<div className='my-3'>
<label>Company Address:</label>
<input type='text' className='form-control  mt-2 p-2' placeholder='Address'
value={description}
onChange={(e)=>setDescription(e.target.value)} 
/>

</div>
<div className='my-3'>
                        <label> Logo of Company: please insert logo of your company</label><br />
                        <input type="file" id="logoFile" className="filename mt-3" onChange={handleLogoChange} 
                        accept="image/jpeg, image/jpg, image/png" 
                        />
                    </div>
                    <div className='my-3'>
                    <label> Document of Company: please insert official documents with your name on</label><br />
                    <input type="file" id="documentFile" className="filename mt-3" onChange={handleDocumentChange} 
                    accept="application/pdf" 
                    />
                </div>



   </div>
   </div>
   
       
   <div className='my-3'>
   ***Note:We will Not share your official documents. its for verifying purposes only.
   
   </div>

<button className='primary-button'>Submit</button>
   </form>

    </section>
    </>
  )
}

export default Organizaion