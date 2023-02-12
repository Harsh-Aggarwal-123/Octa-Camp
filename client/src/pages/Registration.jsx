//import React from "react";
//import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
//import Box from "@mui/material/Box";
import { Link, Route, Routes } from "react-router-dom";
import PatientRegistration from "../components/PatientRegistration";
import LoginForm from "../components/LoginForm";
import "../style.css"
import Bottomnav from "../components/Bottomnav";

import { Button, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import {useEffect} from "react";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
//import Button from '@mui/material';
import MenuItem from "@mui/material/MenuItem";
import Swal from "sweetalert2";
import InputAdornment from "@mui/material";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useAppStore } from "../appStore";

export default function Registration({ closeEvent }) {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [ContactNumber, setContactNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Age, setAge] = useState("");
  const [Gender, setGender] = useState("");
  const [House, setHouse] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [PinCode, setPinCode] = useState("");
  const [Symptoms, setSymptoms] = useState("");
  //const [rows, setRows] = useState([]);
  const setRows = useAppStore((state) => state.setRows);
  const empCollectionRef = collection(db, "patients");
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleHouseChange = (event) => {
    setHouse(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleStateChange = (event) => {
    setState(event.target.value);
  };
  const handlePinCodeChange = (event) => {
    setPinCode(event.target.value);
  };
  const handleSymptomsChange = (event) => {
    setSymptoms(event.target.value);
  };

  const createUser = async () => {
    await addDoc(empCollectionRef, {
      FirstName: FirstName,
      LastName: LastName,
      ContactNumber: parseInt(ContactNumber),
      Email: Email,
      Age: parseInt(Age),
      Gender: Gender,
      House: House,
      City: City,
      State: State,
      PinCode: parseInt(PinCode),
      Symptoms: Symptoms,
    });
    getUsers();
    closeEvent();
    Swal.fire("Submitted!", "Your file has been submitted", "success");
  };
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const currencies = [
    {
      value: "Male",
      label: "Male",
    },
    {
      value: "Female",
      label: "Female",
    },
  ];
  return (
    <>
      
      <Box sx={{ m: 0.5 }} paddingTop={1}/>
      <Typography variant="h5" align="center">
        Add Patient
      </Typography>
      <IconButton
        style={{ position: "fixed", top: "0", right: "0"}}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={5} marginTop={-5} marginBottom={5} />
      
      <Grid container spacing={2} marginTop={5} paddingLeft={2} paddingRight={2} paddingBottom={10}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="First Name"
            paddingLeft= "10px"
            variant="outlined"
            size="small"
            onChange={handleFirstNameChange}
            value={FirstName}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            size="small"
            onChange={handleLastNameChange}
            value={LastName}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Contact Number"
            variant="outlined"
            size="small"
            onChange={handleContactNumberChange}
            value={ContactNumber}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            size="small"
            onChange={handleEmailChange}
            value={Email}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Age"
            variant="outlined"
            type="number"
            size="small"
            onChange={handleAgeChange}
            value={Age}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Gender"
            select
            variant="outlined"
            size="small"
            onChange={handleGenderChange}
            value={Gender}
            sx={{ minWidth: "100%" }}
          >
            {" "}
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label=" House No."
            variant="outlined"
            size="small"
            onChange={handleHouseChange}
            value={House}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            size="small"
            onChange={handleCityChange}
            value={City}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="State"
            variant="outlined"
            size="small"
            onChange={handleStateChange}
            value={State}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Pin Code"
            variant="outlined"
            size="small"
            onChange={handlePinCodeChange}
            value={PinCode}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Symptoms"
            variant="outlined"
            size="small"
            onChange={handleSymptomsChange}
            value={Symptoms}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Button variant="contained" onClick={createUser}>
              Submit
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ m: 4 }} />
      <Bottomnav />
    </>
  );
}