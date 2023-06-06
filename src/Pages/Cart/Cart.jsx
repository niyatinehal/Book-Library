import React, { useContext } from "react";
import { productContext } from "../../context/productContext";
import { useNavigate } from "react-router-dom";

import { CartPrice, cartPrice } from "../../component/CartPrice";
import "./cart.css";

export const Cart = ({ product }) => {
  const navigate = useNavigate();
  const { productData, handleCartQty, deleteCartItem } =
    useContext(productContext);
  return (
    <div className="cart">
      {productData?.cart.length === 0 ? (
        <div className="cart-empty">
          <p>Empty Cart! </p>
          <button onClick={() => navigate("/")}>Go To Home Page</button>
        </div>
      ) : (
        <div className="cart-filled">
          <h1>Cart ({productData?.cart.length})</h1>
          <div>
            {productData?.cart.length > 0 &&
              productData?.cart.map((prod) => (
                <div className="cart-card">
                  <li key={prod._id}>
                    <div className="cart-card-item">
                      <h3>{prod.title}</h3>
                      <button
                        onClick={() => {
                          if (prod.qty > 1) {
                            handleCartQty(prod._id, "decrement");
                          } else {
                            deleteCartItem(prod._id);
                          }
                        }}
                      >
                        {" "}
                        -{" "}
                      </button>{" "}
                      {prod.qty}{" "}
                      <button
                        onClick={() => handleCartQty(prod._id, "increment")}
                      >
                        {" "}
                        +{" "}
                      </button>
                      <button onClick={() => deleteCartItem(prod._id)}>
                        {" "}
                        Delete{" "}
                      </button>
                    </div>
                  </li>
                </div>
              ))}
          </div>

          {productData.cart.length > 0 && <CartPrice />}
        </div>
      )}
    </div>
  );
};
