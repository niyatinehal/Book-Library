import "./App.css";
import Mockman from "mockman-js";
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { Home } from "./Pages/Home/Home";
import { Product } from "./Pages/Product/Product";
import { WishList } from "./Pages/Wishlist/WishList";
import { Cart } from "./Pages/Cart/Cart";
import { UserProfile } from "./Pages/UserProfile/UserProfile";
import { Auth } from "./component/Auth";
import { useContext, useState } from "react";
import { authContext } from "./context/authContext";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { Signup } from "./Pages/Signup/Signup";
import { ProductDetail } from "./Pages/ProductDetail/ProductDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Checkout } from "./Pages/Checkout/Checkout";
import { Footer } from "./component/Footer";

function App() {
  const { authState } = useContext(authContext);
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/" className="navlink">
            <h1>BookShala</h1>{" "}
          </NavLink>
        </div>
        <div className="right-nav-content">
          <NavLink to="/product" className="navlink">
            <i class="fa-solid fa-bag-shopping"></i>
          </NavLink>
          <NavLink to="/wishlist" className="navlink">
            <i class="fa-solid fa-heart"></i>
          </NavLink>

          <NavLink to="/cart" className="navlink">
            <i class="fa-solid fa-cart-shopping"></i>
          </NavLink>

          <NavLink to="/userProfile" className="navlink">
            <i class="fa-solid fa-user"></i>
          </NavLink>
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
      <Footer />
    </div>
  );
}

export default App;
