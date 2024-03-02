import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from '../Pages/Index'
import Login from '../Pages/Login'
import CreateAccount from '../Pages/CreateAccount'
import { AuthProvider } from '../Auth/AuthContext'
import FundRaiser from '../Pages/FundRaiser'
import Fundlister from '../Pages/Fundlister'
import CreatePost from '../Pages/CreatePost'
import Organizaion from '../Pages/Organizaion'
import OrganizationLists from '../Pages/OrganizationLists'
import AdminPage from '../Admin/AdminPage'
import ViewPost from '../Admin/ViewPost'
import Charity from '../Pages/Charity'
import Aboutus from '../Pages/Aboutus'
import Contactus from '../Pages/Contactus'
import MyPost from '../Pages/MyPost'
import CreateCharity from '../Pages/CreateCharity'
import Fulldetails from '../Pages/Fulldetails'


const Router = () => {
  return (
    <>
    <BrowserRouter>
    <AuthProvider>
    <Routes>
    <Route path="" Component={Index}/>
    <Route path="/login" Component={Login}/>
    <Route path="/create-an-account" Component={CreateAccount}/>
    <Route path="/fund-raiser" Component={FundRaiser}/>
    <Route path="/fund-lister" Component={Fundlister}/>
    <Route path="/fund-raiser/createpost" Component={CreatePost}/>
    <Route path="/fund-raiser/createpost/organization" Component={Organizaion}/>
    <Route path="/fun-lister/organizations-list" Component={OrganizationLists}/>
    <Route path="/fun-lister/charity-list" Component={Charity}/>
    <Route path="/Admin/Home" Component={AdminPage}/>
    <Route path="/admin/view/" Component={ViewPost}/>
    <Route path="/about" Component={Aboutus}/>
    <Route path="/contact" Component={Contactus}/>
    <Route path="/myposts" Component={MyPost}/>
    <Route path="/fund-raiser/createpost/charity" Component={CreateCharity}/>
    <Route path="/fund-lister/details" Component={Fulldetails}/>

    


   
    











    </Routes>
    </AuthProvider>
    </BrowserRouter>
    </>
  )
}

export default Router