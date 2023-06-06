import React, { useContext, useEffect, useReducer, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { users } from "../../backend/db/users";
import { toast,ToastContainer } from "react-toastify";

export const LoginPage = () => {
  const { loggedIn, setLoggedIn, login } = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({ email: "", password: "" });

  const guestCreds = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika", 
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (!userData.email.trim() || !userData.password.trim()) {
      toast.error("Enter Valid Input!");
      
    } else {
      login(userData);
      navigate(location?.state?.from?.pathname);
    }
  };

  const guestLoginHandler = (e) => {
    e.preventDefault();
    setUserData(guestCreds);
    login(guestCreds);
    //  navigate(location?.state?.from?.pathname)
  };

  return (
    <div>
      <div>
        <h2>Login</h2>
        <form>
          <div>
            <lable htmlFor="email">Email: </lable>
            <input
              id="email"
              placeholder="abc@gmail.com"
              value={userData.email}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div>
            <lable htmlFor="password">Password</lable>
            <input
              id="password"
              type="password"
              placeholder="*******"
              value={userData.password}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>
          <button onClick={loginHandler}>Login</button>
          <button onClick={guestLoginHandler}>Guest Login</button>
        </form>
      </div>
      <button onClick={() => navigate("/signup")}>Create Account</button>
    </div>
  );
};
