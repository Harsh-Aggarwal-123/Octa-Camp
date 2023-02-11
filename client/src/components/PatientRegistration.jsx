import React, { useState, setState } from "react";
import "../style.css";

const PatientRegistration = () => {
  const [campaignName, setCampaignName] = useState(null);
  const [departmentName, setDepatmentName] = useState(null);
  const [doctorName, setDoctorName] = useState(null);
  const [campaignLocation, setCampaignLocation] = useState(null);
  const [campaignType, setCampaignType] = useState(null);
  const [patientName, setPatientName] = useState(null);
  const [patientNumber, setPatientNumber] = useState(null);
  const [patientEmail, setPatientEmail] = useState(null);
  const [patientAge, setPatientAge] = useState(null);
  const [patientGender, setPatientGender] = useState(null);
  const [patientAddress, setPatientAddress] = useState(null);
  const [patientSymptoms, setPatientSymptoms] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "campaignName") {
      setCampaignName(value);
    }
    if (id === "departmentName") {
      setDepatmentName(value);
    }
    if (id === "doctorName") {
      setDoctorName(value);
    }
    if (id === "campaignLocation") {
      setCampaignLocation(value);
    }
    if (id === "campaignType") {
      setCampaignType(value);
    }
    if (id === "patientName") {
      setPatientName(value);
    }
    if (id === "patientNumber") {
      setPatientNumber(value);
    }
    if (id === "patientEmail") {
      setPatientEmail(value);
    }
    if (id === "patientAge") {
      setPatientAge(value);
    }
    if (id === "patientGender") {
      setPatientGender(value);
    }
    if (id === "patientAddress") {
      setPatientAddress(value);
    }
    if (id === "patientSymptoms") {
      setPatientSymptoms(value);
    }
  };

  const handleSubmit = () => {
    console.log(
      campaignName,
      departmentName,
      doctorName,
      campaignLocation,
      campaignType
    );
    console.log(
      patientName,
      patientNumber,
      patientEmail,
      patientAge,
      patientGender,
      patientAddress,
      patientSymptoms
    );
  };

  return (
    
    <div
    grid={{
      xs: 1,
      sm: 2,
      md: 1,
      lg: 1,
      xl: 1,
    }}
      style={{
        border: "1px solid red",
        margin: "auto",
        width: "10%",
        height: "auto",
        backgroundColor: "blueviolet",
        border: "transparent",
        borderRadius: "10px",
        marginTop: "12rem",
      }}
    >
      <h2 style={{ textAlign: " center" }}> Patient Details </h2>
      <h4 style={{ textAlign: " center" }}>Register and Enjoy the Service</h4>

      <div className="form-body-1">
        <div className="username">
          <label for="firstName">Patient Name </label>
          <input
            style={{ textAlign: " center", marginLeft: "90px" }}
            type="text"
            value={patientName}
            onChange={(e) => handleInputChange(e)}
            id="patientName"
            placeholder="Patient Name"
          />
        </div>
        <div className="lastname">
          <label className="form__label" for="lastName">
            Patient Number{" "}
          </label>
          <input
            style={{ textAlign: " center", marginLeft: "72px" }}
            type="text"
            name=""
            value={patientNumber}
            onChange={(e) => handleInputChange(e)}
            id="patientNumber"
            placeholder="Patient Number"
          />
        </div>
        <div className="email">
          <label className="form__label" for="email">
            Patient Email{" "}
          </label>
          <input
            style={{ textAlign: " center", marginLeft: "95px" }}
            type="email"
            value={patientEmail}
            onChange={(e) => handleInputChange(e)}
            id="patientEmail"
            placeholder="Patient Email"
          />
        </div>
        <div className="email">
          <label className="form__label" for="email">
            Patient Age{" "}
          </label>
          <input
            style={{ textAlign: " center", marginLeft: "105px" }}
            type="email"
            value={patientAge}
            onChange={(e) => handleInputChange(e)}
            id="patientAge"
            placeholder="Patient Age"
          />
        </div>
        <div className="email">
          <label className="form__label" for="email">
            Patient Gender{" "}
          </label>
          <input
            style={{ textAlign: " center", marginLeft: "78px" }}
            type="email"
            value={patientGender}
            onChange={(e) => handleInputChange(e)}
            id="patientGender"
            placeholder="Patient Gender"
          />
        </div>
        <div className="email">
          <label className="form__label" for="email">
            Patient Address{" "}
          </label>
          <input
            style={{ textAlign: " center", marginLeft: "73px" }}
            type="email"
            value={patientAddress}
            onChange={(e) => handleInputChange(e)}
            id="patientAddress"
            placeholder="Patient Address"
          />
        </div>
        <div className="email">
          <label className="form__label" for="email">
            Patient Symptoms{" "}
          </label>
          <input
            style={{ textAlign: " center", marginLeft: "52px" }}
            type="email"
            value={patientSymptoms}
            onChange={(e) => handleInputChange(e)}
            id="patientSymptoms"
            placeholder="Patient Symptoms"
          />
          <span>
            +<input style={{ width: "30px" }} placeholder="Add" />
          </span>
        </div>

        <div className="email">
          <label className="form__label" for="email">
            Upload Prescription
          </label>
          <input
            type="file"
            placeholder="upload"
            style={{ width: "40px", marginLeft: "3px" }}
          />
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "end",
          margin: "20px",
        }}
      >
        <button onClick={() => handleSubmit()} type="submit" class="btn">
          Register
        </button>
        <button onClick={() => handleSubmit()} type="submit" class="btn">
          Edit
        </button>
      </div>
    </div>
  );
};

export default PatientRegistration;
