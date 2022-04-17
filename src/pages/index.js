
import React from 'react';
import '../components/Welcome/welcomestyle.css'
import logo from "../img/logo.png"
const test = () => {
  
  return ( <div
                style={{
                  
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh'
              }}>   
              <div className="div1">
                <center>
                <img src={logo}style={{width: "15%", marginTop: "50px"}} />
                <p className="title1">ZENLY, a smarter and simpler way to manage your health.</p>
                <br/>
                <p className="parag1">This health website was created to help you access easy-to-navigate information and
                   organize your important data so you can take control of your health.
                  Our website puts your important information at your fingertips, including your health records, labs, activity, sleep, and more.
Having a second set of eyes on your health data can give you peace of mind.</p>
                </center>
              </div>
      
      
      </div>
  );
};

export default test;