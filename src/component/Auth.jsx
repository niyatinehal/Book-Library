import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../context/authContext";

export const Auth = ({ children }) => {
  const {authState } = useContext(authContext);
  const location = useLocation();
  console.log(authState.isLoggedIn)
  return authState.isLoggedIn ? (
    children
  ) : (
    <>
       <Navigate to="/LoginPage" state={{from:location}} />
       {console.log("working")} 
    </>
    
  );
};

