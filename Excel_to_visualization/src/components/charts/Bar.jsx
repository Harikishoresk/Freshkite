import React from "react";
import { Bar } from "react-chartjs-2";
import {Chart, CategoryScale, LinearScale, BarElement, Tooltip, Legend} from "chart.js"
import { useData } from "../../context/DataContext";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const BarChart = () => {
    const {filtered_data, filters} = useData()
    const {x_axis, y_axis} = filters

    const labels = filtered_data.map(data => data[x_axis])
    const values = filtered_data.map(data => data[y_axis])

    const data = {
        labels,
        datasets: [{
            label: `${y_axis} by ${x_axis}`,
            data: values,
            backgroundColor: "rgba(54, 162, 235, 0.6"

        }]
    }
    return (
        <Bar data = {data} />
    )

}

export default BarChart
