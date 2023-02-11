import React from "react";
//import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";
import PatientList from "./patient/PatientList"
import Bottomnav from "../components/Bottomnav";


export default function Patients() {
  return (
    <>
      <div className="bgcolor">
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <PatientList />
            <Bottomnav />
          </Box>
        </Box>
      </div>

    </>
  );
}
