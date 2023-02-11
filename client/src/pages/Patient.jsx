import React from "react";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import PatientList from "./patient/PatientList"

export default function Patient() {
  return (
    <>
      <div className="bgcolor">
        <Box height={30} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />

          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <PatientList />
            <h1>Patients</h1>
          </Box>
        </Box>
      </div>
    </>
  );
}
