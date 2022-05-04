import React,{useEffect,useState} from "react";
import '../components/Homestyle/homestyle.css'
import { motion } from 'framer-motion/dist/framer-motion'
import { animate } from "framer-motion";

const Home = () => {
    const dotw = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const moty = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const D= new Date()
    let str=D.getDate().toString()
    const [sleep,setSleep]=useState()
    const [caloriesBurntdb,setcaloriesBurnt]=useState()
    const [stepsWalkeddb,setSteps]=useState()
    const [caloriesIncome,setCaloriesIncome]=useState()
    const email= localStorage.getItem('email')
    useEffect(()=>{
        const url ="http://localhost:3001/userdata/"+email
        const fetchData= async ()=>{
            try{
                const response = await fetch(url)
                const json= await response.json()
                setSleep(json[0].hoursSlept[json[0].hoursSlept.length -1].sleep)
                setcaloriesBurnt(json[0].caloriesBurnt[json[0].caloriesBurnt.length -1].calories)
                setSteps(json[0].stepsWalked[json[0].stepsWalked.length -1].steps)
                setCaloriesIncome(json[0].caloriesIncome[json[0].caloriesIncome.length -1].calories)
            }catch(err){
                console.log("error",err)
            }
        }
        fetchData()
    },[])
    
    function thf(str){
        
        switch (str[str.length-1]) {
            case '1':
                if(str=='11'){return 'th';break}
                return 'st'
                break;
            case '2':
                if(str=='12'){return 'th';break}
                return 'nd'
                break;
            case '3':
                if(str=='13'){return 'th';break}
                return 'rd'
                break;
            default:
                return 'th'
                break;
        }
    };
    let th=thf(str)
    const today =dotw[D.getDay()].toString()+' '+moty[D.getMonth()].toString()+'   '+D.getDate().toString()+th+'  '+D.getFullYear().toString()
    let sleptHours=sleep //this will come from the user input
    let idealhrs=8
    let hrsNum=(200*sleptHours)/(idealhrs*2) //assuming No more than 16 hours of sleep
    hrsNum= hrsNum>200 ? 200:hrsNum //preventing Overflow
    let hrs=hrsNum.toString()+"px" //conversting to pixels

    let caloriesBurnt=caloriesBurntdb  //this will come from the user input
    let idealcalb=2500
    
    let calbNum=(200*caloriesBurnt)/idealcalb //assuming 500 is ideal
    let calb=calbNum.toString()+"px"
    calb= calbNum>500 ? "+500 kcal":calb

    let caloriesConsumed=caloriesIncome //this will come from user input
    let idealcalc=3500
    
    let calcNum=(200*caloriesConsumed)/idealcalc //assuming 3500 for male
    let calc=calcNum.toString()+"px"
    calc= calcNum>3500 ? "+3500 kcal":calc
    
    let stepsWalked=stepsWalkeddb //this will come from user input
    let idealstps=20000
    let stpsNum=(200*stepsWalked)/idealstps //assuming 20,000 ideal
    let stps=stpsNum.toString()+"px"
    stps= stpsNum>10000 ? "+10000 kcal":stps

    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{ opacity: 0 }}>
	        <div className="Container">
            <div className="Date">{today}</div>
            <div className="Data">
            <div className="topElements">
                <div className="box" id="TLh">
                    <h2>Hours Slept</h2>
                    <div className="info" id="hoursSlept">{`${sleptHours}`} hours</div>
                    <div className="barM">
                        <div className="cursor" style={{transition:'transform 2s ease-in-out',transform:`translateX(${hrs})`}}></div>
                    </div>
                </div>
                <div className="box" id="TRh">
                    <h2>Calories Burnt</h2>
                    <div className="info"  id="caloriesBurnt">{`${caloriesBurnt}`} kcal</div>
                    <div className="barL">
                    <div className="cursor" style={{transition:'transform 2s ease-in-out',transform:`translateX(${calb})`}}></div>
                    </div>
                </div>
            </div>
            <div className="midElements">
                <img src={require("../components/Homestyle/mratsallem.png")} className="Image"></img>
            </div>
            <div className="botElements">
                <div className="box" id="BLh">
                    <h2>Calories Income</h2>
                    <div className="info"  id="caloriesConsumed">{`${caloriesConsumed}`} kcal</div>
                    <div className="barL">
                    <div className="cursor" style={{transition:'transform 2s ease-in-out',transform:`translateX(${calc})`}}></div>
                    </div>
                </div>
                <div className="box" id="BRh">
                    <h2>Steps Walked</h2>
                    <div className="info"  id="stepsWalked">{`${stepsWalked}`} steps</div>
                    <div className="barL">
                    <div className="cursor" style={{transition:'transform 2s ease-in-out',transform:`translateX(${stps})`}}></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </motion.div>
    );
};

export default Home;