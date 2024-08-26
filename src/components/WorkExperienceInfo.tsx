import React from "react";
import Button from "./Button";
import "../styles/WorkExperienceInfo.css";

export default function WorkExperienceInfo() {
  return (
    <section>
      <h2>Work Experience Information</h2>
      <form>
        <fieldset>
          <legend>Work Experience</legend>
          <div className="formGroup">
            <label htmlFor="companyNameInput">Company Name: </label>
            <input type="text" id="companyNameInput" />
          </div>
          <div className="formGroup">
            <label htmlFor="positionTitleInput">Position Title: </label>
            <input type="text" id="positionTitleInput" />
          </div>
          <div className="formGroup">
            <label htmlFor="startInput">Start Date: </label>
            <input type="date" id="startInput" />
          </div>
          <div className="formGroup">
            <label htmlFor="endInput">End Date: </label>
            <input type="date" id="endInput" />
          </div>
        </fieldset>
        <div className="buttonContainer">
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
      </form>
    </section>
  );
}
