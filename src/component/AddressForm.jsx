import React, { useContext, useState } from "react";
import { productContext } from "../context/productContext";
import { v4 as uuid } from "uuid";

export const AddressForm = ({ setIsAddAddress }) => {
  const { productDispatch } = useContext(productContext);
  const [addressForm, setAddressForm] = useState({
    id: uuid(),
    userName: "",
    houseNumber: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    mobileNumber: "",
  });
  const addAddressHandler = (e) => {
    e.preventDefault();
    productDispatch({ type: "setUserAddress", payload: addressForm });
    setIsAddAddress(false);
    alert("added Address");
  };
  return (
    <div>
      <div>
        <h3>Add New Address</h3>
        <form onSubmit={addAddressHandler}>
          <input
            placeholder="Enter Name"
            type="text"
            value={addressForm.userName}
            onChange={(e) =>
              setAddressForm((addressForm) => ({
                ...addressForm,
                userName: e.target.value,
              }))
            }
          />
          <input
            placeholder="Enter house no., colony"
            type="text"
            value={AddressForm.houseNumber}
            onChange={(e) =>
              setAddressForm((addressForm) => ({
                ...addressForm,
                houseNumber: e.target.value,
              }))
            }
          />
          <input
            placeholder="Enter City"
            type="text"
            value={addressForm.city}
            onChange={(e) =>
              setAddressForm((addressForm) => ({
                ...addressForm,
               city: e.target.value,
              }))
            }
          />
          <input
            placeholder="Enter state"
            type="text"
            value={addressForm.state}
            onChange={(e) =>
              setAddressForm((addressForm) => ({
                ...addressForm,
                state: e.target.value,
              }))
            }
          />
          <input
            placeholder="Enter Country"
            type="text"
            value={addressForm.country}
            onChange={(e) =>
              setAddressForm((addressForm) => ({
                ...addressForm,
                country: e.target.value,
              }))
            }
          />
          <input
            placeholder="Enter Pincode"
            type="number"
            value={addressForm.pincode}
            onChange={(e) =>
              setAddressForm((addressForm) => ({
                ...addressForm,
                pincode: e.target.value,
              }))
            }
          />
          <input
            placeholder="Enter Mobile Number"
            type="number"
            value={addressForm.mobileNumber}
            onChange={(e) =>
              setAddressForm((addressForm) => ({
                ...addressForm,
                mobileNumber: e.target.value,
              }))
            }
          />
          <button type="submit">Add</button>
          <button onClick={() => setIsAddAddress(false)}>Cancel</button>
        </form>
      </div>
    </div>
  );
};
