import React, { useState } from "react";
import EditButton from "./EditButton";
import SubmitButton from "./SubmitButton";
import "../styles/GeneralInfo.css";


export default function GeneralInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "street":
        setStreet(value);
        break;
      case "city":
        setCity(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "postalCode":
        setPostalCode(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted");
    setIsEditing(false);
  };

  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Edit");
    setIsEditing(true);
  };

  return (
    <section className="generalInfo">
      <h2>General Information</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Personal Details</legend>
            <div className="formGroup">
              <label htmlFor="nameInput">Name: </label>
              <input
                type="text"
                id="nameInput"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="emailInput">Email: </label>
              <input
                type="email"
                id="emailInput"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="phoneInput">Phone Number: </label>
              <input
                type="tel"
                id="phoneInput"
                name="phone"
                value={phone}
                onChange={handleInputChange}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Address</legend>
            <div className="formGroup">
              <label htmlFor="streetInput">Street: </label>
              <input
                type="text"
                id="streetInput"
                name="street"
                value={street}
                onChange={handleInputChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="cityInput">City: </label>
              <input
                type="text"
                id="cityInput"
                name="city"
                value={city}
                onChange={handleInputChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="countryInput">Country: </label>
              <input
                type="text"
                id="countryInput"
                name="country"
                value={country}
                onChange={handleInputChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="postalCodeInput">Postal Code: </label>
              <input
                type="text"
                id="postalCodeInput"
                name="postalCode"
                value={postalCode}
                onChange={handleInputChange}
              />
            </div>
          </fieldset>
          <div className="buttonContainer">
            <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
            <EditButton onClick={handleEdit}>Edit</EditButton>
          </div>
        </form>
      ) : (
        <div className="displayInfo">
          <p>
            <strong>Name: </strong>
            {name}
          </p>
          <p>
            <strong>Email: </strong>
            {email}
          </p>
          <p>
            <strong>Phone: </strong>
            {phone}
          </p>
          <p>
            <strong>Street: </strong>
            {street}
          </p>
          <p>
            <strong>City: </strong>
            {city}
          </p>
          <p>
            <strong>Country: </strong>
            {country}
          </p>
          <p>
            <strong>Postal Code: </strong>
            {postalCode}
          </p>
          <div className="buttonContainer">
            <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
            <EditButton onClick={handleEdit}>Edit</EditButton>
          </div>
        </div>
        
      )}
    </section>
  );
}
