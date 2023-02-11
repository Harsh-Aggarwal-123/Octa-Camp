import React from "react";
//import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";
import List from "../arete/List";
import Bottomnav from "../components/Bottomnav";


export default function Arete() {
  return (
    <>
       <Box height={70} />
      <Box sx={{ display: "flex" }}>
        
        
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            
        <List />    
        <Bottomnav/>
          
        </Box>
      </Box>
    </>
  );
}