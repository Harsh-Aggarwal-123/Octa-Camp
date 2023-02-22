import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, Route, Routes } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonAdd from "@mui/icons-material/PersonAdd";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Avatar } from "@mui/material";

import "./First.css";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography
        
        sx={{ fontSize: 14 }}
        color="text.secondary"
        gutterBottom
      >
        <div>
          <PersonAddIcon position="static" />
        </div>
      </Typography>
      <CardActions>
      <Typography>
      <Link to="registration">Register Patients</Link>
        </Typography>
        
      
    </CardActions>
      <Typography variant="box5" component="div" sx={{color: "#ccd1d1"}}>
        Register patient on the platform
      </Typography>
    </CardContent>
    
  </React.Fragment>
);

export default function First() {
  const navigate = useNavigate();

  return (
    <>
     

<div>
      <div className="nav">
        <div className="parent">
          <div>
            <h3>Sat feb 2023</h3>
            <h2>Hi Harsh Aggarwal</h2>
          </div>

          <div>
            <Avatar
              backgroundColor="#009dff"
              px="10px"
              py="7px"
              borderRadius="50%"
              color="white"
            >
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                H
              </Link>
            </Avatar>
          </div>
        </div>

        <div>
          
        </div>
       
      </div>
     
    </div>

    <Box sx={{ minWidth: 27 }} paddingTop={7}>
        <Grid item xs={6}>
       <Card variant="outlined" className="gradient">{card}</Card>

        </Grid>

     </Box>
    </>
  );
}
