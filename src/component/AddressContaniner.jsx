import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../context/productContext";
import { OrderContext } from "../context/orderContext";

export const AddressContaniner = () => {
  const { productData } = useContext(productContext);
  const [selectedAddress, setSelectedAddress] = useState(
    productData.address[0]
  );
  const { orderDispatch } = useContext(OrderContext);
  useEffect(() => {
    orderDispatch({ type: "setAddressDetail", payload: selectedAddress }, [
      selectedAddress,
    ]);
  },[]);
  return productData.address.length === 0 ? (
    <p>No Address Added!</p>
  ) : (
    <div>
      {productData.address.map(
        ({
          id: addressId,
          userName,
          houseNumber,
          city,
          state,
          country,
          pincode,
          mobileNumber,
        }) => {
          return (
            
            <div>
              <label>
                <input
                  type="radio"
                  checked={selectedAddress.id === addressId}
                  onChange={(e) => {
                    setSelectedAddress((prev) => 
                      ({...prev,
                      ...productData.address.find(({ id }) => id === addressId),
                    })); //some error here
                  }}
                />
                <strong>{userName}</strong>
                <p>
                  {houseNumber},{city},{state}
                </p>
                <p>
                  Pincode: {pincode},{country}
                </p>
                <p>Phone Number: {mobileNumber}</p>
              </label>
            </div>
          );
        }
      )}
    </div>
  );
};
