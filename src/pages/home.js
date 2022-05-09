import React,{useEffect,useState} from "react";
import '../components/Homestyle/homestyle.css'
import { motion } from 'framer-motion/dist/framer-motion'
import { animate } from "framer-motion";

const Home = () => {
    const dotw = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const moty = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const D= new Date()
    let str=D.getDate().toString()
    const [sleep,setSleep]=useState(0)
    const [caloriesBurntdb,setcaloriesBurnt]=useState(0)
    const [stepsWalkeddb,setSteps]=useState(0)
    const [caloriesIncome,setCaloriesIncome]=useState(0)
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
    let hrsNum=(200*sleptHours)/(idealhrs) //assuming No more than 16 hours of sleep
    hrsNum= hrsNum>200 ? 200:hrsNum //preventing Overflow
    let hrs=hrsNum.toString()+"px" //conversting to pixels

    let caloriesBurnt=caloriesBurntdb  //this will come from the user input
    let idealcalb=2500
    let calbNum=(200*caloriesBurnt)/idealcalb //assuming 500 is ideal
    calbNum= calbNum>200 ? 200:calbNum
    let calb=calbNum.toString()+"px"

    let caloriesConsumed=caloriesIncome //this will come from user input
    let idealcalc=3500
    let calcNum=(200*caloriesConsumed)/idealcalc //assuming 3500 for male
    calcNum= calcNum>200 ? 200:calcNum
    let calc=calcNum.toString()+"px"

    let stepsWalked=stepsWalkeddb //this will come from user input
    let idealstps=20000
    let stpsNum=(200*stepsWalked)/idealstps //assuming 20,000 ideal
    stpsNum= stpsNum>200 ? 200:stpsNum
    let stps=stpsNum.toString()+"px"

    function plus(N){
        if((N===stepsWalked) && (stepsWalked>idealstps)){return '+'}
        else if((N===caloriesConsumed) && (caloriesConsumed>idealcalc)){return '+'}
        else if((N===caloriesBurnt) && (caloriesBurnt>idealcalb)){return '+'}
        else if((N===hrs) && (hrs>idealhrs)){return '+'}
        else {return ''}
    }
    let scorehome=0
    scorehome+=Math.round(stpsNum/idealstps+calcNum/idealcalc+calbNum/caloriesBurnt+hrsNum/idealhrs)
    localStorage.setItem("scorehome",scorehome)
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
                    <div className="info" id="hoursSlept">{plus(sleptHours)+`${sleptHours}`} hours</div>
                    <div className="barM">
                        <div className="cursor" style={{transition:'transform 2s ease-in-out',transform:`translateX(${hrs})`}}></div>
                    </div>
                </div>
                <div className="box" id="TRh">
                    <h2>Calories Burnt</h2>
                    <div className="info"  id="caloriesBurnt">{plus(caloriesBurnt)+`${caloriesBurnt}`} kcal</div>
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
                    <div className="info"  id="caloriesConsumed">{plus(caloriesConsumed)+`${caloriesConsumed}`} kcal</div>
                    <div className="barL">
                    <div className="cursor" style={{transition:'transform 2s ease-in-out',transform:`translateX(${calc})`}}></div>
                    </div>
                </div>
                <div className="box" id="BRh">
                    <h2>Steps Walked</h2>
                    <div className="info"  id="stepsWalked">{plus(stepsWalked)+`${stepsWalked}`} steps</div>
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