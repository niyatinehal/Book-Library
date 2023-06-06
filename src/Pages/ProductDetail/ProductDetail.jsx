import React, { useContext } from "react";
import { productContext } from "../../context/productContext";
import { useNavigate, useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { productData, handleCart, handleWishlist } =
    useContext(productContext);
  const { _id } = useParams();
  const navigate = useNavigate();
  const bookDetails = productData.filterProduct.filter(
    (book) => book._id === _id
  );
  console.log(bookDetails);
  const isItemInCart = (data, id) => {
    return data.find((item) => item._id === id) ? true : false;
  };
  const isItemInWishlist = (data, id) => {
    return data?.find((item) => item._id === id) ? true : false;
  };
  return (
    <div>
      {bookDetails.map((book) => (
        <li key={book._id}>
          <h3>{book.title}</h3>
          <h3>{book.price}</h3>
          <h4>{book.categoryName}</h4>
          <button
            onClick={() => {
              if (isItemInCart(productData.cart, book._id)) {
                navigate("/cart");
              } else {
                handleCart(book);
              }
            }}
          >
            {isItemInCart(productData.cart, book._id)
              ? "Go To Cart"
              : "Add To Cart"}
          </button>
          <button
            onClick={() => {
              if (isItemInWishlist(productData.wishlist, book._id)) {
                navigate("/wishlist");
              } else {
                handleWishlist(book);
              }
            }}
          >
            {isItemInWishlist(productData.wishlist, book._id)
              ? "Go To Wishlist"
              : "Add To Wishlist"}
          </button>
        </li>
      ))}
    </div>
  );
};
