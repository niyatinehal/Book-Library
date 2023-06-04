import React, { useContext } from "react";
import { productContext } from "../context/productContext";
import { useNavigate } from "react-router-dom";

export const WishList = () => {
  const { productData, deleteWishlistItem, handleCart } =
    useContext(productContext);
  const moveToCartFromWishlist = (id, prod) => {
    deleteWishlistItem(id);
    handleCart(prod);
  };
  const isItemInCart = (data, id) => {
    return data.find((item)=>item._id===id)?true:false
  };
  const navigate=useNavigate()
  return (
    <div>
      {productData?.wishlist?.length === 0 ? (
        <div>
          <p>Empty Wishlist</p>
        <button onClick={()=>navigate("/")}>Go to Home Page</button>
        </div>
        
      ) : (
        <div>
          {productData?.wishlist?.length > 0 &&
            productData?.wishlist.map((book) => (
              <li key={book._id}>
                <h3>{book.title}</h3>
              
                  {isItemInCart(productData.cart,book._id)?(<button onClick={deleteWishlistItem(book.id)}>Delete from Wishlist</button>):(<button onClick={()=>moveToCartFromWishlist(book._id,book)}>Move to Cart</button>)}
                
              </li>
            ))}
        </div>
      )}
    </div>
  );
};
