import "./App.css";
import Mockman from "mockman-js";
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { Home } from "./component/Home";
import { Product } from "./component/Product";
import { WishList } from "./component/WishList";
import { Cart } from "./component/Cart";
import { UserProfile } from "./component/UserProfile";
import { Auth } from "./component/Auth";
import { useContext, useState } from "react";
import { authContext } from "./context/authContext";
import { LoginPage } from "./component/LoginPage";
import { Signup } from "./component/Signup";

function App() {
  const { authState} = useContext(authContext);
  
  return (
    <div className="App">
      <h3>E-commerce website</h3>
      <nav>
        <NavLink to="/">Home(LOGO) </NavLink>
        <NavLink to="/wishlist">WishList </NavLink>
        <NavLink to="/cart">Cart </NavLink>
        <NavLink to="/userProfile">userProfile</NavLink>
        
      </nav>
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route
          path="/wishlist"
          element={
            <Auth isLoggedIn={authState.isLoggedIn}>
              <WishList />
            </Auth>
          }
        />
        <Route
          path="/userProfile"
          element={
            <Auth isLoggedIn={authState.isLoggedIn}>
              <UserProfile />
            </Auth>
          }
        />
        <Route path="/loginPage" element={ <LoginPage/>}/>

        <Route
          path="/cart"
          element={
            <Auth  isLoggedIn={authState.isLoggedIn}>
              <Cart />
            </Auth>
          }
        />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
