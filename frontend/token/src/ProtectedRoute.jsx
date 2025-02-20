import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute =({children})=>{
    const isAuthenticated = localStorage.getItem("IsAuthenticated");
    if(isAuthenticated){
        return children;
    }
    else{
        return <Navigate to="/"></Navigate>;
    }
   
}
export default ProtectedRoute;
