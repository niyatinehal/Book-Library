import React, { useContext } from "react";
import { productContext } from "../../context/productContext";
import { AddressContaniner } from "../../component/AddressContaniner";
import { useNavigate } from "react-router-dom";
import { CheckoutPrice } from "../../component/CheckoutPrice";

export const Checkout = () => {
  const { productData } = useContext(productContext);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Checkout</h1>
      {productData.cart.length !== 0 ? (
        <div>
          <div>
            <hr />
            <h3>Select Address</h3>
            <hr />
            <AddressContaniner />
            <button onClick={() => navigate("/userProfile")}>
              Add New Address
            </button>
          </div>
          <CheckoutPrice />
        </div>
      ) : (
        <h4>There are no Products In Cart!</h4>
      )}
    </div>
  );
};
