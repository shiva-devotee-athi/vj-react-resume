import React, { useState,  } from "react";
import "../src/ViewersDetails.css";
import { db } from "./firebase";

const ViewersDetails = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        phoneNumber: phoneNumber,
        dob: dob,
        gender: gender,
        email: email,
        state: state,
        city: city,
        pincode: pincode,
      })
      .then(() => {
        setLoader(false);
        alert("Your form has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setPhoneNumber("");
    setDob("");
    setGender("");
    setEmail("");
    setState("");
    setCity("");
    setPincode("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us 📝</h1>
      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Phone Number</label>
      <input
        type="tel"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <label>DOB</label>
      <input
        type="date"
        placeholder="DOB"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <label>Gender</label>
      <input
        placeholder="Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />

      <label>Contact</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>State</label>
      <input
        placeholder="State"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <label>City</label>
      <input
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <label>PinCode</label>
      <input
        placeholder="PinCode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />
      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default ViewersDetails;