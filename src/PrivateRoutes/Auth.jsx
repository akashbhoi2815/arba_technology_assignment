import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from "react-router-dom";

const Auth = ({children}) => {

 const location = useLocation();
  
  const isToken = JSON.parse(localStorage.getItem('token')) || ""

  if(!isToken){
    return <Navigate to="/login" state={{from:location}} replace/>
  }

  return children 
}

export default Auth;