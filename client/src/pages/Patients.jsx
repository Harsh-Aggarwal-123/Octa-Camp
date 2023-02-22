import React from "react";
//import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";
import PatientList from "./patient/PatientList"
//import PatientL from "./patient/PatientL";
import Bottomnav from "../components/Bottomnav";

export default function Patients() {
  return (
    <>
        <Box sx={{ display: "flex" }}>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <br></br>
          <PatientList />
          </Box>
          <Bottomnav />
        </Box>
    </>
  );
}
