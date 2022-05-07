import React, { useState, useEffect } from 'react';
import './quiz.css';
import { Questions,frequency,waterFrequency,exerciseFrequency,percentage } from './Questions.js';
import { Slider } from '@mui/material';
    
    let counter=-1
    var score=Array(40)
    var history=Array(40)
    var defaultValue=5
    let end=0

const Q = () =>{

    const [Content,setContent]=useState("Welcome to the Quiz")
    const [value, setValue] =useState(defaultValue);
    const [food,setFood]=useState("Ready?")

window.onload = function(){
    for(let i=0;i<40;i++){history[i]=defaultValue}
    welcome();
    setTimeout(startQuiz, 3000);
    counter++
}

function welcome(){
    
}

const [choices,setChoices]=useState(frequency)

function changeQuestion(counter){
    if(counter<=40){setFood(Questions[counter][0])}
    else{endQuiz()}
//Question Exceptions
    if((counter==40)){setContent("You completed the Quiz")}
    else if((counter==37) || (counter==38) || (counter==39)){setContent("How often do you do :")}
    else if((counter==33) || (counter==34) || (counter==35) || (counter==36)){setContent("How often do you drink :")}
    else if((counter==20) || (counter==22) || (counter==24) || (counter==36)){setContent("How much of that is :")}
    else{setContent("How often do you eat :")}
//Slider choice exceptions
    if((counter==33)){setChoices(waterFrequency)}
    else if((counter==37) || (counter==38) || (counter==39)){setChoices(exerciseFrequency)}
    else if((counter==20) || (counter==22) || (counter==24) || (counter==36)){setChoices(percentage)}
    else(setChoices(frequency))

    
}

function startQuiz(){
    setContent("How often do you eat :")
    setFood(Questions[counter][0])
    const P= document.getElementById('prev')
    const N= document.getElementById('next')

    P.onclick=function(){
        
        counter= counter>0 ? (counter-1):0
        console.log(counter);
        P.style.color= counter==0 ? '#ccc':'#000'
        N.style.color= counter<40 ? '#000':'#ccc' 
        //setValue(defaultValue)
        changeQuestion(counter)
    }
    N.onclick=function(){
        
        if(counter<40){
            score[counter]=Questions[counter][value+1]
            history[counter]=value
        }
        counter= counter<40 ? (counter+1):40
        //console.log(counter);
        N.style.color= counter>=40 ? '#ccc':'#000'
        P.style.color= counter>0 ? '#000':'#ccc'
        setValue(defaultValue)
        changeQuestion(counter)
        //console.log(score);
        //console.log(history)
        console.log("The slider value is ",value);
    }
}

function endQuiz(){
    console.log("stoppp");
    var lodash = require('lodash');
    var sum=Math.round(lodash.sum(score))
    console.log(sum)
}

const marks = [
    {
      value: 0,
      label: choices[0],
    },
    {
        value: 1,
        
      },{
        value: 2,
        
      },{
        value: 3,
        
      },{
        value: 4,
        
      },{
        value: 5,
        
      },{
        value: 6,
        
      },{
        value: 7,
       
      },{
        value: 8,
      },
    {
        value: 9,
        label: choices[9],
      },
  ];
return(
<div className='container'>
<div className="BarOuter">
    <div className="BarInner">
        <div className="questions">
            <div className="Content">{Content}</div>
            <div className="food">{food}</div>
            <div className="iconer">
            <img src={require(`./FoodIcons/Icon${counter}.png`)} id="icon"></img>
            </div>

        </div>
    </div>
</div>
<div className='Slider'>
    <Slider
    size="small"
    value={value}
    label
    
    //onChange={handleSliderChange}
    onChange={(_, newvalue) => setValue(newvalue)}
    defaultValue={defaultValue}
    
    step={1}
    marks={marks}
    min={0}
    max={9}
    sx={{
        color: "#42CD8C",
        height:'10px',
        '& .MuiSlider-thumb': {
            height:24,
            width:24,
          },
        
      }}
    />
    <div className="option">
        {`${choices[value]}`}
    </div>
    
</div>
<div className='Buttons'>
    <button id='prev'>PREVIOUS</button>
    <button id='next'>NEXT</button>
</div>
</div>

)};


export default Q;

