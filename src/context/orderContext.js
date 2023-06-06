import React, { createContext, useReducer } from "react";
import { useState } from "react";

export const OrderContext = createContext();

const orderReducer = (state, action) => {
  switch (action.type) {
    case "setPriceDetail":
      const { price, discount, coupon, totalAmt, totalDiscount } =
        action.payload;
      return {
        ...state,
        priceDetail: {
          ...action.payload,
          price,
          discount,
          coupon,
          totalAmt,
          totalDiscount,
        },
      };
    case "setOrderHistory":
      return {
        ...state,
        orderHistory: [...state?.orderHistory, action.payload],
      };
    case "setAddressDetail":
      return {
        ...state,
        addressDetail: action.payload,
      };
    default:
      return state;
  }
};

export const OrderProvider = ({ children }) => {
  const [orderState, orderDispatch] = useReducer(orderReducer, {
    addressDetail: {},
    priceDetail: {
      price: 0,
      coupon: 0,
      discount: 0,
      totalAmt: 0,
      totalDiscount: 0,
    },
    orderHistory: [],
  });
  const [couponValue, setCouponValue] = useState({ couponName: "", value: 0 });
  return (
    <OrderContext.Provider
      value={{
        orderHistory: orderState.orderHistory,
        addressDetail: orderState.addressDetail,
        priceDetail:orderState.priceDetail,
        orderDispatch,couponValue,setCouponValue        
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
