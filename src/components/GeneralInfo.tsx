import React, {useState} from "react";
import Button from "./Button";
import "../styles/GeneralInfo.css";


export default function GeneralInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [isEditing, setIsEditing] = useState(false);

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
  }

  return (
    <section className="generalInfo">
      <h2>General Information</h2>
      <form>
        <fieldset>
          <legend>Personal Details</legend>
          <div className="formGroup">
            <label htmlFor="nameInput">Name: </label>
            <input type="text" id="nameInput" value={name} onChange={handleInputChange}/>
          </div>
          <div className="formGroup">
            <label htmlFor="emailInput">Email: </label>
            <input type="email" id="emailInput" value={email} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label htmlFor="phoneInput">Phone Number: </label>
            <input type="tel" id="phoneInput" value={phone} onChange={handleInputChange} />
          </div>
        </fieldset>

        <fieldset>
          <legend>Address</legend>
          <div className="formGroup">
            <label htmlFor="streetInput">Street: </label>
            <input type="text" id="streetInput" value={street} onChange={handleInputChange}/>
          </div>
          <div className="formGroup">
            <label htmlFor="cityInput">City: </label>
            <input type="text" id="cityInput" value={city} onChange={handleInputChange} />
          </div>
          <div className="formGroup">
            <label htmlFor="countryInput">Country: </label>
            <input type="text" id="countryInput" value={country} onChange={handleInputChange}/>
          </div>
          <div className="formGroup">
            <label htmlFor="postalCodeInput">Postal Code: </label>
            <input type="text" id="postalCodeInput" value={postalCode} onChange={handleInputChange}/>
          </div>
        </fieldset>
        <div className="buttonContainer">
          <Button />
          <Button />
        </div>
      </form>
    </section>
  );
}
