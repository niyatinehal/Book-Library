import React, { createContext, useEffect } from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { productContext } from "./productContext";
import { products } from "../backend/db/products";

export const filterContext = createContext([]);
export const FilterProvider = ({ children }) => {
  const { productData, productDispatch, getProductData } =
    useContext(productContext);

  const filterReducer = (prod, action) => {
    switch (action.type) {
      case "search-filter":
        return {
          ...prod,
          searchQuery: action.payload,
        };
      case "low-to-high":
        return {
          ...prod,
          sortBy: action.payload,
        };
      case "includeFiction":
        return {
          ...prod,
          isFiction: !prod.isFiction,
        };
      case "includeMystery":
        return {
          ...prod,
          isMystery: !prod.isMystery,
        };
      case "includeFantasy":
        return {
          ...prod,
          isFantasy: !prod.isFantasy,
        };
      case "clearFilter":
        return {
          prodDetails: productData.filterProduct,
          searchQuery: "",
          sortby: null,
          category: [],
          isFiction: false,
          isFantasy: false,
          isMystery: false,
        };
      case "updateCategory":
        return {
          ...prod,
          category: prod.category.includes(action.payload)
            ? [...prod.category.filter((item) => item !== action.payload)]
            : [...prod.category, action.payload],
        };
      case "updateCategoryHome":
        return {
          ...prod,
          category: [action.payload],
        };
      case "priceRange":{
        return {
          ...prod,
          priceRange:action.payload
        }
      }
      default:
        return prod;
    }
  };

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    prodDetails: productData.filterProduct,
    searchQuery: "",
    sortby: null,
    category: [],
    priceRange:2000,
  });
  const filterCategoryFunc = (list) => {
    return list.reduce((acc, prod) => {
      return;
    });
  };

  const searchedBooks =
    filterState.searchQuery?.length > 0
      ? filterState?.prodDetails?.filter((item) =>
          item.title.toLowerCase().includes(filterState.searchQuery)
        )
      : filterState.prodDetails;

  const sortedBooks = filterState.sortBy
    ? searchedBooks.sort((a, b) =>
        filterState.sortBy === "low-to-high"
          ? a.price - b.price
          : b.price - a.price
      )
    : searchedBooks;

  const categoryfilteredbooks =
    filterState?.category?.length > 0
      ? sortedBooks.filter(({ categoryName }) =>
          filterState?.category?.includes(categoryName)
        )
      : sortedBooks;
    
    const sliderPriceBooks=filterState.priceRange?categoryfilteredbooks.filter((book)=>book.price<=filterState.priceRange) : categoryfilteredbooks

  return (
    <filterContext.Provider
      value={{
        filterState,
        filterDispatch,
        categoryfilteredbooks,
        sliderPriceBooks
      }}
    >
      {children}
    </filterContext.Provider>
  );
};

export const useFilter = () => useContext(filterContext);
