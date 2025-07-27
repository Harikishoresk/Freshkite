import React from "react";
import { useData } from "../../context/DataContext";
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend } from "chart.js";

Chart.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend)

const LineChart = () => {
    const {filtered_data, filters} = useData()
    const {x_axis, y_axis} = filters

    const labels = filtered_data.map(data => data[x_axis])
    const values = filtered_data.map(data => data[y_axis])

    const data = {
        labels,
        datasets: [{
            label: `${y_axis} by ${x_axis}`,
            data: values,
            fill: false,
            borderColor: "rgba(75, 192, 192, 1)",
            tension: 0.1
        }]
    }

    return (
        <Line data={data}/>
    )
}

export default LineChart
