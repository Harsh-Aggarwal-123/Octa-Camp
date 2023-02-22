import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import Avatar from './Avatar'
import "./Registration1.css"
import { BsFillPersonPlusFill } from "react-icons/bs";

const Registration1 = () => {
  return (
    <>

        <div className='main1'>
            <h3>Mon Feb 13 2023</h3>
            <div className='nav'>
            <h3>Hi, Harsh Aggarawal</h3>
            <>
            <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white' mx='7px' my='7px' style={{color:"white", textDecoration:'none'}}>
          H</Avatar>
            
               
            </>
            </div>
            
            <div className='input_field'>
            <input type="text"  placeholder='Search Employee'/>
            </div>
            
        </div>

       <div style={{display: "flex"}}>
        <div className='profile'>
       <div className='icon'> <BsFillPersonPlusFill  className='icon-n'/></div>
       <h4>
       <Link to="registration">Register Employee</Link>
       </h4>
       <p>Register  Employee on the platform.</p>
      </div>
      </div>
   
    </>
  )
}

export default Registration1