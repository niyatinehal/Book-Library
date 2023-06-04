import React, { useContext } from "react";
import { productContext } from "../context/productContext";
import { useNavigate } from "react-router-dom";

export const Cart = ({ product }) => {
  const navigate = useNavigate();
  const { productData, handleCartQty, deleteCartItem } =
    useContext(productContext);
  return (
    <div>
      {productData?.cart.length === 0 ? (
        <div>
          <p>Empty </p>
          <button onClick={() => navigate("/")}>Go To Home Page</button>
        </div>
      ) : (
        <div>
          <h1>cart ({productData?.cart.length})</h1>
          <div>
            {productData?.cart.length > 0 &&
              productData?.cart.map((prod) => (
                <li key={prod._id}>
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
                  {prod.qty}
                  <button onClick={() => handleCartQty(prod._id, "increment")}>
                    {" "}
                    +{" "}
                  </button>
                </li>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
