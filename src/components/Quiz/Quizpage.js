import React from 'react';
import './quiz.css';
import { useState, useEffect } from 'react';
import { Questions, frequency, waterFrequency, exerciseFrequency, percentage } from './Questions.js';
import { Slider } from '@mui/material';
import { bgcolor } from '@mui/system';

let counter = -1
let score = Array(40)
let lastdate= "sda"
let history= Array(40)


const Q = () => {
    const [Content, setContent] = useState("Welcome to the Quiz")
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState("post")
    const email = localStorage.getItem("email")
    const [datequiz, setDate] = useState("date")
    const [url, setUrl] = useState("0")
    const [choices, setChoices] = useState(frequency)
    const defaultValue = 5
    const [value, setValue] = useState(defaultValue);
    const [food, setFood] = useState("")
    const [bgcolor,setBg]=useState("linear-gradient(90deg, rgba(73,99,102,1) 0%, #ccc 0%)")
    var  newperc
    var r = document.querySelector(":root")
    useEffect(() => {
        setTimeout(startQuiz, 2000);
        setTimeout(counter++,2000)
        for (let i =0;i<40;i++){
            history[i]=defaultValue
        } 
    }, [])
    
    var sum = 0
    var baseurl = ""
    var coef=0.5

    function changeQuestion(id) {
        if (id< 40) { setFood(Questions[id][0]) }
        else { endQuiz() }
        
        //Question Exceptions
        if (id===40) { setContent("You completed the Quiz");setFood(Questions[id][0]) }
        else if ((id===37)||(id === 38)||(id === 39)) { setContent("How often do you do :") }
        else if ((id === 33)||(id === 34)||(id === 35)||(id === 36)) { setContent("How often do you drink :") }
        else if ((id === 20)||(id === 22)||(id === 24)||(id === 36)) { setContent("How much of that is :") }
        else { setContent("How often do you eat :") }
        //Slider choice exceptions
        if ((id === 33)) { setChoices(waterFrequency) }
        else if ((id === 37)||(id === 38)||(id === 39)) { setChoices(exerciseFrequency) }
        else if ((id === 20)||(id === 22)||(id === 24) || (id === 36)) { setChoices(percentage) }
        else (setChoices(frequency))
        newperc=((83.5-16.5)/40)*(counter)+16.5
        setBg(` linear-gradient(90deg, rgba(73,99,102,1) ${newperc}%, #ccc ${newperc}%)`)
    }

    const p= document.getElementById("prev")
    const n =document.getElementById("next")
    const prevClick = ()=>{
        counter = counter>0? (counter-1):0
        console.log(counter)
        changeQuestion(counter)
        
        // styling
        if ((n!=null)&&(p!=null)){
            p.style.color= counter===0? "#ccc":"#000"
            n.style.color= counter<40? "#000":"#ccc"}
            setValue(history[counter])
            r.style.setProperty('--shakeIntesity', `${(9*4000)/(5*(value+0.2))}ms`)
    }
    const nextClick= ()=>{
        if (counter <40) {
            score[counter]=Questions[counter][value+1]
            history[counter]=value
            
        }
        
        counter = counter<40 ? (counter+1): 40
        console.log(counter)
        changeQuestion(counter)
        if ((n!=null)&&(p!=null)){
            n.style.color= counter>=40? "#ccc":"#000"
            p.style.color= counter>0? "#000":"#ccc"
        }
        setValue(history[counter])
        r.style.setProperty('--shakeIntesity', `${(9*4000)/(5*(value+0.2))}ms`);
        
    }
    function startQuiz() {
        setContent("How often do you eat :")
        setFood(Questions[counter][0])
    }

    const endQuiz=()=> {
        var lodash = require('lodash');
        sum = Math.round(lodash.sum(score))
        const baseurl = "http://localhost:3001/userdata/" + email + "/" + sum.toString()
        setUrl(baseurl)
        setValue(sum)
        console.log(sum)
        localStorage.setItem("score",sum)
    }
    useEffect(async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

        };
        try {
            await fetch(url, requestOptions)
            setPost("posted")
        } catch {
            console.log("err ")
        }
    }, [url])
    useEffect(() => {
        const url = "http://localhost:3001/userdata/" + email
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(url)
                const json = await response.json()
                setDate(json[0].score)
            } catch (err) {
                console.log("error", err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [post])
    const marks = [
        {
            value: 0,
            label: choices[0],
        },
        {
            value: 1,

        }, {
            value: 2,

        }, {
            value: 3,

        }, {
            value: 4,

        }, {
            value: 5,

        }, {
            value: 6,

        }, {
            value: 7,

        }, {
            value: 8,
        },
        {
            value: 9,
            label: choices[9],
        },
    ];
    //const handleSliderChange = (event, newValue) => {
    //   setValue(newValue);
    // };

    if (loading) {
        return <p>Data is loading...</p>;
    }
  
    

    return (
        <div className='container'>
            <div className="BarOuter" style={{background:`${bgcolor}`}}>
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
            <div style={{position:"relative",
                        bottom:"20px",
                        fontWeight:"700",
                        fontSize:"24px",
                        width:"80px",
                        height:"80px",
                        borderRadius:"50%",
                        background:"var(--greenbar)",
                        textAlign:"center",
                        paddingTop:"25px"
                        }}>{`${Math.round(counter*100/40)}%`}</div>
            <div className='Slider'>
                <Slider
                    size="small"
                    value={value}
                    label

                    //onChange={handleSliderChange}
                    onChange={(_, value) =>{setValue(value);r.style.setProperty('--shakeIntesity', `${(9*4000)/(5*(value+0.2))}ms`);}}
                    defaultValue={defaultValue}

                    step={1}
                    marks={marks}
                    min={0}
                    max={9}
                    sx={{
                        color: "#42CD8C",
                        height: '10px',
                        '& .MuiSlider-thumb': {
                            height: 24,
                            width: 24,
                        },
                    }}
                />
                <div className="option">
                    {`${choices[value]}`}
                </div>

            </div>
            <div className='Buttons'>
                <button onClick={prevClick} id='prev' className='Bouton'>PREVIOUS</button>
                <button onClick={nextClick} id='next' className='Bouton'>NEXT</button>
            </div>
        </div>

    )
};


export default Q;