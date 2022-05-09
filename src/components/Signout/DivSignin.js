import React,{useState} from "react";
import image from "../img/fly.png";
import SigninForm from "../components/Signout/SigninForm";
import SignupForm from "../components/Signout/SignupForm";
import '../components/Signout/signform.css';
import DarkMode from '../components/DarkMode/DarkMode';

export  function DivSignin ()  {
  const [show, setShow]= useState(true);
  return (
    <div>
     
     <div className="signupkhra">
        <h1>salem khouya</h1>
        <button onClick={() =>setShow(true)} className="signin-button">Sign in</button>
        
      </div>
    </div>
  );
};