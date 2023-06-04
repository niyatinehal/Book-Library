import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { toast } from "react-toastify";

import { authContext } from "../context/authContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { products } from "../backend/db/products";

export const productContext = createContext([]);

const defaultAddress = [
  {
    id: 1,
    userName: "Niyati Nehal",
    houseNumber: "A-123, XYZ",
    city: "singrauli",
    state: "Madhya Pradesh",
    country: "India",
    pincode: "123456",
    mobileNumber: "123456789",
  },
];

export const ProductProvider = ({ children }) => {
  const { authState } = useContext(authContext);
  const [loader, setLoader] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const productReducer = (state, action) => {
    switch (action.type) {
      case "originalProducts":
        return {
          ...state,
          originalProduct: action.payload,
        };
      case "setProducts":
        return {
          ...state,
          products: action.payload,
        };
      case "setCategory": {
        return {
          ...state,
          category: action.payload,
        };
      }
      case "setCart":
        return {
          ...state,
          cart: action.payload,
        };
      case "setWishlist":
        return {
          ...state,
          wishlist: action.payload,
        };
      case "setUserAddress":
        return {
          ...state,
          address: [...state?.address, action.payload],
        };
      case "deleteUserAddress":
        return {
          ...state,
          address: state?.address.filter(({ id }) => id !== action.payload),
        };
      case "editAddress":
        return {
          ...state,
          address: state?.address?.map((addressItem) =>
            addressItem.id === action.payload
              ? { ...addressItem, isEdit: true }
              : addressItem
          ),
        };
      case "saveAddress":
        return {
          ...state,
          address: state.address.map((addressItem) =>
            addressItem.id === action.payload[1]
              ? { ...action.payload[0] }
              : addressItem
          ),
        };
      case "cancelAddress":
        return {
          ...state,
          address: state.address.map((addressItem) =>
            addressItem.id === action.payload
              ? { ...addressItem, isEdit: false }
              : addressItem
          ),
        };
      case "deleteAddress":
        return {
          ...state,
          address: state?.address?.map(
            (addressItem) => addressItem.id !== action.payload
          ),
        };
      default:
        return state;
    }
  };
  const [productData, productDispatch] = useReducer(productReducer, {
    filterProduct: products,
    originalProduct: [],
    products: [],
    cart: [],
    wishlist: [],
    category: [],
    address: defaultAddress,
  });

  const getProductData = async () => {
    try {
      const { status, data } = await axios.get("/api/products");
      if (status === 200) {
        productDispatch({ type: "originalProducts", payload: data.products });
        // console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getCategoryData = async () => {
    try {
      const { status, data } = await axios.get("/api/categories");
      if (status === 200) {
        productDispatch({ type: "setCategory", payload: data.categories });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const encodedToken = localStorage.getItem("token");

  const getCartItems = async (encodedToken) => {
    try {
      const response = await axios.get("/api/user/cart", {
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getWishlist = async (encodedToken) => {
    try {
      const response = await axios.get("/api/user/wishlist", {
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 200) {
        return response;
      }
      console.log("wishList working");
    } catch (error) {
      console.log(error);
    }
  };

  const setCartItem = async () => {
    try {
      const cartRes = await getCartItems(encodedToken);
      const wishlistRes = await getWishlist(encodedToken);
      if (cartRes.response === 200) {
        productDispatch({ type: "setCart", payload: cartRes?.data?.cart });
      }

      if (wishlistRes.response === 200) {
        productDispatch({
          type: "setWishlist",
          payload: wishlistRes?.data?.cart,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCart = async (prodData) => {
    try {
      if (authState.isLoggedIn) {
        const { status, data } = await axios.post(
          "/api/user/cart",
          { product: prodData },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );

        if (status === 201) {
          productDispatch({ type: "setCart", payload: data?.cart });
          setIsClicked(true);
          toast.success("Item is added to Cart!");
        }
      } else {
        navigate("/LoginPage");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCartQty = async (bookID, type) => {
    try {
      const { status, data } = await axios.post(
        `api/user/cart/${bookID}`,
        { action: { type } },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (status === 200) {
        productDispatch({ type: "setCart", payload: data?.cart });
        console.log(
          "added",
          `api/user/cart/${bookID}`,
          productData.cart,
          status
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCartItem = async (bookID) => {
    try {
      const { status, data } = await axios.delete(`api/user/cart/${bookID}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (status === 200) {
        productDispatch({ type: "setCart", payload: data?.cart });
        console.log("deleted: ", productData.cart, status, bookID);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteWishlistItem = async (bookID) => {
    try {
      const { status, data } = await axios.delete(
        `api/user/wishlist/${bookID}`,
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (status === 200) {
        productDispatch({ type: "setWishlist", payload: data?.wishlist });
        console.log("wishlist: ", productData.wishlist, status, bookID);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleWishlist = async (prodData) => {
    try {
      if (authState.isLoggedIn) {
        const { status, data } = await axios.post(
          "/api/user/wishlist",
          { product: prodData },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        if (status === 201) {
          productDispatch({ type: "setWishlist", payload: data.wishlist });
        }
        console.log("wishlist", productData.wishlist);
      } else {
        navigate("/LoginPage");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProductData();
    getCategoryData();
    setCartItem();
    deleteCartItem();
    //authState?.isLoggedIn && setCartItem();
  }, []);
  //productDispatch, authState?.isLoggedIn
  return (
    <productContext.Provider
      value={{
        productData,
        getProductData,
        productDispatch,
        handleCart,
        handleCartQty,
        isClicked,
        deleteCartItem,
        handleWishlist,
        deleteWishlistItem,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export const useProduct = () => useContext(productContext);
