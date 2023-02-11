import React from "react";
//import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import { Link, Route, Routes } from "react-router-dom";
import PatientRegistration from "../components/PatientRegistration";
import LoginForm from "../components/LoginForm";
import "../style.css"
import Bottomnav from "../components/Bottomnav";

export default function Home() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        
        <Bottomnav/>

        
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Home</h1>
       
<button>
  <Link to="login-form" className="btn" >Login For Registration</Link>
</button>
        

        </Box>
      </Box>
    </>
  );
}
