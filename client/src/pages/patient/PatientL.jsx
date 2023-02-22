import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import "../../style.css";
import { useEffect } from "react";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useAppStore } from "../../appStore";

export default function PatientL() {
  const empCollectionRef = collection(db, "patients");
  const setRows = useAppStore((state) => state.setRows);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia height="100" background="black" />
      <CardContent>
        
        <Typography>
          Patient Name <label className="uhid">UHID </label>
          <label className="uhid">Age</label>
        </Typography>

        <Typography>Symptoms</Typography>
        <Typography>
          Gender <label className="state">State</label>
        </Typography>
        <Typography>Contact Number</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
