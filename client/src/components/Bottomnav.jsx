import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonAdd from '@mui/icons-material/PersonAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useNavigate} from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';


export default function Bottomnav() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (

    
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={()=>{navigate("/")}}>
        </BottomNavigationAction>
        

      
      <BottomNavigationAction label="Employee" icon={<PersonAddIcon />} onClick={()=>{navigate("/registration")}} />
      <BottomNavigationAction label="Search" icon={<PersonSearchIcon />} onClick={()=>{navigate("/patients")}}/>
      <BottomNavigationAction label="Login" icon={<AddCircleIcon />} onClick={()=>{navigate("/camp")}} />

    </BottomNavigation>
  </Paper>
  );
}
//<BottomNavigationAction label="Patients" icon={<PersonAddIcon />} onClick={()=>{navigate("/patients")}}/>
//<BottomNavigationAction label="Arete" icon={<AccountCircleIcon />} onClick={()=>{navigate("/arete")}} />*/