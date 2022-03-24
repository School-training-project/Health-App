import React, { useState } from "react";
import { BarChart } from "../components/Charts/Barchart";
import { UserData } from "../components/Charts/Data";
import { LineChart } from "../components/Charts/LineChart";
import { PieChart } from "../components/Charts/PieChart";
import Carousel from "react-elastic-carousel"
import Item from "../components/Item/Item";
const Progress = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data)=> data.year),
        datasets: [{
            label: "Users Gained",
            data: UserData.map((data)=> data.userGain),
            backgroundColor: ["#82C272", "#00A88F", "#0087AC", "#005FAA", "#323B81"],
            borderColor: "gray",
            borderWidth:"2"
        }]
    })
    return (
        <div  style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>  
            <Carousel style={{color:'red'}} >
                <Item>
                    <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',}}>
                        <LineChart DataPassed={userData}/>
                    </div>
                </Item>
                <Item>
                    <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                }}> 
                            <BarChart DataPassed={userData}/>
                    </div>
                </Item>
                <Item>
                    <div>
                            <PieChart DataPassed={userData}/>
                    </div>
                </Item>
                <Item>
                    Form for data input hatta se3a yhelha raby
                </Item>
            </Carousel>
        </div>
    );
};

export default Progress;