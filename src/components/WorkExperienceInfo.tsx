import React from "react";

import EditButton from "./EditButton";
import SubmitButton from "./SubmitButton";
import "../styles/WorkExperienceInfo.css";

export default function WorkExperienceInfo() {
  const [isEditing, setIsEditing] = React.useState(true);
  const [companyName, setCompanyName] = React.useState("");
  const [positionTitle, setPositionTitle] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "companyName":
        setCompanyName(value);
        break;
      case "positionTitle":
        setPositionTitle(value);
        break;
      case "startDate":
        setStartDate(value);
        break;
      case "endDate":
        setEndDate(value);
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

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Edit");
    setIsEditing(true);
  };

  return (
    <section>
      <h2>Work Experience Information</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Work Experience</legend>
            <div className="formGroup">
              <label htmlFor="companyNameInput">Company Name: </label>
              <input
                type="text"
                id="companyNameInput"
                name="companyName"
                value={companyName}
                onChange={handleInputChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="positionTitleInput">Position Title: </label>
              <input
                type="text"
                id="positionTitleInput"
                name="positionTitle"
                value={positionTitle}
                onChange={handleInputChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="startInput">Start Date: </label>
              <input
                type="date"
                id="startInput"
                name="startDate"
                value={startDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="endInput">End Date: </label>
              <input
                type="date"
                id="endInput"
                name="endDate"
                value={endDate}
                onChange={handleInputChange}
              />
            </div>
          </fieldset>
          <div className="buttonContainer">
            <SubmitButton>Submit</SubmitButton>
            <EditButton onClick={handleEdit}>Edit</EditButton>
          </div>
        </form>
      ) : (
        <div className="displayWorkExperience">
          <p>
            <strong>Company Name: </strong> {companyName}
          </p>
          <p>
            <strong>Position Title: </strong> {positionTitle}
          </p>
          <p>
            <strong>Start Date: </strong> {startDate}
          </p>
          <p>
            <strong>End Date: </strong> {endDate}
          </p>
          <div className="buttonContainer">
            <SubmitButton>Submit</SubmitButton>
            <EditButton onClick={handleEdit}>Edit</EditButton>
          </div>
        </div>
      )}
    </section>
  );
}
