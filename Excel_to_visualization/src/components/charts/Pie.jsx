import React from "react"
import { Pie } from "react-chartjs-2"
import { useData } from "../../context/DataContext"
import { Chart, ArcElement, Tooltip, Legend } from "chart.js"

Chart.register(ArcElement, Tooltip, Legend)

const PieChart = () => {
    const {filtered_data, filters} = useData()
    const {x_axis, y_axis} = filters

    const grouped = filtered_data.reduce((acc, curr) => {
        const key = curr[x_axis]
        acc[key] = (acc[key] || 0) + item[y_axis]
        return acc
    }, {})

    const labels = Object.keys(grouped)
    const values = Object.values(grouped)

    const data = {
        labels,
        datasets: [{
            data: values,
            backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)"
            ]
        }]
    }
    return <Pie data={data} />
}

export default PieChart;