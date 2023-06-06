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
import { ProductDetail } from "./component/ProductDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Checkout } from "./component/Checkout";
import { Footer } from "./component/Footer";

function App() {
  const { authState } = useContext(authContext);
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/" className="navlink">Home(LOGO) </NavLink>
        </div>
        <div className="right-nav-content">
          <NavLink to="/wishlist" className="navlink">WishList </NavLink>

          <NavLink to="/cart" className="navlink">Cart </NavLink>

          <NavLink to="/userProfile" className="navlink">userProfile</NavLink>
        </div>
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
        <Route path="/loginPage" element={<LoginPage />} />

        <Route
          path="/cart"
          element={
            <Auth isLoggedIn={authState.isLoggedIn}>
              <Cart />
            </Auth>
          }
        />
        <Route
          path="/checkout"
          element={
            <Auth>
              <Checkout />
            </Auth>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:_id" element={<ProductDetail />} />
      </Routes>
      <ToastContainer />
      <Footer/>
    </div>
  );
}

export default App;
