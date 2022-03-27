import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

export const LineChart = ({DataPassed})=>{
    return <div>
        <Line data={DataPassed}  />
    </div>
}