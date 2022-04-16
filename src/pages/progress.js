import React, { useState ,useEffect} from "react";
import { BarChart } from "../components/Charts/Barchart";
import { UserData } from "../components/Charts/Data";
import { LineChart } from "../components/Charts/LineChart";
import { PieChart } from "../components/Charts/PieChart";
import Carousel from "react-elastic-carousel"
import Item from "../components/Item/Item";
const Progress = () => {
    const [caloriesData,setCaloriesData]=useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    useEffect(()=>{
        const url ="http://localhost:3001/userdata"
        const fetchData= async ()=>{
            try{
                setLoading(true)
                const response = await fetch(url)
                const json= await response.json()
                setCaloriesData(json[0].caloriesBurnt)
                
            }catch(err){
                console.log("error",err)
            }finally{setLoading(false)}
        }
        fetchData()
    },[])
    
    const [userData, setUserData] = useState({
        labels: caloriesData.map(i=>i.day),
        datasets: [{
            label: "Users Gained",
            data: caloriesData.map((data)=> data.calories),
            backgroundColor: ["#82C272", "#00A88F", "#0087AC", "#005FAA", "#323B81"],
            borderColor: "red",
            borderWidth:"2"
        }]
    })
    if (loading) {
        return <p>Data is loading...</p>;
        }
    if (error || !Array.isArray(caloriesData)) {
        return <p>There was an error loading your data!</p>;
    }
    console.log(caloriesData)
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
                        width:"70%",
                        height:"70%",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        marginLeft:"150px"
                }}>
                        <LineChart DataPassed={userData}/>
                    </div>
                </Item>
                <Item>
                    <div style={{
                        width:"70%",
                        height:"70%",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        marginLeft:"150px"
                }}> 
                            <BarChart DataPassed={userData}/>
                    </div>
                </Item>
                <Item>
                    <div style={{
                        width:"30%",
                        height:"30%",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        marginLeft:"350px"
                }}>
                            <PieChart DataPassed={userData}/>
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