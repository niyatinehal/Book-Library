import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../component/Header.jsx";
import { productContext } from "../context/productContext.jsx";
import { categories } from "../backend/db/categories.js";
import { filterContext } from "../context/filterContext.js";
import "../styles/home.css";

export const Home = () => {
  const navigate = useNavigate();
  const {
    filterState,
    searchHandler,
    sortHandler,
    mysteryBooks,
    filterDispatch,
  } = useContext(filterContext);

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
    <div classNameName="home">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active c-item">
            <img
              src="https://static.toiimg.com/thumb/67214972.cms?width=680&height=512&imgsize=434422"
              className="d-block w-100 c-img"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <div className="explore-card">
                <Link to="/product" className="explore-text">
                  Explore more>
                </Link>
                <h3>Explore variety of books at your finger tips.</h3>
                <p>Click on explore more to know more</p>
              </div>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img
              src="https://assets.weforum.org/article/image/responsive_big_webp_JMF96ETfn1kSViVnUou1Z0XIDwWcPpT5mrPc7-ytpAc.webp"
              className="d-block w-100  c-img"
              alt="..."
            />
          </div>
          <div className="carousel-item c-item ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/NYC_-_New_York_City_Library_-_1723.jpg/465px-NYC_-_New_York_City_Library_-_1723.jpg"
              className="d-block w-100  c-img"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="category-heading">
        <h3>Categories</h3>
      </div>
      <div className="home-content">
        {productData.category?.map((category) => (
          <li key={category._id}>
            <h3>{category.categoryName}</h3>
            <p>
              {category.categoryName === "Fiction" ? (
                <div className="category-img">
                  <img
                    src={category.img}
                    alt=""
                    srcset=""
                    onClick={fictionHandler}
                  />
                </div>
              ) : category.categoryName === "Fantasy" ? (
                <div className="category-img">
                  <img
                    src={category.img}
                    alt=""
                    srcset=""
                    onClick={fantasyHandler}
                  />
                </div>
              ) : (
                <div className="category-img">
                  <img
                    src={category.img}
                    alt=""
                    srcset=""
                    onClick={mysteryHandler}
                  />
                </div>
              )}
            </p>
          </li>
        ))}
      </div>
    </div>
  );
};
