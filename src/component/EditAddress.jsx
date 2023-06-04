import React, { useContext } from "react";
import { useState } from "react";
import { productContext } from "../context/productContext";

export const EditAddress = ({ editAddressId }) => {
  const { productData, productDispatch } = useContext(productContext);
  const [editAddess, setEditAddress] = useState({
    id: editAddressId,
    userName: productData?.address?.find(({ id }) => id === editAddressId)
      ?.userName,
    houseNumber: productData?.address.find(({ id }) => id === editAddressId)
      ?.houseNumber,
    city: productData?.address?.find(({ id }) => id === editAddressId)?.city,
    state: productData?.address?.find(({ id }) => id === editAddressId)?.state,
    country: productData?.address.find(({ id }) => id === editAddressId)
      ?.country,
    pincode: productData?.address.find(({ id }) => id === editAddressId)
      ?.pincode,
    mobileNumber: productData?.address?.find(({ id }) => id === editAddressId)
      ?.mobileNumber,
  });

  console.log("edited something");
  return (
    <div>
      <div>
        <h3>Edit Address</h3>
        <form>
          <input
            type="text"
            pladeholder="Enter Name"
            value={editAddess.userName}
            onChange={(e) =>
              setEditAddress((editAddress)=>({
                ...editAddess,
                userName: e.target.value,
            }))
            }
          />
          <input
            type="text"
            placeholder="Enter house no.,colony"
            value={editAddess.houseNumber}
            onChange={(e) =>
              setEditAddress((editAddress)=>({
                ...editAddress,
                houseNumber: e.target.value,
              }))
            }
          />
          <input
            type="text"
            placeholder="Enter City"
            value={editAddess.city}
            onChange={(e) =>
              setEditAddress((editAddress)=>({
                ...editAddress,
                city: e.target.value,
              }))
            }
          />
          <input
            type="text"
            placeholder="Enter State"
            value={editAddess.state}
            onChange={(e) =>
              setEditAddress((editAddress)=>({
                ...editAddress,
                state: e.target.value,
              }))
            }
          />
          <input
            type="text"
            placeholder="Enter Country"
            value={editAddess.country}
            onChange={(e) =>
              setEditAddress((editAddress)=>({
                ...editAddress,
                country: e.target.value,
              }))
            }
          />
          <input
            type="text"
            placeholder="Enter Pincode"
            value={editAddess.pincode}
            onChange={(e) =>
              setEditAddress((editAddress)=>({
                ...editAddress,
                pincode: e.target.value,
              }))
            }
          />
          <input
            type="text"
            placeholder="Enter Mobile number"
            value={editAddess.mobileNumber}
            onChange={(e) =>
              setEditAddress((editAddress)=>({
                ...editAddress,
                mobileNumber: e.target.value,
              }))
            }
          />
          <div>
            <button
              type="submit"
              onClick={() => {
                productDispatch({
                  type: "saveAddress",
                  payload: [editAddess, editAddressId],
                });
              }}
            >
              save{" "}
            </button>
            <button
              type="submit"
              onClick={() => {
                productDispatch({
                  type: "cancelAddress",
                  payload: editAddressId,
                });
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
