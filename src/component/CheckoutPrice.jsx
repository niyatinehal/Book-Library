import React, { useContext } from "react";
import { productContext } from "../context/productContext";
import { OrderContext } from "../context/orderContext";
import { authContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../Pages/Cart/cart.css";

export const CheckoutPrice = () => {
  const { productData, productDispatch } = useContext(productContext);
  const { couponValue, priceDetail } = useContext(OrderContext);
  const { price, discount, coupon, totalAmt } = priceDetail || {};
  const { addressDetail } = useContext(OrderContext);
  const { orderDispatch } = useContext(OrderContext);
  const { authState } = useContext(authContext);
  const navigate = useNavigate();

  // const loadScript=async(url)=>{
  //     return new Promise((resolve)=>{
  //         const script=document.createElement("script");
  //         script.src=url;
  //         script.onload=()=>{
  //             resolve(false)
  //         };
  //         document.body.appendChild(script);
  //     });
  // };

  //    const Popper = () => {
  //   var end = Date.now() + 3 * 1000;
  //   // go Buckeyes!
  //   var colors = ["#7e22ce", "#d8b4fe"];

  //   (function frame() {
  //     confetti({
  //       particleCount: 2,
  //       angle: 40,
  //       spread: 55,
  //       origin: { x: 0 },
  //       colors: colors,
  //     });
  //     confetti({
  //       particleCount: 2,
  //       angle: 140,
  //       spread: 55,
  //       origin: { x: 1 },
  //       colors: colors,
  //     });

  //     if (Date.now() < end) {
  //       requestAnimationFrame(frame);
  //     }
  //   })();
  // };

  // const displayRazorpay = async () => {
  //   const res = await loadScript(
  //     "https://checkout.razorpay.com/v1/checkout.js"
  //   );
  //   if (!res) {
  //     toast.error("Razorpay SDK failed to load, check you internet connection");
  //     return;
  //   }
  //   const options = {
  //     key: "rzp_test_tkFBV0WQlVKWNr",
  //     amount: totalAmt * 100,
  //     currency: "INR",
  //     name: "GLAMOUR",
  //     description: "Thank you for shopping with us",
  //     image:
  //       "https://github.com/SudiptaChakraborty51/glamour-ecommerce/blob/master/public/icons8-cosmetic-16.png?raw=true",
  //     handler: function (response) {
  //       const orderData = {
  //         orderProducts: [...productState?.cart],
  //         amount: totalAmt,
  //         deliveryAddress: addressDetails,
  //         paymentId: response.razorpay_payment_id,
  //         userEmail: authState?.user?.email,
  //       };
  //       console.log(orderData);
  //       orderDispatch({
  //         type: "SET_ORDER_HISTORY",
  //         payload: orderData,
  //       });
  //       toast.success(`Payment of Rs. ${totalAmt} is Succesful !`);
  //       Popper();
  //       clearCartItems(productDispatch, productState);
  //       navigate("/account-details/orderHistory");
  //     },
  //     prefill: {
  //       name: `${authState?.user?.firstName} ${authState?.user?.lastName}`,
  //       email: authState?.user?.email,
  //       contact: "9831578456",
  //     },
  //     theme: {
  //       color: "#7e22ce",
  //     },
  //   };

  //   const paymentObject = new window.Razorpay(options);
  //   paymentObject.open();
  // };

  const placeOrderHandler = () => {
    if (totalAmt === 0) {
      toast.error("Please add products to the cart!");
      navigate("/product");
    } else {
      // displayRazorpay();
      console.log("razorPay");
    }
  };
  return (
    <div>
      {console.log(priceDetail)}
      <hr />
      <h3>OrderDetails</h3>
      <hr />
      <div>
        <div>
          <strong>Item</strong>
          <strong>Qty</strong>
        </div>
        <div>
          {productData.cart.map(({ _id, title, qty }) => (
            <div key={_id}>
              <p>{title}</p>
              <p>{qty}</p>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <h3>Price Details</h3>
      <hr />
      <div>
        <div>
          <p>Price ({productData.cart.length} items)</p>
          <p>₹ {price}</p>
        </div>
        <div>
          <p>Delivery Charges</p>
          <p>FREE</p>
        </div>
        <div>
          <p>Shipping Charge</p>
          <p>₹ 10</p>
        </div>
        <div>
          <p>Coupon Discount</p>
          <p>
            {coupon !== 0 && "-"}₹ {coupon.toFixed(2)}
          </p>
        </div>
        {coupon !== 0 && (
          <div>
            <p>
              <img alt="coupon" />
              <p>{couponValue.couponName}</p>
            </p>
          </div>
        )}
        <hr />
        <div>
          <h3>Total Amount</h3>
          <h3>₹ {priceDetail.totalAmt}</h3>
        </div>
        <hr />
      </div>
      <h3>Deliver To</h3>
      {addressDetail ? (
        <div>
          <strong>{addressDetail.userName}</strong>
          <p>
            {addressDetail.houseNumber},{addressDetail.city}, ,
            {addressDetail.state}
          </p>
          <p>
            Pincode: {addressDetail.pincode},{addressDetail.country}
          </p>
          <p>Phone Number: {addressDetail.mobileNumber}</p>
        </div>
      ) : (
        <p>No Address Is Added!</p>
      )}
      <hr />
      <div className="cart-card-item">
        <button
          onClick={() => {
            if (productData.address.length === 0) {
              toast.warn("please Select Address!");
            } else {
              placeOrderHandler();
              toast.success("orderPlaced");
            }
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};
