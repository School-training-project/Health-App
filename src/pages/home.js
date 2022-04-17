import React from "react";
import '../components/Homestyle/homestyle.css'

const Home = () => {
    const dotw = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const moty = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const D= new Date()
    let str=D.getDate().toString()
    
    
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

    let hoursSlept=5 //this will come from the user input
    let idealhrs=8

    let hrsNum=(200*hoursSlept)/(idealhrs*2) //assuming No more than 16 hours of sleep
    hrsNum= hrsNum>200 ? 200:hrsNum //preventing Overflow
    let hrs=hrsNum.toString()+"px" //conversting to pixels

    let caloriesBurnt=400  //this will come from the user input
    let idealcalb=500
    
    let calbNum=(200*caloriesBurnt)/idealcalb //assuming 500 is ideal
    let calb=calbNum.toString()+"px"
    calb= calbNum>500 ? "+500 kcal":calb

    let caloriesConsumed=2700 //this will come from user input
    let idealcalc=3500
    
    let calcNum=(200*caloriesConsumed)/idealcalc //assuming 3500 for male
    let calc=calcNum.toString()+"px"
    calc= calcNum>3500 ? "+3500 kcal":calc
    
    let stepsWalked=6000 //this will come from user input
    let idealstps=10000
    let stpsNum=(200*stepsWalked)/idealstps //assuming 10,000 ideal
    let stps=stpsNum.toString()+"px"
    stps= stpsNum>10000 ? "+10000 kcal":stps

    return (
        <div className="Container">
            <div className="Date">{today}</div>
            <div className="Data">
            <div className="topElements">
                <div className="box" id="TLh">
                    <h3>Hours Slept</h3>
                    <div className="info" id="hoursSlept">{`${hoursSlept}`} hours</div>
                    <div className="barM">
                        <div className="cursor" style={{transition:'transform 2s ease-in-out',transform:`translateX(${hrs})`}}></div>
                    </div>
                </div>
                <div className="box" id="TRh">
                    <h3>Calories Burnt</h3>
                    <div className="info"  id="caloriesBurnt">{`${caloriesBurnt}`} kcal</div>
                    <div className="barL">
                  <div className="cursor" style={{transform:`translateX(${calb})`}}></div>
                    </div>
                </div>
            </div>
            <div className="midElements">
                <img src={require("../components/Homestyle/mratsallem.png")} className="Image"></img>
            </div>
            <div className="botElements">
                <div className="box" id="BLh">
                    <h3>Calories Consumed</h3>
                    <div className="info"  id="caloriesConsumed">{`${caloriesConsumed}`} kcal</div>
                    <div className="barL">
                    <div className="cursor" style={{transform:`translateX(${calc})`}}></div>
                    </div>
                </div>
                <div className="box" id="BRh">
                    <h3>Steps Walked</h3>
                    
                    <div className="info"  id="stepsWalked">{`${stepsWalked}`} steps</div>
                    <div className="barL">
                    <div className="cursor" style={{transform:`translateX(${stps})`}}></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Home;