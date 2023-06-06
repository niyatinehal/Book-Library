import React, { useContext } from "react";
import { productContext } from "../context/productContext";
import { OrderContext } from "../context/orderContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../Pages/Cart/cart.css"

export const CartPrice = () => {
  const { productData } = useContext(productContext);
  const totalQuantity = productData.cart.reduce((acc, { qty }) => acc + qty, 0);
  const shippingCharge = 10;

  const { couponValue, setCouponValue, orderDispatch } =
    useContext(OrderContext);

  const getPriceDetails = (myCart) => {
    return myCart.reduce(({ price }, curr) => {
      price += curr.price * curr.qty;
      return { price };
    });
  };

  const priceData = getPriceDetails(productData.cart);
  console.log(priceData.price);
  const price =10000
  console.log(price);

  const coupon = parseFloat(couponValue.value);
  const totalAmt = parseFloat(
    priceData.price + shippingCharge - coupon
  ).toFixed(2);
  const totalDiscount = 20;

  const navigate = useNavigate();

  return (
    <div className="cart">
      <hr />
      <h3>Price details</h3>
      <hr/>
      <div className="cart-card-item">
        <div>
          <p>Price ({totalQuantity} items)</p>
          <p>₹ {priceData.price}</p>
        </div>

        <div>
          <p>Delivery Charges</p>
          <p>FREE</p>
        </div>
        <div>
          <p>Shipping Charges</p>
          <p>₹ {shippingCharge}</p>
        </div>

        {coupon !== 0 && (
          <div>
            <p>
              <img alt="coupon" />
              <p>{couponValue.couponName}</p>
            </p>
            <p
              onClick={() => {
                setCouponValue({ couponName: "", value: 0 });
                toast.success("Coupon is removed!");
              }}
            >
              Remove{" "}
            </p>
          </div>
        )}
        <hr />
        <div>
          <h3>Total Amount</h3>
          <h3>₹ {totalAmt}</h3>
        </div>
        <hr />
        <p>You Will Save ₹ {totalDiscount} on this order </p>
        <button
          onClick={() => {
            orderDispatch({
              type: "setPriceDetail",
              payload: { priceData, coupon, totalAmt, totalDiscount },
            });
            navigate("/checkout");
          }}
        >
          {" "}
          CheckOut
        </button>
      </div>
    </div>
  );
};
