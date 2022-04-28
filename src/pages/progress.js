import React, { useState } from "react";
import { BarChart } from "../components/Charts/Barchart";
import { UserData } from "../components/Charts/Data";
import { LineChart } from "../components/Charts/LineChart";
//import { PieChart } from "../components/Charts/PieChart";
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
        <>
        <div  style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}>
            <Carousel style={{height: '100%',
                            width: '100%',  }}>
                <Item>
                    <div style={{
                        width:"80%",
                        height:"80%",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        marginLeft:"150px"
                }}>
                        <LineChart DataPassed={userData}
                        options={{
                        
                            colors: ["red"]
                            
                          }}
                          />
                    </div>
                </Item>
                <Item>
                    <div style={{
                        width:"80%",
                        height:"80%",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        marginLeft:"150px"
                }}> 
                            <BarChart DataPassed={userData}/>
                    </div>
                </Item>
                <Item>
                    Form for data input hatta se3a yhelha raby
                </Item>
            </Carousel>
        </div>
        
        </>
    );
};

export default Progress;