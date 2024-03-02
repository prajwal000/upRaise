import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";


const AuthContext=createContext();

export function useAuthContext(){
  return useContext(AuthContext)
}

export function AuthProvider({children}){
  const navigate=useNavigate();
  const [Authenticated,setAuthenticated]=useState(false);
  const [adminAuth,setAdminAuth]=useState(false);
  const[postData,setPostData]=useState();
  const[postData2,setPostData2]=useState();

  

  


  //sign in code in auth context
  const signIn = async (email, password) => {
    if (email.length === 0 || password.length === 0) {
      alert("Please fill up all fields");
    
    }
    const loginData = {
      email,
      password
    };
    try {
      const response = await axios.post('http://10.200.10.59:3969/api/v1/auth/login', loginData);
      
      if(response.data.token){

        if(response.data.user.role==="USER"){
          setAuthenticated(true)
          localStorage.setItem('token',response.data.token);
          // console.log(response.data)
          alert("you have  been sucessfully signed in  ");
          navigate("/")
         }
         else if(response.data.user.role==="ADMIN"){
          setAdminAuth(true);
          localStorage.setItem('admin-token',response.data.token)
           alert("you have sucessfully logged in as admin")
           navigate("/")
         }
         
        }
        
       
    } catch (error) {
      console.error("Error during sign-in:", error); 
       setAuthenticated(false) 
       setAdminAuth(false)
    alert("wrong password")
      
    }
  }
  const view=(data)=>{
    setPostData(data)
    navigate("/admin/view")
    // console.log(postData)
  }

    const details = (datas) => {
      // console.log(datas)
      setPostData2(datas);
      console.log(postData2)
      navigate("/fund-lister/details");
    };
    
  


  return(
    <AuthContext.Provider value={{signIn,Authenticated,adminAuth, view, postData ,details,postData2}}>
    {children}
    </AuthContext.Provider>
  )
}