import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

export const LineChart = ({DataPassed,options})=>{
    return <div>
        <Line options={options} data={DataPassed} 
         />
    </div>
}