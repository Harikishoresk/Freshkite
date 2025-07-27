import React, {useEffect, useState} from "react";
import {useData} from "../context/DataContext";

const LiveFilters = () => {
    const {data, filters, set_filters, set_filtered_data} = useData();
    const [players, set_players] = useState([])
    const [games, set_games] = useState([])

    useEffect(() => {
        const unique_players = [... new Set(data.map(row => row.players))]
        const unique_games = [... new Set(data.map(row => row.games))]
        
        set_players(unique_players)
        set_games(unique_games)
    }, [data])

    useEffect(() => {
        let result = [...data]

        if (filters.players !== "All") {
            result = result.filter(row => row.players === filters.players)
        }

        if (filters.game !== "All") {
            result = result.filter(row => row.games === filters.games)
        }

        if (filters.from) {
            result = result.filter(row => new Date(row.Date) >= new Date(filters.from))
        }

        if (filters.to) {
            result = result.filter(row => new Date(row.Date) <= new Date(filters.to) )
        }

        set_filtered_data(result)
    }, [filters, data])

    const handle_change = (event) => {
        set_filters({ ...filters, [event.target.name]: event.target.value})

    }

    return (
        <div className="grid grid-cols md:grid-cols-3 gap-4 mb-4">
            <select name="player" value={filters.players} onChange={handle_change}>
                <option value="All">All Players</option>
                {players.map((player, i) => <option key={i} value={player}>{player}</option>)}
            </select>

            <select name="game" value={filters.games} onChange={handle_change}>
                <option value="All">All Games</option>
                {games.map((game, i) => <option key={i} value={game}>{game}</option>)}
            </select>

            <select name="from_date" value={filters.from} onChange={handle_change}>
                <option value="">From Date: </option>
                {[
                    ... new Set(data.map(row => row.date_format))
                ].map(data => <option key={data} value={data}>{data}</option>)}
            </select>

            <select name="to_date" value={filters.to} onChange={handle_change}>
                <option value="">To Date: </option>
                {[
                    ... new Set(data.map(row => row.date_format))
                ].map(data => <option key={data} value={data}>{data}</option>)}
            </select>

            <select name="chart_types" value={filters.chart_types} onChange={handle_change}>
                <option value="Bar">Bar</option>
                <option value="Line">Line</option>
                <option value="Pie">Pie</option>
            </select>

            <select name="x_axis" value={filters.x_axis} onChange={handle_change}>
                <option value="">--Select X_axis--</option>
                <option value="Player">Player</option>
                <option value="Game">Game</option>
                <option value="Date_format">Date</option>
            </select>

            <select name="y_axis" value={filters.y_axis} onChange={handle_change}>
                <option value="">--Select Y_axis--</option>
                <option value="Amount">Amount ($)</option>
                <option value="Duration">Duration (mins)</option>
            </select>
        </div>
    )

}

export default LiveFilters