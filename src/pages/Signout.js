import React,{useState} from "react";
import image from "../img/fly.png";
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
      <div className="Left">
        <h2 className="title" >WELCOME TO HEALTH APP</h2>
        <img src={image}style={{width: "85%"}} />
      </div>
      <div className="Right">


        <div >
        
         <button onClick={() =>setShow(true)} className="signin-button">Sign in</button> 
         <button onClick={() =>setShow(false)}className="signup-button">Sign up</button> 
          {show? <SigninForm/>: <SignupForm/>}
         
        </div>
      </div>
    </div>
    </div>
  );
};
