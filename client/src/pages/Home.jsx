import React from "react";
//import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import { Link, Route, Routes } from "react-router-dom";
import PatientRegistration from "../components/PatientRegistration";
import LoginForm from "../components/LoginForm";
import "../style.css"
import Bottomnav from "../components/Bottomnav";
import Registration1 from "../components/Registration1";
import "../components/Registration1.css"

export default function Home() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        
        <Bottomnav/>

        
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        

        <Registration1 />
       

        </Box>
      </Box>
    </>
  );
}
