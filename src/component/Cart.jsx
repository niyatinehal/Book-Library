import React, { useContext } from "react";
import { productContext } from "../context/productContext";

export const Cart = ({ product }) => {
  const { productData, handleCartQty,deleteCartItem } = useContext(productContext);
  return (
    <div>
      {productData?.cart.length === 0 ? (
        <p>Empty </p>
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
                      if(prod.qty >1 ) {handleCartQty(prod._id, "decrement")}else{deleteCartItem(prod._id)};
                    }}
                  >
                    {" "}
                    - {" "}
                  </button> {" "}
                  {prod.qty}
                  <button onClick={() => handleCartQty(prod._id, "increment")}>
                    {" "}
                    +{" "}
                  </button>
                  <button>Add To Wishlist</button>
                </li>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
