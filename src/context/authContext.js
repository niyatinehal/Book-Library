import { createContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const authContext = createContext();


export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const login = async (creds) => {
    try {
      const { status, data } = await axios.post("/api/auth/login", creds);
      if (status === 200) {
        localStorage.setItem("token", data?.encodedToken);
        authDispatch({ type: "loggedInTrue", payload: true });
        authDispatch({ type: "setUser", payload: data?.foundUser });
        authDispatch({ type: "setToken", payload: data?.encodedToken });
        toast.success("loginSuccessfull");
         navigate(location?.state?.from?.pathname)
      }
    } catch (error) {
      authDispatch({ type: "loggedInFalse", payload: false });
      console.log(error);
      toast.error(error.response?.data.errors);
    }
  };
//   console.log(location)

  const signup = async (creds) => {
    try {
      const { status, data } = await axios.post("/api/auth/signup", creds);
      if (status === 200) {
        localStorage.setItem("token", data?.encodedToken);
        authDispatch({ type: "loggedInTrue", payload: true });
        authDispatch({ type: "setUser", payload: data?.createdUser });
        authDispatch({ type: "setToken", payload: data?.encodedToken });
        alert("signup successfull");
        navigate(location?.state?.from?.pathname); 
      }
    } catch (error) {
      authDispatch({ type: "loggedInFalse", payload: false });
      console.log(error);
      alert(error.response.data.errors);
    }
  };

  // console.log(location)
  
  const logout = () => {
    localStorage.removeItem("token");
    authDispatch({ type: "loggedInFalse", payload: false });
    authDispatch({ type: "setToken", payload: "" });
    authDispatch({ type: "setUser", payload: {} });
    alert("you are logged out");
    navigate("/");
  };

  const authReducer = (state, action) => {
    switch (action.type) {
      case "loggedInTrue":
        return {
          ...state,
          isLoggedIn: action.payload,
        };
      case "loggedInFalse":
        return {
          ...state,
          isLoggedIn: action.payload,
        };
      case "setUser":
        return {
          ...state,
          user: action.payload,
        };
      case "setToken":
        return {
          ...state,
          token: action.payload,
        };
      default:
        return state;
    }
  };

  const [authState, authDispatch] = useReducer(authReducer, {
    isLoggedIn: false,
    user: {},
    token: "",
  });
  // console.log(authState.isLoggedIn)

  return (
    <authContext.Provider
      value={{ loggedIn, setLoggedIn, authState, login, signup, logout }}
    >
      {children}
    </authContext.Provider>
  );
};
