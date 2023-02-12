import React from "react";
//import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";
import PatientList from "./patient/PatientList"
import Bottomnav from "../components/Bottomnav";


export default function Patients() {
  return (
    <>
      
      
        <Box sx={{ display: "flex" }}>
        
            
        <Bottomnav />
        
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <PatientList />
          </Box>
        </Box>
      

    </>
  );
}
