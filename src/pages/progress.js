import React, { useState, useEffect, useRef } from "react";
import { BarChart } from "../components/Charts/Barchart";
import { LineChart } from "../components/Charts/LineChart";
import { PieChart } from "../components/Charts/PieChart";
import Carousel from "react-elastic-carousel"
import Item from "../components/Item/Item";
import './progress.css';
import { motion } from 'framer-motion/dist/framer-motion'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const options = {
    responsive: true,
    maintainAspectRatio: "false",
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'bar Chart',
        },
    },
    scales: {
        y: {
            beginAtZero: true
        }
    }
};


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
            fill: true,
            tension: 0.3,
            data: stepsData.map((data) => data.steps),
            backgroundColor: ["#82C272", "#00A88F", "#0087AC", "#005FAA", "#323B81"],
            borderWidth: "2",
            backgroundColor: "red",
            borderColor: function (context) {
                const chart = context.chart;
                const { ctx, chartArea } = chart;

                if (!chartArea) {
                    // This case happens on initial chart load
                    return;
                }
                return getGradient(ctx, chartArea);
            },
            pointBackgroundColor: "rgba(66,205,140,1)",
            pointRadius: 5,
            pointBorderColor: "#5515D2",
            hoverBorderWidth: 10,
            lineBackgroundColor: "rgba(66,205,140,.1)",
        }]
    }
    let width, height, gradient;
    function getGradient(ctx, chartArea) {
        const chartWidth = chartArea.right - chartArea.left;
        const chartHeight = chartArea.bottom - chartArea.top;
        if (!gradient || width !== chartWidth || height !== chartHeight) {
            // Create the gradient because this is either the first render
            // or the size of the chart has changed
            width = chartWidth;
            height = chartHeight;
            gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0, "rgb(243, 84, 22)");
            gradient.addColorStop(0.3, "#FFD36E");
            gradient.addColorStop(1, "#42CD8C");
        }

        return gradient;
    }
    const caloriesburnData = {
        labels: caloriesBurnedData.map(i => i.day),
        datasets: [{
            label: "Calories Burnned",
            fill: true,
            tension: 0.3,
            data: caloriesBurnedData.map((data) => data.calories),
            backgroundColor: ["#82C272", "#00A88F", "#0087AC", "#005FAA", "#323B81"],
            borderColor: "black",
            borderWidth: "2",
            borderColor: function (context) {
                const chart = context.chart;
                const { ctx, chartArea } = chart;

                if (!chartArea) {
                    // This case happens on initial chart load
                    return;
                }
                return getGradient(ctx, chartArea);
            },
            pointBackgroundColor: "rgba(66,205,140,1)",
            pointRadius: 5,
            pointBorderColor: "#5515D2",
            hoverBorderWidth: 10,
            lineBackgroundColor: "rgba(66,205,140,.1)",
        }]
    }
    const hourssleptData = {
        labels: hoursSleptData.map(i => i.day),
        datasets: [{
            label: "Hours Slept",
            fill: true,
            tension: 0.3,
            data: hoursSleptData.map((data) => data.sleep),
            backgroundColor: ["#82C272", "#00A88F", "#0087AC", "#005FAA", "#323B81"],
            borderColor: "black",
            borderWidth: "2",
            borderColor: function (context) {
                const chart = context.chart;
                const { ctx, chartArea } = chart;

                if (!chartArea) {
                    // This case happens on initial chart load
                    return;
                }
                return getGradient(ctx, chartArea);
            },
            pointBackgroundColor: "rgba(66,205,140,1)",
            pointRadius: 5,
            pointBorderColor: "#5515D2",
            hoverBorderWidth:10 ,
            lineBackgroundColor: "rgba(66,205,140,.1)",
        }]
    }
    const incomeData = {
        labels: caloriesIncomeData.map(i => i.day),
        datasets: [{
            label: "Calories Income",
            fill: true,
            tension: 0.3,
            data: caloriesIncomeData.map((data) => data.calories),
            backgroundColor: ["#82C272", "#00A88F", "#0087AC", "#005FAA", "#323B81"],
            borderColor: "black",
            borderWidth: "2",
            borderColor: function (context) {
                const chart = context.chart;
                const { ctx, chartArea } = chart;

                if (!chartArea) {
                    // This case happens on initial chart load
                    return;
                }
                return getGradient(ctx, chartArea);
            },
            pointBackgroundColor: "rgba(66,205,140,1)",
            pointRadius: 5,
            pointBorderColor: "#5515D2",
            hoverBorderWidth: 10,
            lineBackgroundColor: "rgba(66,205,140,.1)",
        }]
    }
    const hydrationData = {
        labels: hydrationRateData.map(i => i.day),
        datasets: [{
            label: "Hydration",
            fill: true,
            tension: 0.3,
            data: hydrationRateData.map((data) => data.water),
            backgroundColor: ["#82C272", "#00A88F", "#0087AC", "#005FAA", "#323B81"],
            borderColor: "black",
            borderWidth: "2",
            borderColor: function (context) {
                const chart = context.chart;
                const { ctx, chartArea } = chart;

                if (!chartArea) {
                    // This case happens on initial chart load
                    return;
                }
                return getGradient(ctx, chartArea);
            },
            pointBackgroundColor: "rgba(66,205,140,1)",
            pointRadius: 5,
            pointBorderColor: "#5515D2",
            hoverBorderWidth: 10,
            lineBackgroundColor: "rgba(66,205,140,.1)",
        }],
    }
    const email = localStorage.getItem('email')

    useEffect(() => {
        const url = "http://localhost:3001/userdata/" + email
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
    const baseUrl = "http://localhost:3001/userdata/" + email
    const income = useRef(null)
    const burnned = useRef(null);
    const slept = useRef(null)
    const walked = useRef(null)
    const rate = useRef(null)
    const [postResult, setPostResult] = useState(null);
    const fortmatResponse = (res) => {
        return JSON.stringify(res, null, 2);
    }
    async function postData() {
        const postData = {
            income: income.current.value,
            burnned: burnned.current.value,
            slept: slept.current.value,
            walked: walked.current.value,
            rate: rate.current.value
        };
        try {
            const res = await fetch(`${baseUrl}`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": "token-value",
                },
                body: JSON.stringify(postData),
            });
            if (!res.ok) {
                const message = `An error has occured: ${res.status} - ${res.statusText}`;
                throw new Error(message);
            }
            const data = await res.json();
            const result = {
                status: res.status + "-" + res.statusText,
                headers: {
                    "Content-Type": res.headers.get("Content-Type"),
                    "Content-Length": res.headers.get("Content-Length"),
                },
                data: data,
            };
            setPostResult(fortmatResponse(result));
            window.location.href = "./test";
        } catch (err) {
            setPostResult(err.message);
        }
    }
    const clearPostOutput = () => {
        setPostResult(null);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        window.location.href = "./progress";
    };
    if (loading) {
        return <p>Data is loading...</p>;
    }
    if (error || !Array.isArray(stepsData)) {
        return <p>There was an error loading your data!</p>;
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
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
                                marginLeft: "150px",
                            }}>
                                <LineChart options={options} DataPassed={stepswalkData} />
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
                                <LineChart options={options} DataPassed={hourssleptData} />
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
                                <LineChart options={options} DataPassed={caloriesburnData} />
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
                                <LineChart options={options} DataPassed={incomeData} />
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
                                <LineChart options={options} DataPassed={hydrationData} />
                            </div>
                        </Item>
                        <Item >
                            <div style={{
                                margin: "auto",
                                padding: "auto",
                                fontSize: "20px",
                            }}>
                                <form onSubmit={onSubmit} >

                                    <label for="income"><p id="calinc">Calories Income:</p>
                                        <input type="text" id="CaloriesIncome" ref={income} name="income" /><br />

                                    </label>

                                    <label for="burned"><p id="calinc">Calories Burnned:</p><br />
                                        <input type="text" id="CaloriesBurnned" ref={burnned} name="burnned" /><br />
                                    </label>
                                    <label for="slept"><p id="calinc">Hours Slept:</p><br />
                                        <input type="text" id="HoursSlept" ref={slept} name="slept" /><br />
                                    </label>
                                    <label for="walked"><p id="calinc">Steps Walked :</p><br />
                                        <input type="text" id="StepsWalked" ref={walked} name="walked" /><br />
                                    </label>
                                    <label for="rate"><p id="calinc">Hydration Rate:</p><br />
                                        <input type="text" id="HydrationRate" ref={rate} name="rate" /><br />
                                    </label>
                                    <button onClick={postData} >Submit</button>
                                    <button className="btn btn-sm btn-warning ml-2" onClick={clearPostOutput}>Clear</button>
                                    {postResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{postResult}</pre></div>}
                                </form>
                            </div>
                        </Item>
                    </Carousel>
                </div>
            </>
        </motion.div>
    );
};

export default Progress;