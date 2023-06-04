import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import { useState,useContext } from 'react';
import { authContext } from '../context/authContext';

export const Signup = () => {
    const navigate=useNavigate();
    const location=useLocation();
    console.log(location);
    const {signup}=useContext(authContext);
    const[userDetails,setUserDetails]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    });
    const signupHandler=(e)=>{
        e.preventDefault();
        if(!userDetails?.firstName.trim()||!userDetails?.lastName.trim()|| !userDetails.email.trim()||!userDetails?.password.trim()||!userDetails?.confirmPassword.trim()){
            alert("invalid input")
        }else if(userDetails?.password!== userDetails?.confirmPassword){
            alert("passwords should be same")
        }else{
            signup(userDetails);
            navigate("/")
        }
    }
  return (
    <div>
        <h2>signup</h2>
        <form >
            <div>
                <div>
                    <lable htmlFor="firstName">First Name</lable>
                    <input id="firstName" placeholder='Enter First Name' value={userDetails.firstName} onChange={(e)=>setUserDetails(prev=>({...prev,firstName:e.target.value}))}/>
                </div>
                <div>
                    <lable htmlFor="lastName">Last Name</lable>
                    <input id="lastName" placeholder='Enter Last Name' value={userDetails.lastName} onChange={(e)=>setUserDetails(prev=>({...prev,lastName:e.target.value}))}/>
                </div>
                <div>
                    <lable htmlFor="email">Email</lable>
                    <input id="email" placeholder='Enter email' value={userDetails.email} onChange={(e)=>setUserDetails(prev=>({...prev,email:e.target.value}))}/>
                </div>
                <div>
                    <lable htmlFor="password">password</lable>
                    <input id="password" placeholder='Enter password' type="password" value={userDetails.password} onChange={(e)=>setUserDetails(prev=>({...prev,password:e.target.value}))}/>
                </div>
                <div>
                    <lable htmlFor="confirmPassword">Confirm Password</lable>
                    <input 
                    id="confirmPassword" placeholder='Enter Confirm Password'
                    type="password" value={userDetails.confirmPassword} onChange={(e)=>setUserDetails(prev=>({...prev,confirmPassword:e.target.value}))}/>
                </div>
            </div>
            <button onClick={(e)=>signupHandler(e)}>Signup</button>
        </form>
        <button onClick={()=>navigate("/LoginPage")} >already have an account</button>
    </div>
  )
}
