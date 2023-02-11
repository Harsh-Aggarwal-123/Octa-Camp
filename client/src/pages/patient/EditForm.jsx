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
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  get,
} from "firebase/firestore";
import { useAppStore } from "../../appStore";

export default function EditForm({ fid, closeEvent }) {
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Age, setAge] = useState("");
  const [Gender, setGender] = useState("");
  const [Address, setAddress] = useState("");
  const [Symptoms, setSymptoms] = useState("");
  const setRows = useAppStore((state) => state.setRows);
  //const [rows, setRows] = useState([]);
  const empCollectionRef = collection(db, "patients");

  useEffect(() => {
    console.log("FID: " + fid.id);
    setName(fid.Name);
    setNumber(fid.Number);
    setEmail(fid.Email);
    setAge(fid.Age);
    setGender(fid.Gender);
    setAddress(fid.Address);
    setSymptoms(fid.Symptoms);
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNumber(event.target.value);
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
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleSymptomsChange = (event) => {
    setSymptoms(event.target.value);
  };

  const createUser = async () => {
    const userDoc = doc(db, "patients", fid.id);
    const newFields = {
      Name: Name,
      Number: parseInt(Number),
      Email: Email,
      Age: parseInt(Age),
      Gender: Gender,
      Address: Address,
      Symptoms: Symptoms,
    }
    await updateDoc(userDoc, newFields);
    getUsers();
    closeEvent();
    Swal.fire("Submitted!", "Your file has been updated", "success");
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
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Edit Patient
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            size="small"
            onChange={handleNameChange}
            value={Name}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Number"
            variant="outlined"
            size="small"
            onChange={handleNumberChange}
            value={Number}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            onChange={handleEmailChange}
            value={Email}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
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
        <Grid item xs={6}>
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
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            size="small"
            onChange={handleAddressChange}
            value={Address}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
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
    </>
  );
}
