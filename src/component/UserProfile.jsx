import React from "react";

export const UserProfile = () => {
  const loginProfile = async () => {
    try {
      const cred = {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
      };
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(cred),
      });

      const userData=await response.json();
      localStorage.setItem("encodedToken",userData.encodedToken)
      console.log(localStorage.getItem("encodedToken"));
      
      
    } catch (error) {
      console.log(error);
    }
  };


  return <div>
  <h1 onClick={loginProfile}>userProfile</h1>
  </div>;
};
