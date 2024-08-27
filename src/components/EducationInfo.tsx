import React from "react";

import EditButton from "./EditButton";
import SubmitButton from "./SubmitButton";
import "../styles/EducationInfo.css";

export default function EducationInfo() {
  const [isEditing, setIsEditing] = React.useState(true);
  const [school, setSchool] = React.useState("");
  const [course, setCourse] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "school":
        setSchool(value);
        break;
      case "course":
        setCourse(value);
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
      <h2>Education Information</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Education History</legend>
            <div className="formGroup">
              <label htmlFor="schoolInput">School: </label>
              <input
                type="text"
                id="schoolInput"
                name="school"
                value={school}
                onChange={handleInputChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="courseInput">Title of Course: </label>
              <input
                type="text"
                id="courseInput"
                name="course"
                value={course}
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
        <div className="displayEducation">
          <p>
            <strong>School: </strong> {school}
          </p>
          <p>
            <strong>Course: </strong>
            {course}
          </p>
          <p>
            <strong>Start Date: </strong>
            {startDate}
          </p>
          <p>
            <strong>End Date: </strong>
            {endDate}
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
