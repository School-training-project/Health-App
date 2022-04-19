import React, { useState, useEffect } from "react";
import { BarChart } from "../components/Charts/Barchart";
import { UserData } from "../components/Charts/Data";
import { LineChart } from "../components/Charts/LineChart";
import { PieChart } from "../components/Charts/PieChart";
import Carousel from "react-elastic-carousel"
import Item from "../components/Item/Item";
import { autocompleteClasses } from "@mui/material";
const Progress = () => {
    const [stepsData, setStepsData] = useState([])
    const [caloriesBurnedData, setCaloriesData] = useState([])
    const [hoursSleptData, setHoursSleptData] = useState([])
    const [caloriesIncomeData, setIncomeData] = useState([])
    const [hydrationRateData, setHydrationRateData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const stepswalkData = {
        labels: stepsData.map(i => i.day),
        datasets: [{
            label: "Steps Walked",
            data: stepsData.map((data) => data.steps),
            backgroundColor: ["#82C272", "#00A88F", "#0087AC", "#005FAA", "#323B81"],
            borderColor: "black",
            borderWidth: "2"
        }]
    }
    const caloriesburnData = {
        labels: caloriesBurnedData.map(i => i.day),
        datasets: [{
            label: "Calories Burnned",
            data: caloriesBurnedData.map((data) => data.calories),
            backgroundColor: ["#82C272", "#00A88F", "#0087AC", "#005FAA", "#323B81"],
            borderColor: "black",
            borderWidth: "2"
        }]
    }
    const hourssleptData = {
        labels: hoursSleptData.map(i => i.day),
        datasets: [{
            label: "Hours Slept",
            data: hoursSleptData.map((data) => data.sleep),
            backgroundColor: ["#82C272", "#00A88F", "#0087AC", "#005FAA", "#323B81"],
            borderColor: "black",
            borderWidth: "2"
        }]
    }
    const incomeData = {
        labels: caloriesIncomeData.map(i => i.day),
        datasets: [{
            label: "Calories Income",
            data: caloriesIncomeData.map((data) => data.calories),
            backgroundColor: ["#82C272", "#00A88F", "#0087AC", "#005FAA", "#323B81"],
            borderColor: "black",
            borderWidth: "2"
        }]
    }
    const hydrationData = {
        labels: hydrationRateData.map(i => i.day),
        datasets: [{
            label: "Hydration",
            data: hydrationRateData.map((data) => data.water),
            backgroundColor: ["#82C272", "#00A88F", "#0087AC", "#005FAA", "#323B81"],
            borderColor: "black",
            borderWidth: "2",
        }],
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Custom Chart Title',
                    padding: {
                        top: 10,
                        bottom: 30
                    }
                }
            }
        }
    }
    useEffect(() => {
        const url = "http://localhost:3001/userdata"
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(url)
                const json = await response.json()
                setStepsData(json[0].stepsWalked)
                setCaloriesData(json[0].caloriesBurnt)
                setHoursSleptData(json[0].hoursSlept)
                setIncomeData(json[0].caloriesIncome)
                setHydrationRateData(json[0].hydrationRate)
            } catch (err) {
                console.log("error", err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    // useEffect(()=>{
    //     const updatePost=async ()=>{
    //         const response= await fetch('/userdata/',requestOptions)
    //         const data= await response.json();
    //         // setPostId(data.id)
    //     }
    //     updatePost();
    // },[])

    if (loading) {
        return <p>Data is loading...</p>;
    }
    if (error || !Array.isArray(stepsData)) {
        return <p>There was an error loading your data!</p>;
    }
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}>
                <Carousel style={{
                    height: '100%',
                    width: '100%',
                }}>
                    <Item>
                        <div style={{
                            width: "70%",
                            height: "70%",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            marginLeft: "150px"
                        }}>
                            <LineChart DataPassed={stepswalkData} />
                        </div>
                    </Item>
                    <Item>
                        <div style={{
                            width: "70%",
                            height: "70%",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            marginLeft: "150px"
                        }}>
                            <LineChart DataPassed={hourssleptData} />
                        </div>
                    </Item>
                    <Item>
                        <div style={{
                            width: "70%",
                            height: "70%",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            marginLeft: "150px"
                        }}>
                            <BarChart DataPassed={caloriesburnData} />
                        </div>
                    </Item>
                    <Item>
                        <div style={{
                            width: "70%",
                            height: "70%",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            marginLeft: "150px"
                        }}>
                            <BarChart DataPassed={incomeData} />
                        </div>
                    </Item>
                    <Item>
                        <div style={{
                            width: "30%",
                            height: "30%",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            marginLeft: "350px"
                        }}>
                            <PieChart DataPassed={hydrationData} />
                        </div>
                    </Item>
                    <Item >
                        <div style={{margin:"auto",
                                    padding:"auto",
                                    fontSize:"20px",
                    }}>
                            <form >
                            <label for="income">Calories Income:</label>
                            <input type="text" id="CaloriesIncome" name="income"/><br/>
                            <label for="burned">Calories Burnned:</label><br/>
                            <input type="text" id="CaloriesBurnned" name="burnned"/><br/>
                            <label for="slept">Hours Slept:</label><br/>
                            <input type="text" id="HoursSlept" name="slept"/><br/>
                            <label for="walked">Steps Walked :</label><br/>
                            <input type="text" id="StepsWalked" name="walked"/><br/>
                            <label for="rate">Hydration Rate:</label><br/>
                            <input type="text" id="HydrationRate" name="rate"/><br/>
                            <input type="submit" value="Submit"></input>
                            </form>
                        </div>
                    </Item>
                </Carousel>
            </div>
        </>
    );
};

export default Progress;