import React from "react";
import Button from "./Button";
import "../styles/GeneralInfo.css";

export default function GeneralInfo() {
  return (
    <section className="generalInfo">
      <h2>General Information</h2>
      <form>
        <fieldset>
          <legend>Personal Details</legend>
          <div className="formGroup">
            <label htmlFor="nameInput">Name: </label>
            <input type="text" id="nameInput" />
          </div>
          <div className="formGroup">
            <label htmlFor="emailInput">Email: </label>
            <input type="email" id="emailInput" />
          </div>
          <div className="formGroup">
            <label htmlFor="phoneInput">Phone Number: </label>
            <input type="tel" id="phoneInput" />
          </div>
        </fieldset>

        <fieldset>
          <legend>Address</legend>
          <div className="formGroup">
            <label htmlFor="streetInput">Street: </label>
            <input type="text" id="streetInput" />
          </div>
          <div className="formGroup">
            <label htmlFor="cityInput">City: </label>
            <input type="text" id="cityInput" />
          </div>
          <div className="formGroup">
            <label htmlFor="countryInput">Country: </label>
            <input type="text" id="countryInput" />
          </div>
          <div className="formGroup">
            <label htmlFor="postalCodeInput">Postal Code: </label>
            <input type="text" id="postalCodeInput" />
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
