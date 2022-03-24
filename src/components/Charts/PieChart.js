import React from 'react'
import { Pie } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

export const PieChart = ({DataPassed})=>{
    return <div>
        <Pie data={DataPassed}  />
    </div>
}