import React from "react"
import { useData } from "../context/DataContext"
import BarChart from "../components/charts/Bar"
import LineChart from "../components/charts/Line"
import PieChart from "../components/charts/Pie"


const ChartDisplay = () => {
    const {filters} = useData();
    const {x_axis, y_axis, chart_types} = filters

    if(!x_axis || !y_axis) {
        return (
            <div className="text-red-600 font-semibold mb-4">
                Please select valid axes
            </div>
        )
    }

    return (
        <div className="mb-4">
            {chart_types === "Bar" && <BarChart />}
            {chart_types === "Line" && <LineChart />}
            {chart_types === "Pie" && <PieChart />}
        </div>
    )
}

export default ChartDisplay