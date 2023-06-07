import React, { useContext, useEffect, useState, useReducer } from "react";
import { productContext } from "../../context/productContext";
import { useProduct } from "../../context/productContext";
import { authContext } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { filterContext } from "../../context/filterContext";
import { products } from "../../backend/db/products";
import { toast } from "react-toastify";
import "./product.css";

export const Product = () => {
  const { filterState, filterDispatch, mysteryBooks, categoryfilteredbooks,sliderPriceBooks } =
    useContext(filterContext);
  const { authState } = useContext(authContext);
  const {
    handleCart,
    productData,
    productDispatch,
    isClicked,
    handleWishlist,
  } = useContext(productContext);

  console.log("authState refresh-> ", authState);

  const navigate = useNavigate();

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
  const resetHandler = () => {
    filterDispatch({ type: "clearFilter" });
  };

  const priceRangeHandler = (e) => {
    const givenPrice = e.target.value;
    console.log("price",givenPrice)
    filterDispatch({ type: "priceRange", payload: Number(givenPrice) });
  };

  const isItemInCart = (data, id) => {
    return data.find((item) => item._id === id) ? true : false;
  };
  const isItemInWishlist = (data, id) => {
    return data?.find((item) => item._id === id) ? true : false;
  };

  return (
    <div className="products">
      {console.log("filter", sliderPriceBooks, filterState.priceRange)}
      <div className="product-filters">
        <h3>Filters</h3>
        <div className="products-search">
          <label htmlFor="search" className="search-lable">
            Search :
          </label>
          <input
            type="text"
            id="search"
            value={filterState.searchQuery}
            onChange={searchHandler}
          />
        </div>
        <div>
           <input
            type="range"
            id="price-range"
            min="0"
            max="2000"
            onChange={priceRangeHandler}
            value={filterState.priceRange}
          />
           <div className="slider">
            <p>0</p>
            <p>2000</p>
          </div>
        </div>

        <div className="product-sort">
          <h1>Sort </h1>
          <div className="product-sort-input-lable">
            <input
              type="radio"
              id="high-to-low"
              value="high-to-low"
              checked={filterState.sortBy === "high-to-low"}
              onChange={sortHandler}
            />
            <lable htmlFor="high-to-low">High-to-Low</lable>
          </div>
          <div>
            <input
              type="radio"
              id="low-to-high"
              value="low-to-high"
              checked={filterState.sortBy === "low-to-high"}
              onChange={sortHandler}
            />
            <lable htmlFor="low-to-high">Low-to-High</lable>
          </div>
        </div>

        <div className="product-genre">
          <h1>Genre</h1>
          <div className="product-genre-input-lable">
            <input
              type="checkbox"
              id="fiction"
              checked={filterState.category.includes("Fiction") ? true : false}
              onChange={() =>
                filterDispatch({ type: "updateCategory", payload: "Fiction" })
              }
            />
            <lable htmlFor="fiction">Fiction</lable>
          </div>

          <div className="product-genre-input-lable">
            <input
              type="checkbox"
              id="fantasy"
              checked={filterState.category.includes("Fantasy") ? true : false}
              onChange={() =>
                filterDispatch({ type: "updateCategory", payload: "Fantasy" })
              }
            />
            <lable htmlFor="fantasy">Fantasy</lable>
          </div>

          <div className="product-genre-input-lable">
            <input
              type="checkbox"
              id="mystery"
              checked={filterState.category.includes("Mystery") ? true : false}
              onChange={() =>
                filterDispatch({ type: "updateCategory", payload: "Mystery" })
              }
            />
            <lable htmlFor="mystery">Mystery</lable>
          </div>
        </div>
        <div className="reset-btn">
          <button className="reset" onClick={resetHandler}>
            Reset Filter
          </button>
        </div>
      </div>

      {sliderPriceBooks ? (
        <div className="product-list">
          {sliderPriceBooks?.length > 0 ? (
            sliderPriceBooks.map((book) => (
              <div className="books">
                <li key={book._id}>
                  <Link to={`/product/${book._id}`}>
                    <img src={book.img} alt="" srcset="" />
                  </Link>

                  <h3>{book.title}</h3>
                  <strong>₹{book.price}</strong>

                  <div className="cart-wishlist-btn">
                    <button
                      className="cart-wishlist"
                      onClick={() => {
                        if (isItemInCart(productData.cart, book._id)) {
                          navigate("/cart");
                        } else {
                          handleCart(book);
                          toast.success("Item is added to Cart!", {
                            position: "top-right",
                          });
                        }
                      }}
                    >
                      {isItemInCart(productData.cart, book._id)
                        ? "Go To Cart"
                        : "Add To Cart"}
                    </button>
                  </div>

                  <div className="cart-wishlist-btn">
                    <button
                      className="cart-wishlist"
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
                  </div>
                </li>
              </div>
            ))
          ) : (
            <div className="alert">
              <p>No books under this price range</p>
            </div>
          )}
        </div>
      ) : (
        <h3>...isLoading</h3>
      )}
    </div>
  );
};
