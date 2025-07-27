import React, {createContext, useContext, useState} from "react"

const Data_context = createContext();

export const useData = () => useContext(Data_context);

export const DataProvider = ({children}) => {
    const [data, set_data] = useState([]);
    const [filtered_data, set_filtered_data] = useState([]);
    const [filters, set_filters] = useState({
        player: "All",
        game: "All",
        from: "",
        to: "",
        x_axis: "",
        y_axis: "",
        chart_types: "Bar"
    })

return (
    <Data_context.Provider value={{data, set_data, filtered_data, set_filtered_data, filters, set_filters}}>
        {children}
    </Data_context.Provider>
)

}
