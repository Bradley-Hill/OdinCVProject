import React from 'react'
import Button from "./Button";
import "../styles/EducationInfo.css";

export default function EducationInfo() {
  return (

    <section><h2>Education Information</h2>
    <form>
      <fieldset>
      <legend>Education History</legend>
      <div className="formGroup">
      <label htmlFor="schoolInput">School: </label>
      <input type="text" id="schoolInput" />

      </div>
      <div className="formGroup">
      <label htmlFor="courseInput">Title of Course: </label>
      <input type="text" id="courseInput" />

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

  )
}
