import React, { useContext, useEffect, useState, useReducer } from "react";
import { productContext } from "../context/productContext";
import { useProduct } from "../context/productContext";
import { authContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { filterContext } from "../context/filterContext";
import { products } from "../backend/db/products";

export const Product = () => {
  const { filterState, filterDispatch, mysteryBooks } =
    useContext(filterContext);
  //const{authState}=useContext(authContext);
  const { handleCart, productData, productDispatch, isClicked,handleWishlist } =
    useContext(productContext);

  const navigate = useNavigate();

  // console.log(productData.cart);

  const searchHandler = (e) => {
    filterDispatch({ type: "search-filter", payload: e.target.value });
  };
  const sortHandler = (e) => {
    filterDispatch({ type: "low-to-high", payload: e.target.value });
  };
  const fictionHandler = () => {
    filterDispatch({ type: "includeFiction" });
  };
  const mysteryHandler = () => {
    filterDispatch({ type: "includeMystery" });
  };
  const fantasyHandler = () => {
    filterDispatch({ type: "includeFantasy" });
  };

  const isItemInCart = (data, id) => {
    return data.find((item) => item._id === id) ? true : false;
  };
  const isItemInWishlist=(data,id)=>{
    return data?.find((item) => item._id === id) ? true : false;
  }
  return (
    <div>
      <div>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          value={filterState.searchQuery}
          onChange={searchHandler}
        />
        <button onClick={searchHandler}>Search</button>
      </div>

      <div>
        <h1>Sort </h1>
        <input
          type="radio"
          id="high-to-low"
          value="high-to-low"
          checked={filterState.sortBy === "high-to-low"}
          onChange={sortHandler}
        />
        <lable htmlFor="high-to-low">high-to-low</lable>
        <input
          type="radio"
          id="low-to-high"
          value="low-to-high"
          checked={filterState.sortBy === "low-to-high"}
          onChange={sortHandler}
        />
        <lable htmlFor="low-to-high">Low-to-high</lable>
      </div>

      <div>
        <h1>category</h1>
        <input
          type="checkbox"
          id="fiction"
          checked={filterState.isFiction}
          onChange={fictionHandler}
        />
        <lable htmlFor="fiction">Fiction</lable>

        <input
          type="checkbox"
          id="fantasy"
          checked={filterState.isFantasy}
          onChange={fantasyHandler}
        />
        <lable htmlFor="fantasy">Fantasy</lable>

        <input
          type="checkbox"
          id="mystery"
          checked={filterState.isMystery}
          onChange={mysteryHandler}
        />
        <lable htmlFor="mystery">Mystery</lable>
      </div>

      <h3>Products</h3>
      {mysteryBooks ? (
        <div>
          {mysteryBooks.map((book) => (
            <li key={book._id}>
              <h1>{book.title}</h1>
              <h3>{book.author}</h3>
              <h3>{book.price}</h3>
              <h4>{book.categoryName}</h4>
              <button
                onClick={() => {
                  if(isItemInCart(productData.cart,book._id)){
                    navigate("/cart")
                  }else{
                    handleCart(book);
                  }
                  
                }}
              >
                {isItemInCart(productData.cart, book._id)
                  ? "Go To Cart"
                  : "Add To Cart"}
              </button>
              <button onClick={()=>{
                if(isItemInWishlist(productData.wishlist,book._id)){
                  navigate("/wishlist")
                }else{
                handleWishlist(book)
                }
              }}>{isItemInWishlist(productData.wishlist, book._id)
                  ? "Go To Wishlist"
                  : "Add To Wishlist"}</button>
            </li>
          ))}
        </div>
      ) : (
        <h3>...isLoading</h3>
      )}
    </div>
  );
};
