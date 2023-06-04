import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../component/Header.jsx";
import { productContext } from "../context/productContext.jsx";
import { categories } from "../backend/db/categories.js";
import { filterContext } from "../context/filterContext.js";

export const Home = () => {
  const navigate = useNavigate();
  const {
    filterState,
    searchHandler,
    sortHandler,
    mysteryBooks,
    filterDispatch,
  } = useContext(filterContext);
  console.log("home", filterState.isFiction);
  const { productData, productDispatch } = useContext(productContext);

  const fictionHandler = () => {
    filterDispatch({ type: "includeFiction" });
    navigate("/product");
  };

  const fantasyHandler = () => {
    filterDispatch({ type: "includeFantasy" });
    navigate("/product");
  };

  const mysteryHandler = () => {
    filterDispatch({ type: "includeMystery" });
    navigate("/product");
  };

  console.log();

  return (
    <div>
      <div>
        {productData.category?.map((category) => (
          <li key={category._id}>
            <h3>{category.categoryName}</h3>
            <p>
              <strong>{category.description}</strong>
            </p>
            <p>
              {category.categoryName === "Fiction" ? (
                <button onClick={fictionHandler}>Fictional Books</button>
              ) : category.categoryName === "Fantasy" ? (
                <button onClick={fantasyHandler}>Fantasy Books</button>
              ) : (
                <button onClick={mysteryHandler}>Mystery Books</button>
              )}
            </p>
          </li>
        ))}
      </div>
      <button>
        <Link to="/product">ShopNow</Link>
      </button>
    </div>
  );
};
