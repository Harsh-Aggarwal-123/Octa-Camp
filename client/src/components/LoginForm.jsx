
import React, {useState,setState} from 'react';
import { Link } from 'react-router-dom';
import '../style.css'


const LoginForm = () =>{
  
    const [campaignName, setCampaignName] = useState(null);
    const [departmentName, setDepatmentName] = useState(null);
    const [doctorName, setDoctorName] = useState(null);
    const [campaignLocation,setCampaignLocation] = useState(null);
    const [campaignType,setCampaignType] = useState(null);
    const [patientName,setPatientName] = useState(null);
    const [patientNumber,setPatientNumber] = useState(null);
    const [patientEmail,setPatientEmail] = useState(null);
    const [patientAge,setPatientAge] = useState(null);
    const [patientGender,setPatientGender] = useState(null);
    const [patientAddress,setPatientAddress] = useState(null);
    const [patientSymptoms,setPatientSymptoms] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "campaignName"){
            setCampaignName(value);
        }
        if(id === "departmentName"){
            setDepatmentName(value);
        }
        if(id === "doctorName"){
            setDoctorName(value);
        }
        if(id === "campaignLocation"){
            setCampaignLocation(value);
        }
        if(id === "campaignType"){
            setCampaignType(value);
        }
        if(id === "patientName"){
            setPatientName(value);
        }
        if(id === "patientNumber"){
            setPatientNumber(value);
        }
        if(id === "patientEmail"){
            setPatientEmail(value);
        }
        if(id === "patientAge"){
            setPatientAge(value);
        }
        if(id === "patientGender"){
            setPatientGender(value);
        }
        if(id === "patientAddress"){
            setPatientAddress(value);
        }
        if(id === "patientSymptoms"){
            setPatientSymptoms(value);
        }
    }

    const handleSubmit  = () => {
        console.log(campaignName,departmentName,doctorName,campaignLocation,campaignType);
        console.log(patientName,patientNumber,patientEmail,patientAge,patientGender,patientAddress,patientSymptoms);
    }




    
  
    return(
      

        <div style={{border: "1px solid red", margin: "auto", width:"40%", marginTop:"10rem", height: "auto", backgroundColor:"blueviolet", border: "transparent", borderRadius:"10px" , color:"black", fontWeight:"bold" }}>
        <h2 style={{textAlign:" center"}}> Campaign Details </h2>
        <h4 style={{textAlign:" center"}}>Welcome To Our Campaign Portal</h4>
          <div className="form-body" >
              <div className="campaignname" style={{display:"inline-block"}}>
                  <label className="form__label" for="campaignName">Campaign Name </label>
                  <input style={{textAlign:" center", marginLeft:"30px"}} type="text" value={campaignName} onChange = {(e) => handleInputChange(e)} id="campaignName" placeholder="Campaign Name"/>
              </div>
              <div className="departmentname" style={{display:"inline-block"}}>
                  <label className="form__label" for="departmentName">Department Name </label>
                  <input style={{textAlign:" center", marginLeft:"15px"}} type="text" value={departmentName} onChange = {(e) => handleInputChange(e)} id="departmentName" placeholder="Department Name"/>
              </div>


<br></br>
              <div className="doctorname" style={{display:"inline-block"}}>
                  <label className="form__label" for="doctorName">Doctor Name </label>
                  <input style={{textAlign:" center", marginLeft:"55px"}} type="text" value={doctorName} onChange = {(e) => handleInputChange(e)} id="doctorName" placeholder="Doctor Name"/>
              </div>
              <div className="campaignlocation" style={{display:"inline-block"}}>
                  <label className="form__label" for="campaignLocation">Campaign Location </label>
                  <input style={{textAlign:" center", marginLeft:"10px"}}type="text" value={campaignLocation} onChange = {(e) => handleInputChange(e)} id="campaignLocation" placeholder="Campaign Location"/>
              </div>
              <div className="campaigntype">
                  <label className="form__label" for="campaignType">Campaign Type </label>
                  <input style={{textAlign:" center", marginLeft:"38px"}} value={campaignType} onChange = {(e) => handleInputChange(e)} id="campaignType" placeholder="Campaign Type"/>
              </div>
          </div>
          <div style={{textAlign: "center",
    display: "flex",
   justifyContent: "end",}}>
              <button onClick={()=>handleSubmit()} type="submit" class="btn">
      
      
              <Link to="/patients" className='btn' style={{textDecoration:"none"}}>Register</Link>
             </button>
              
              <button onClick={()=>handleSubmit()} type="submit" class="btn">Edit</button>
              
              
          </div>
          </div>
          
          
          
        
    )       
}

export default LoginForm;