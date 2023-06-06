import React, { useContext, useState } from "react";
import { authContext } from "../../context/authContext";
import { productContext } from "../../context/productContext";
import { EditAddress } from "../../component/EditAddress";
import { AddressForm } from "../../component/AddressForm";

export const UserProfile = () => {
  const { authState, logout } = useContext(authContext);
  const { productData, productDispatch } = useContext(productContext);
  const [isClicked, setIsClicked] = useState(false);
  const [isAddAddress, setIsAddAddress] = useState(false);
  const cred = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };
  console.log("address", productData.address.length);

  const userDetailsHandler = () => {
    setIsClicked(true);
    console.log(authState);
  };
  const addressHandler = () => {
    setIsClicked(false);
  };

  return (
    <div>
      <h1>Profile Details</h1>
      <button onClick={userDetailsHandler}>UserProfile</button>
      <button onClick={addressHandler}>AddressDetails</button>
      {isClicked ? (
        <div>
          <p>
            <strong>
              {authState.user.firstName} {authState.user.lastName}
            </strong>
          </p>
          <p>
            <strong>{authState.user.email}</strong>
          </p>
          <button onClick={logout}>LogOut</button>
        </div>
      ) : (
        <div>
          {console.log("address", productData.address)}
          {productData.address.length === 0 && <h3>No Address Added</h3>}
          {productData.address?.map((address) => {
            return (
              <div key={address.id}>
                <strong>{address.userName}</strong>
                <p>
                  {address.houseNumber},{address.city},{address.country}
                </p>
                <p>{address.pincode}</p>
                <p>Phone number: {address.mobileNumber}</p>
                {address.isEdit && <EditAddress editAddressId={address.id} />}
                <button
                  onClick={() =>
                    productDispatch({
                      type: "editAddress",
                      payload: address.id,
                    })
                  }
                >
                  Edit
                </button>
                <button
                  onClick={() =>
                    productDispatch({
                      type: "deleteAddress",
                      payload: address.id,
                    })
                  }
                >
                  Delete
                </button>
              </div>
            );
          })}
          <button onClick={() => setIsAddAddress(true)}>Add new address</button>
          {isAddAddress && <AddressForm setIsAddAddress={setIsAddAddress} />}
        </div>
      )}
    </div>
  );
};
