import React, { useContext } from "react";
import { productContext } from "../../context/productContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./wishlist.css"
import { Footer } from "../Footer/Footer";

export const WishList = () => {
  const { productData, deleteWishlistItem, handleCart } =
    useContext(productContext);
  const moveToCartFromWishlist = (id, prod) => {
    deleteWishlistItem(id);
    handleCart(prod);
    toast.success("Item Moved to Cart");
  };
  const isItemInCart = (data, id) => {
    return data.find((item) => item._id === id) ? true : false;
  };
  const navigate = useNavigate();
  return (
    <div className="wishlist">
      {productData?.wishlist?.length === 0 ? (
        <div className="wishlist-empty">
          <p>Empty Wishlist!</p>
          <button onClick={() => navigate("/")}>Go to Home Page</button>
        </div>
      ) : (
        <div className="wishlist-filled">
          {productData?.wishlist?.length > 0 &&
            productData?.wishlist.map((book) => (
              <div className="wishlist-card">
                <li key={book._id}>
                <div className="wishlist-card-item">
                   <h3>{book.title}</h3>
                <p>{book.author}</p>
                </div>
               

                {isItemInCart(productData.cart, book._id) ? (
                  <button className="wishlist-btn" onClick={deleteWishlistItem(book.id)} >
                    Delete from Wishlist
                  </button>
                ) : (
                  <button className="wishlist-btn" 
                    onClick={() => moveToCartFromWishlist(book._id, book)}
                  >
                    Move to Cart
                  </button>
                )}
                <hr/>

              </li>
              </div>
              
            ))}
        </div>
      )}
    </div>
  );
};
