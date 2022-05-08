import React,{useState} from "react";
import logo from "../img/logoblanc.png";
import SigninForm from "../components/Signout/SigninForm";
import SignupForm from "../components/Signout/SignupForm";

import '../components/Signout/signform.css';
import DarkMode from '../components/DarkMode/DarkMode';

export  function Signout ()  {
  const [show, setShow]= useState(true);

  return (
    <div>
      
     
    <div className="centre">

    
    <DarkMode/> 
    <div className="metarfa">
    <button onClick={() =>setShow(true)} className="signin-button">
     
      Sign in</button> 
    <br />
    <br />
 <button onClick={() =>setShow(false)}className="signup-button">Sign up</button> 

    </div>
      <div className="Left">
      <img src={logo}style={{width: "30%", marginLeft: "30%",marginTop: "20%"}} />
        <h1>WELCOME TO ZENLY</h1>
        <br />
        <p>To keep connected with us please SIGN IN with your information!</p>
        <br/>
        <p>If you're new, SIGN UP and start your healthy journey!</p>
        <p></p>
      
        
      </div>
     
        <div className="Right">


<div >

 
  {show? <SigninForm/>: <SignupForm/>}
 
</div>
</div>
         
        </div>
      </div>
    
  );
};
